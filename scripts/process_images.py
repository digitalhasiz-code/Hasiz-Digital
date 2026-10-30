import os
import json
from PIL import Image

# Allow large images for full-page screen captures
Image.MAX_IMAGE_PIXELS = None

MEDIA_DIR = "media"
OUT_PORTFOLIO_DIR = os.path.join("public", "images", "portfolio")
OUT_BRAND_DIR = os.path.join("public", "images", "brand")
OUT_SERVICES_DIR = os.path.join("public", "images", "services")

os.makedirs(OUT_PORTFOLIO_DIR, exist_ok=True)
os.makedirs(OUT_BRAND_DIR, exist_ok=True)
os.makedirs(OUT_SERVICES_DIR, exist_ok=True)

# Project mapping definitions
PROJECTS_CONFIG = [
    {
        "source": "Blomma - Hand-Tied Flower Studio E-Commerce.png",
        "slug": "blomma-flower-studio",
        "target_filename": "blomma-flower-studio.webp",
        "title": "Blomma Flower Studio",
        "category": "Shopify & Headless Commerce",
        "alt": "Blomma Hand-Tied Flower Studio bespoke e-commerce store interface",
        "target_page": "/work/blomma-flower-studio",
        "crop_top": False
    },
    {
        "source": "screencapture-pulseguard-gr-2026-01-14-16_05_08.png",
        "slug": "pulseguard-healthtech",
        "target_filename": "pulseguard-healthtech.webp",
        "title": "PulseGuard HealthTech",
        "category": "Web Application Development",
        "alt": "PulseGuard HealthTech medical device telemetry and patient monitoring dashboard",
        "target_page": "/work/pulseguard-healthtech",
        "crop_top": True
    },
    {
        "source": "screencapture-preview-inclusive-hydroponics-lovable-app-2026-05-08-10_32_31.png",
        "slug": "inclusive-hydroponics",
        "target_filename": "inclusive-hydroponics.webp",
        "title": "Inclusive Hydroponics",
        "category": "Custom Web Development",
        "alt": "Inclusive Hydroponics sustainable vertical agriculture web platform",
        "target_page": "/work/inclusive-hydroponics",
        "crop_top": True
    },
    {
        "source": "screencapture-melcasa-au-2026-05-08-12_41_53.png",
        "slug": "melcasa-australia",
        "target_filename": "melcasa-australia.webp",
        "title": "Melcasa Australia",
        "category": "Shopify Development",
        "alt": "Melcasa Australia high-end architectural furniture and interior design storefront",
        "target_page": "/work/melcasa-australia",
        "crop_top": True
    },
    {
        "source": "screencapture-wholesaler-dotclickpro-2026-01-13-15_15_05.png",
        "slug": "wholesaler-b2b-portal",
        "target_filename": "wholesaler-b2b-portal.webp",
        "title": "Wholesaler B2B Distribution",
        "category": "Web Application Development",
        "alt": "Wholesaler B2B digital catalog and commercial supply chain ordering platform",
        "target_page": "/work/wholesaler-b2b-portal",
        "crop_top": True
    },
    {
        "source": "screencapture-atrthygiene-wpcomstaging-2023-07-20-15_30_32.png",
        "slug": "atrt-hygiene-solutions",
        "target_filename": "atrt-hygiene-solutions.webp",
        "title": "Atrt Hygiene Solutions",
        "category": "WordPress Development",
        "alt": "Atrt Hygiene commercial sanitization and supplies WordPress WooCommerce portal",
        "target_page": "/work/atrt-hygiene-solutions",
        "crop_top": True
    },
    {
        "source": "screencapture-beauty-redrhinoz-2023-07-20-15_28_37.png",
        "slug": "red-rhinoz-beauty",
        "target_filename": "red-rhinoz-beauty.webp",
        "title": "Red Rhinoz Cosmetics",
        "category": "Shopify Development",
        "alt": "Red Rhinoz Beauty skincare and cosmetics digital commerce storefront",
        "target_page": "/work/red-rhinoz-beauty",
        "crop_top": True
    },
    {
        "source": "screencapture-funding-redrhinoz-2023-07-20-15_34_09.png",
        "slug": "red-rhinoz-capital",
        "target_filename": "red-rhinoz-capital.webp",
        "title": "Red Rhinoz Capital",
        "category": "AI Integration & Automation",
        "alt": "Red Rhinoz Capital fintech business funding application and underwriting engine",
        "target_page": "/work/red-rhinoz-capital",
        "crop_top": True
    },
    {
        "source": "screencapture-dluxedestinations-2023-07-20-15_46_04.png",
        "slug": "dluxe-destinations",
        "target_filename": "dluxe-destinations.webp",
        "title": "Deluxe Destinations",
        "category": "Custom Web Development",
        "alt": "Deluxe Destinations bespoke luxury villa booking and concierge platform",
        "target_page": "/work/dluxe-destinations",
        "crop_top": True
    },
    {
        "source": "screencapture-drdetoxifier-2023-07-20-15_36_44.png",
        "slug": "dr-detoxifier",
        "target_filename": "dr-detoxifier.webp",
        "title": "Dr. Detoxifier Wellness",
        "category": "WordPress Development",
        "alt": "Dr. Detoxifier organic health supplements e-commerce website",
        "target_page": "/work/dr-detoxifier",
        "crop_top": True
    },
    {
        "source": "screencapture-maryshavelle-lovable-app-2026-02-28-13_53_43.png",
        "slug": "mary-shavelle-couture",
        "target_filename": "mary-shavelle-couture.webp",
        "title": "Mary Shavelle Couture",
        "category": "UI/UX Design",
        "alt": "Mary Shavelle luxury fashion editorial portfolio and atelier design system",
        "target_page": "/work/mary-shavelle-couture",
        "crop_top": True
    },
    {
        "source": "screencapture-hellopineapple-dotclickdevelopers-2026-05-07-17_07_34.png",
        "slug": "hello-pineapple-studio",
        "target_filename": "hello-pineapple-studio.webp",
        "title": "Hello Pineapple Studio",
        "category": "Custom Web Development",
        "alt": "Hello Pineapple interactive creative agency portfolio and client showcase",
        "target_page": "/work/hello-pineapple-studio",
        "crop_top": True
    },
    {
        "source": "screencapture-poke-freeze-lovable-app-2026-02-27-12_41_30.png",
        "slug": "poke-freeze-app",
        "target_filename": "poke-freeze-app.webp",
        "title": "Poke Freeze Quick-Serve",
        "category": "Web Application Development",
        "alt": "Poke Freeze interactive custom bowl builder and quick-service ordering app",
        "target_page": "/work/poke-freeze-app",
        "crop_top": True
    },
    {
        "source": "screencapture-wilfredfrazer-home-2026-01-13-10_16_09.png",
        "slug": "wilfred-frazer-consulting",
        "target_filename": "wilfred-frazer-consulting.webp",
        "title": "Wilfred Frazer Advisory",
        "category": "WordPress Development",
        "alt": "Wilfred Frazer executive leadership and strategic consulting website",
        "target_page": "/work/wilfred-frazer-consulting",
        "crop_top": True
    },
    {
        "source": "AfterDark.jpg",
        "slug": "afterdark-hospitality",
        "target_filename": "afterdark-hospitality.webp",
        "title": "AfterDark Events",
        "category": "UI/UX Design",
        "alt": "AfterDark premium nightlife hospitality ticketing and VIP table booking experience",
        "target_page": "/work/afterdark-hospitality",
        "crop_top": False
    },
    {
        "source": "screencapture-fishing4x4-home-2-2023-08-16-15_12_18.png",
        "slug": "fishing-4x4-outdoors",
        "target_filename": "fishing-4x4-outdoors.webp",
        "title": "Fishing 4x4 Adventures",
        "category": "WordPress Development",
        "alt": "Fishing 4x4 outdoor expedition gear and customized vehicle accessories e-commerce",
        "target_page": "/work/fishing-4x4-outdoors",
        "crop_top": True
    },
    {
        "source": "screencapture-thecandycoach-2026-02-10-11_34_16.png",
        "slug": "the-candy-coach",
        "target_filename": "the-candy-coach.webp",
        "title": "The Candy Coach",
        "category": "Shopify Development",
        "alt": "The Candy Coach confectionery mobile event catering and custom sweets online store",
        "target_page": "/work/the-candy-coach",
        "crop_top": True
    },
    {
        "source": "screencapture-oneforedits-2023-07-20-15_52_13.png",
        "slug": "one-for-edits",
        "target_filename": "one-for-edits.webp",
        "title": "One For Edits Studio",
        "category": "Custom Web Development",
        "alt": "One For Edits cinematic video editing and color grading portfolio",
        "target_page": "/work/one-for-edits",
        "crop_top": True
    }
]

