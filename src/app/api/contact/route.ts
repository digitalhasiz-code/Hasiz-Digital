import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import nodemailer from "nodemailer";

const TARGET_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL || "digitalhasiz@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      email, 
      companyName, 
      service, 
      budget, 
      timeline, 
      websiteUrl, 
      projectDescription, 
      honeypot,
      formName 
    } = body;

    // Anti-spam honeypot
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "A valid full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "A valid business email address is required." },
        { status: 400 }
      );
    }

    if (!projectDescription || typeof projectDescription !== "string" || projectDescription.trim().length < 15) {
      return NextResponse.json(
        { success: false, message: "Project description must contain at least 15 characters." },
        { status: 400 }
      );
    }

    // Resolve explicit form name
    const resolvedFormName = formName && typeof formName === "string" && formName.trim().length > 0
      ? formName.trim()
      : (service ? `${service} Page Inquiry Form` : "Main Contact / Start a Project Form");

    // Structured lead record
    const submission = {
      receivedAt: new Date().toISOString(),
      formName: resolvedFormName,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      companyName: companyName ? companyName.trim() : "Not specified",
      service: service || "Custom Web Development",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      websiteUrl: websiteUrl ? websiteUrl.trim() : "None",
      projectDescription: projectDescription.trim(),
      targetEmail: TARGET_EMAIL,
    };

    console.log(`[HASIZ LEAD ALERT -> ${TARGET_EMAIL}]:`, JSON.stringify(submission, null, 2));

    // 1. Deliver Email via Nodemailer (if SMTP credentials or Gmail App Password configured)
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || (process.env.SMTP_PASS ? "digitalhasiz@gmail.com" : undefined);
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlBody = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF;">
            <div style="background-color: #101828; padding: 16px 20px; border-radius: 8px; margin-bottom: 24px;">
              <h2 style="color: #FFFFFF; margin: 0; font-size: 20px; letter-spacing: -0.5px;">HASIZ Studio — New Lead Notification</h2>
              <p style="color: #94A3B8; margin: 4px 0 0 0; font-size: 13px; font-family: monospace;">Target Recipient: ${TARGET_EMAIL}</p>
            </div>

            <div style="background-color: #EFF6FF; border-left: 4px solid #2563EB; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px; color: #1E40AF; font-weight: 600;">
                Source Form: <span style="font-size: 15px; color: #101828;">${submission.formName}</span>
              </p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tbody>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; width: 160px;">Client Name</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 600;">${submission.fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600;">Email Address</td>
                  <td style="padding: 10px 0; color: #2563EB; font-size: 14px;"><a href="mailto:${submission.email}" style="color: #2563EB; text-decoration: none;">${submission.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600;">Company / Org</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${submission.companyName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600;">Service Required</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 600;">${submission.service}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600;">Budget Range</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${submission.budget}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600;">Timeline</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${submission.timeline}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600;">Existing Website</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${submission.websiteUrl}</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 14px; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0;">Project Scope & Requirements:</h3>
              <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1E293B; white-space: pre-wrap;">
                ${submission.projectDescription}
              </div>
            </div>

            <div style="padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #94A3B8; text-align: center;">
              Submitted via <strong style="color: #64748B;">https://www.hasiz.com</strong> at ${submission.receivedAt}
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"HASIZ Studio Leads" <${smtpUser}>`,
          to: TARGET_EMAIL,
          replyTo: submission.email,
          subject: `[HASIZ Lead] ${submission.formName}: ${submission.fullName} (${submission.service})`,
          text: `New Inquiry from ${submission.formName}\nClient: ${submission.fullName} (${submission.email})\nCompany: ${submission.companyName}\nService: ${submission.service}\nBudget: ${submission.budget}\nTimeline: ${submission.timeline}\nWebsite: ${submission.websiteUrl}\nScope: ${submission.projectDescription}`,
          html: htmlBody,
        });

        console.log(`[SMTP Email Success]: Lead successfully delivered to ${TARGET_EMAIL}`);
      } catch (smtpErr) {
        console.error("[SMTP Delivery Error]:", smtpErr);
      }
    }

    // 2. Deliver Email via Resend HTTP API (if RESEND_API_KEY configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "HASIZ Studio <onboarding@resend.dev>",
            to: [TARGET_EMAIL],
            reply_to: submission.email,
            subject: `[HASIZ Lead] ${submission.formName}: ${submission.fullName} (${submission.service})`,
            html: `
              <h2>New Project Inquiry from <strong>${submission.formName}</strong></h2>
              <p><strong>Client:</strong> ${submission.fullName} (${submission.email})</p>
              <p><strong>Company:</strong> ${submission.companyName}</p>
              <p><strong>Service:</strong> ${submission.service}</p>
              <p><strong>Budget:</strong> ${submission.budget}</p>
              <p><strong>Timeline:</strong> ${submission.timeline}</p>
              <p><strong>Website:</strong> ${submission.websiteUrl}</p>
              <p><strong>Project Overview:</strong></p>
              <blockquote style="background:#f1f5f9;padding:12px;border-left:4px solid #2563eb;">${submission.projectDescription}</blockquote>
            `,
          }),
        });

        if (resendResponse.ok) {
          console.log(`[Resend Email Success]: Lead successfully sent to ${TARGET_EMAIL}`);
        } else {
          const resendErrData = await resendResponse.json();
          console.warn("[Resend Warning]:", resendErrData);
        }
      } catch (resendErr) {
        console.error("[Resend Delivery Error]:", resendErr);
      }
    }

    // 3. Webhook Dispatch (e.g. Slack / Discord / Zapier / Make / n8n)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `🎯 *New Project Inquiry for HASIZ Studio*\n*Form Source:* ${submission.formName}\n*Target Email:* ${TARGET_EMAIL}\n*Client:* ${submission.fullName} (<mailto:${submission.email}|${submission.email}>)\n*Company:* ${submission.companyName}\n*Service:* ${submission.service}\n*Budget:* ${submission.budget}\n*Timeline:* ${submission.timeline}\n*Website:* ${submission.websiteUrl}\n*Scope:* ${submission.projectDescription}`,
          }),
        });
      } catch (webhookErr) {
        console.error("[Webhook Error]:", webhookErr);
      }
    }

    // 4. Save Inquiry to Supabase Database (with form_name & target_email)
    try {
      const { error: dbError } = await supabase
        .from("inquiries")
        .insert([
          {
            full_name: submission.fullName,
            email: submission.email,
            company_name: submission.companyName,
            service: submission.service,
            budget: submission.budget,
            timeline: submission.timeline,
            website_url: submission.websiteUrl,
            project_description: submission.projectDescription,
            form_name: submission.formName,
            created_at: submission.receivedAt,
          },
        ]);

      if (dbError) {
        // Fallback insert if form_name column hasn't been added to existing Supabase table yet
        console.warn("[Supabase Note, retrying with base schema]:", dbError.message);
        await supabase
          .from("inquiries")
          .insert([
            {
              full_name: submission.fullName,
              email: submission.email,
              company_name: submission.companyName,
              service: submission.service,
              budget: submission.budget,
              timeline: submission.timeline,
              website_url: submission.websiteUrl,
              project_description: `[FORM: ${submission.formName}] ${submission.projectDescription}`,
              created_at: submission.receivedAt,
            },
          ]);
      } else {
        console.log(`[Supabase]: Lead successfully stored under form '${submission.formName}'.`);
      }
    } catch (sbErr) {
      console.warn("[Supabase Insert Warning]:", sbErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you. Your project brief from '${submission.formName}' has been dispatched to ${TARGET_EMAIL}. Our engineering leads will respond within 24 hours.`,
        formName: submission.formName,
        recipient: TARGET_EMAIL,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[API Contact Route Error]:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred while processing your inquiry. Please email us directly at digitalhasiz@gmail.com",
      },
      { status: 500 }
    );
  }
}
