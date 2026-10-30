import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, companyName, service, budget, timeline, websiteUrl, projectDescription, honeypot } = body;

    // Spam honeypot trap: if filled by a bot, respond with simulated success without processing
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

    // Structured log for studio audit trail
    const submission = {
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      companyName: companyName ? companyName.trim() : "Not specified",
      service: service || "Custom Web Development",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      websiteUrl: websiteUrl ? websiteUrl.trim() : "None",
      projectDescription: projectDescription.trim(),
    };

    console.log("[HASIZ INQUIRY RECEIVED]:", JSON.stringify(submission, null, 2));

    // Save inquiry to Supabase Database
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
            created_at: submission.receivedAt,
          },
        ]);

      if (dbError) {
        console.warn("[Supabase Insert Note]:", dbError.message);
      } else {
        console.log("[Supabase]: Inquiry successfully saved to database.");
      }
    } catch (sbErr) {
      console.warn("[Supabase Warning]:", sbErr);
    }

    // Optional environment variable webhook dispatch (e.g. Slack / Discord / Resend / Supabase)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `*New Project Inquiry for HASIZ Studio*\n*Client:* ${submission.fullName} (${submission.email})\n*Company:* ${submission.companyName}\n*Service:* ${submission.service}\n*Budget:* ${submission.budget}\n*Timeline:* ${submission.timeline}\n*Scope:* ${submission.projectDescription}`
          })
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your project brief has been logged and our engineering leads will respond within 24 hours."
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error processing inquiry. Please email contact@hasiz.com directly." },
      { status: 500 }
    );
  }
}