# Service visuals mapping
SERVICES_VISUALS = [
    {
        "source": "screencapture-atrthygiene-wpcomstaging-2023-07-20-15_30_32.png",
        "target_filename": "custom-wordpress-development.webp",
        "target_page": "/services/wordpress-development",
        "alt": "Custom WordPress development architecture and theme engineering at HASIZ",
        "crop_top": True
    },
    {
        "source": "Blomma - Hand-Tied Flower Studio E-Commerce.png",
        "target_filename": "shopify-store-design.webp",
        "target_page": "/services/shopify-development",
        "alt": "High-converting Shopify storefront and headless e-commerce engineering",
        "crop_top": False
    },
    {
        "source": "screencapture-preview-inclusive-hydroponics-lovable-app-2026-05-08-10_32_31.png",
        "target_filename": "custom-web-development-architecture.webp",
        "target_page": "/services/custom-web-development",
        "alt": "Scalable custom web development and responsive modern frontend systems",
        "crop_top": True
    },
    {
        "source": "screencapture-funding-redrhinoz-2023-07-20-15_34_09.png",
        "target_filename": "ai-workflow-automation.webp",
        "target_page": "/services/ai-integration",
        "alt": "Intelligent AI integration, workflow automation, and automated decision engines",
        "crop_top": True
    },
    {
        "source": "screencapture-pulseguard-gr-2026-01-14-16_05_08.png",
        "target_filename": "custom-web-application-dashboard.webp",
        "target_page": "/services/web-application-development",
        "alt": "Full-stack SaaS dashboard engineering and secure cloud web application architecture",
        "crop_top": True
    },
    {
        "source": "screencapture-maryshavelle-lovable-app-2026-02-28-13_53_43.png",
        "target_filename": "ui-ux-design-system.webp",
        "target_page": "/services/ui-ux-design",
        "alt": "Human-centered UI/UX design systems, interactive prototypes, and typography hierarchy",
        "crop_top": True
    },
    {
        "source": "Luxury E-commerce.jpg",
        "target_filename": "hasiz-web-development-portfolio.webp",
        "target_page": "/work",
        "alt": "HASIZ digital engineering studio portfolio showcase of international projects",
        "crop_top": False
    }
]

