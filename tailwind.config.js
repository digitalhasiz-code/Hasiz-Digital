/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Brand Color System
        navy: {
          950: "#0B0F19",
          900: "#101828", // Primary Navy
          800: "#1E293B",
          700: "#334155", // Body Text
        },
        brand: {
          blue: "#2563EB", // Primary Blue
          sky: "#3B82F6", // Secondary Blue
          light: "#EFF6FF", // Subtle Blue Tint
          border: "#DBEAFE",
        },
        surface: {
          DEFAULT: "#F8FAFC", // Main Background
          card: "#FFFFFF", // White Cards
          muted: "#F1F5F9",
          border: "#E2E8F0", // Borders
        },
        content: {
          primary: "#101828", // Headings & Dark Text
          body: "#334155", // Body Paragraph Text
          secondary: "#64748B", // Supporting & Secondary Text
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "system-ui", "-apple-system", "sans-serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 24, 40, 0.05), 0 1px 2px -1px rgba(16, 24, 40, 0.05)",
        card: "0 4px 16px -2px rgba(16, 24, 40, 0.06), 0 2px 4px -1px rgba(16, 24, 40, 0.03)",
        elevated: "0 12px 24px -6px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
