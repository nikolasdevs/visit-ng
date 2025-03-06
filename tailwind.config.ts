import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        primary: "#17481A",
        secondary: "var(--secondary)",
        onPrimary: "#EAF8EB",
        onSecondary: "var(--secondary-foreground)",
        onHoverPrimary: "#2D7331",
        card: "#999",
      },
    },
    fontFamily: {
      display: ["Montserrat"],
    },
  },
  plugins: [],
} satisfies Config;