inventory = []

def resolve_file(filename):
    src_full = os.path.join(MEDIA_DIR, filename)
    if os.path.exists(src_full):
        return src_full
    # Check by normalized lower case or prefix match
    base_prefix = filename.split(" ")[0].lower()
    for f in os.listdir(MEDIA_DIR):
        if f.lower().startswith(base_prefix):
            return os.path.join(MEDIA_DIR, f)
        if base_prefix in f.lower():
            return os.path.join(MEDIA_DIR, f)
    return None

def process_image(src_rel_path, dest_rel_path, crop_top=False, target_width=1200, target_height=750):
    src_full = resolve_file(src_rel_path)
    if not src_full or not os.path.exists(src_full):
        print(f"Warning: file not found: {src_rel_path}")
        return None

    dest_full = dest_rel_path

    with Image.open(src_full) as im:
        orig_w, orig_h = im.size
        orig_format = im.format
        orig_size_bytes = os.path.getsize(src_full)

        # Convert to RGB if RGBA or P
        if im.mode in ("RGBA", "P"):
            im_rgb = Image.new("RGB", im.size, (255, 255, 255))
            if im.mode == "RGBA":
                im_rgb.paste(im, mask=im.split()[3])
            else:
                im_rgb.paste(im)
            im = im_rgb
        elif im.mode != "RGB":
            im = im.convert("RGB")

        if crop_top and orig_h > target_height:
            # Crop the top viewport representing the hero of the website
            crop_height = int(orig_w * (target_height / target_width))
            if crop_height > orig_h:
                crop_height = orig_h
            cropped = im.crop((0, 0, orig_w, crop_height))
            resized = cropped.resize((target_width, target_height), Image.Resampling.LANCZOS)
        else:
            # Resize keeping aspect ratio or fit target width
            aspect = orig_h / orig_w
            new_h = int(target_width * aspect)
            if new_h > 1200:
                new_h = 1200
            resized = im.resize((target_width, new_h), Image.Resampling.LANCZOS)

        # Save as WebP with optimal 84 quality
        resized.save(dest_full, "WEBP", quality=84, method=6)

        final_size_bytes = os.path.getsize(dest_full)
        final_w, final_h = resized.size
        savings_pct = (1 - (final_size_bytes / orig_size_bytes)) * 100

        return {
            "orig_dim": f"{orig_w}x{orig_h}",
            "orig_size_kb": f"{orig_size_bytes/1024:.1f} KB",
            "final_dim": f"{final_w}x{final_h}",
            "final_size_kb": f"{final_size_bytes/1024:.1f} KB",
            "savings_pct": f"{savings_pct:.1f}%",
            "final_path": "/" + os.path.relpath(dest_full, "public").replace("\\", "/")
        }

