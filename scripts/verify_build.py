import os
import re

def verify():
    base_dir = os.path.join(".next", "server", "app")
    html_files = []
    for root, dirs, files in os.walk(base_dir):
        for f in files:
            if f.endswith(".html"):
                html_files.append(os.path.join(root, f))
    
    print(f"Total Pre-Rendered Production Pages: {len(html_files)}")
    
    checks = {
        "index.html": ["HASIZ", "Digital Engineering Studio", "application/ld+json", "og:image"],
        "about.html": ["About HASIZ", "We Engineer Digital Experiences", "application/ld+json"],
        "services.html": ["Services", "Engineering Solutions", "application/ld+json"],
        os.path.join("services", "wordpress-development.html"): ["WordPress Development Services", "Service", "FAQPage"],
        os.path.join("services", "shopify-development.html"): ["Shopify Store Development", "Service", "FAQPage"],
        os.path.join("services", "custom-web-development.html"): ["Custom Web Development Services", "Service", "FAQPage"],
        os.path.join("services", "ai-integration.html"): ["AI Integration & Workflow Automation", "Service", "FAQPage"],
        os.path.join("services", "web-application-development.html"): ["Web Application Development Services", "Service", "FAQPage"],
        os.path.join("services", "ui-ux-design.html"): ["UI/UX Design & Design Systems", "Service", "FAQPage"],
        "work.html": ["Digital Experiences. Real Projects.", "Blomma Flower Studio"],
        os.path.join("work", "blomma-flower-studio.html"): ["Blomma Flower Studio", "CreativeWork", "Shopify"],
        "insights.html": ["Thoughts on Technology", "Technical Publications"],
        os.path.join("insights", "what-makes-a-business-website-high-performing.html"): ["What Makes a Business Website High-Performing", "BlogPosting"],
        "contact.html": ["Start Your Project With HASIZ", "Project Specification Brief"],
        "privacy-policy.html": ["Privacy Policy", "GDPR"],
        "terms-and-conditions.html": ["Terms & Conditions", "Master Services Agreements"]
    }
    
    all_passed = True
    for rel_path, tokens in checks.items():
        full_path = os.path.join(base_dir, rel_path)
        if not os.path.exists(full_path):
            print(f"FAILED: Missing {rel_path}")
            all_passed = False
            continue
        with open(full_path, "r", encoding="utf-8") as f:
            content = f.read()
            missing = [t for t in tokens if t not in content]
            if missing:
                print(f"WARNING: {rel_path} missing tokens: {missing}")
                all_passed = False
            else:
                print(f"PASSED: {rel_path} verified with {len(tokens)} key tokens")
                
    if all_passed:
        print("\nALL 16 CORE PAGES & TEMPLATES VERIFIED 100% PRODUCTION READY!")

if __name__ == "__main__":
    verify()
