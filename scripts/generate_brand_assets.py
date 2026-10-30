import os
from PIL import Image, ImageDraw, ImageFont

BRAND_DIR = os.path.join("public", "images", "brand")
APP_DIR = os.path.join("src", "app")
os.makedirs(BRAND_DIR, exist_ok=True)
os.makedirs(APP_DIR, exist_ok=True)

# 1. Dark Logo SVG (For Light Backgrounds)
logo_dark_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 50" width="240" height="50" fill="none">
  <g font-family="'Space Grotesk', system-ui, -apple-system, sans-serif" font-weight="700" letter-spacing="-0.03em">
    <text x="2" y="36" font-size="36" fill="#101828">HASIZ</text>
    <circle cx="120" cy="34" r="4.5" fill="#2563EB" />
  </g>
  <text x="134" y="24" font-family="'Inter', system-ui, sans-serif" font-weight="600" font-size="8.5" letter-spacing="0.18em" fill="#64748B">DIGITAL</text>
  <text x="134" y="36" font-family="'Inter', system-ui, sans-serif" font-weight="600" font-size="8.5" letter-spacing="0.18em" fill="#2563EB">STUDIO</text>
</svg>'''

# 2. Light Logo SVG (For Dark Backgrounds)
logo_light_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 50" width="240" height="50" fill="none">
  <g font-family="'Space Grotesk', system-ui, -apple-system, sans-serif" font-weight="700" letter-spacing="-0.03em">
    <text x="2" y="36" font-size="36" fill="#FFFFFF">HASIZ</text>
    <circle cx="120" cy="34" r="4.5" fill="#3B82F6" />
  </g>
  <text x="134" y="24" font-family="'Inter', system-ui, sans-serif" font-weight="600" font-size="8.5" letter-spacing="0.18em" fill="#94A3B8">DIGITAL</text>
  <text x="134" y="36" font-family="'Inter', system-ui, sans-serif" font-weight="600" font-size="8.5" letter-spacing="0.18em" fill="#60A5FA">STUDIO</text>
</svg>'''

# 3. Compact Brand Icon SVG (Favicon / App Icon)
icon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <rect width="64" height="64" rx="14" fill="#101828"/>
  <rect x="1" y="1" width="62" height="62" rx="13" stroke="#1E293B" stroke-width="1.5"/>
  <text x="12" y="45" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="700" font-size="36" fill="#FFFFFF">H</text>
  <circle cx="48" cy="42" r="4.5" fill="#2563EB"/>
</svg>'''

with open(os.path.join(BRAND_DIR, "logo-dark.svg"), "w", encoding="utf-8") as f:
    f.write(logo_dark_svg)

with open(os.path.join(BRAND_DIR, "logo-light.svg"), "w", encoding="utf-8") as f:
    f.write(logo_light_svg)

with open(os.path.join(BRAND_DIR, "icon.svg"), "w", encoding="utf-8") as f:
    f.write(icon_svg)

with open(os.path.join("public", "icon.svg"), "w", encoding="utf-8") as f:
    f.write(icon_svg)

with open(os.path.join(APP_DIR, "icon.svg"), "w", encoding="utf-8") as f:
    f.write(icon_svg)

# 4. Generate high-res 1200x630 Social Sharing OG Image
og_width = 1200
og_height = 630
og_img = Image.new("RGB", (og_width, og_height), color=(16, 24, 40)) # #101828 Midnight Navy
draw = ImageDraw.Draw(og_img)

# Draw subtle engineering grid pattern
grid_color = (24, 34, 54)
for x in range(0, og_width, 40):
    draw.line([(x, 0), (x, og_height)], fill=grid_color, width=1)
for y in range(0, og_height, 40):
    draw.line([(0, y), (og_width, y)], fill=grid_color, width=1)

# Subtle blue ambient glow rectangle
draw.rounded_rectangle([70, 70, og_width - 70, og_height - 70], radius=24, outline=(37, 99, 235), width=2)
draw.rounded_rectangle([72, 72, og_width - 72, og_height - 72], radius=22, outline=(30, 41, 59), width=1)

# Load fonts if possible, or use basic
try:
    font_brand = ImageFont.truetype("arialbd.ttf", 64)
    font_tagline = ImageFont.truetype("arialbd.ttf", 44)
    font_sub = ImageFont.truetype("arial.ttf", 24)
    font_badge = ImageFont.truetype("arialbd.ttf", 18)
except Exception:
    font_brand = ImageFont.load_default()
    font_tagline = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_badge = ImageFont.load_default()

# Top Tag / Category
draw.text((120, 120), "DIGITAL ENGINEERING STUDIO", fill=(96, 165, 250), font=font_badge)

# Main Wordmark HASIZ.
draw.text((120, 160), "HASIZ", fill=(255, 255, 255), font=font_brand)
bbox_h = draw.textbbox((120, 160), "HASIZ", font=font_brand)
draw.ellipse([bbox_h[2] + 4, bbox_h[3] - 22, bbox_h[2] + 20, bbox_h[3] - 6], fill=(37, 99, 235))

# Tagline
draw.text((120, 270), "We Engineer Digital Experiences.", fill=(255, 255, 255), font=font_tagline)

# Body / Supporting copy
draw.text((120, 345), "High-performance websites, e-commerce platforms, custom software,", fill=(148, 163, 184), font=font_sub)
draw.text((120, 385), "and intelligent digital solutions for modern businesses worldwide.", fill=(148, 163, 184), font=font_sub)

# Bottom Tech Pills / Capabilities
badges = ["WordPress", "Shopify", "Custom Web", "Web Apps", "AI Integration", "UI/UX Systems"]
curr_x = 120
curr_y = 480
for b in badges:
    b_box = draw.textbbox((0, 0), b, font=font_badge)
    w = b_box[2] - b_box[0] + 28
    h = 38
    draw.rounded_rectangle([curr_x, curr_y, curr_x + w, curr_y + h], radius=8, fill=(30, 41, 59), outline=(51, 65, 85))
    draw.text((curr_x + 14, curr_y + 9), b, fill=(226, 232, 240), font=font_badge)
    curr_x += w + 14

og_out_path = os.path.join(BRAND_DIR, "og-image.png")
og_img.save(og_out_path, "PNG", optimize=True)

# Also save into public/
og_img.save(os.path.join("public", "og-image.png"), "PNG", optimize=True)

print("Brand assets created successfully!")