print("Processing portfolio images...")
for p in PROJECTS_CONFIG:
    dest_path = os.path.join(OUT_PORTFOLIO_DIR, p["target_filename"])
    res = process_image(p["source"], dest_path, crop_top=p["crop_top"], target_width=1200, target_height=750)
    if res:
        inventory.append({
            "filePath": res["final_path"],
            "imageSubject": p["title"] + " (" + p["category"] + ")",
            "targetPage": p["target_page"],
            "recommendedFilename": p["target_filename"],
            "altText": p["alt"],
            "dimensions": res["final_dim"],
            "format": "WebP",
            "compressionStatus": f"Optimized from {res['orig_size_kb']} down to {res['final_size_kb']} ({res['savings_pct']} reduction)",
            "slug": p["slug"],
            "title": p["title"],
            "category": p["category"]
        })

print("Processing service visuals...")
for s in SERVICES_VISUALS:
    dest_path = os.path.join(OUT_SERVICES_DIR, s["target_filename"])
    res = process_image(s["source"], dest_path, crop_top=s["crop_top"], target_width=1200, target_height=750)
    if res:
        inventory.append({
            "filePath": res["final_path"],
            "imageSubject": s["target_filename"].replace(".webp", "").replace("-", " ").title(),
            "targetPage": s["target_page"],
            "recommendedFilename": s["target_filename"],
            "altText": s["alt"],
            "dimensions": res["final_dim"],
            "format": "WebP",
            "compressionStatus": f"Optimized from {res['orig_size_kb']} down to {res['final_size_kb']} ({res['savings_pct']} reduction)",
            "slug": s["target_filename"].replace(".webp", ""),
            "title": s["target_filename"].replace(".webp", "").replace("-", " ").title(),
            "category": "Service Visual"
        })

# Write JSON inventory
os.makedirs(os.path.join("src", "data"), exist_ok=True)
with open(os.path.join("src", "data", "imageInventory.json"), "w", encoding="utf-8") as f:
    json.dump(inventory, f, indent=2)

# Write Markdown Image Asset Inventory report
with open("IMAGE_ASSET_INVENTORY.md", "w", encoding="utf-8") as f:
    f.write("# HASIZ Digital Engineering Studio — Image Asset Inventory\n\n")
    f.write("Generated per Section 8 specifications for Advanced Image SEO & Core Web Vitals optimization.\n\n")
    f.write("| Target Page | Recommended Filename | WebP Path | Alt Text | Dimensions | Format | Compression Status |\n")
    f.write("|-------------|----------------------|-----------|----------|------------|--------|--------------------|\n")
    for item in inventory:
        f.write(f"| `{item['targetPage']}` | `{item['recommendedFilename']}` | `{item['filePath']}` | {item['altText']} | {item['dimensions']} | {item['format']} | {item['compressionStatus']} |\n")

print(f"Successfully processed {len(inventory)} images and generated asset inventory!")
