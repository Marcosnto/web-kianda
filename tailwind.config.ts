import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "header-image": "url(/imgs/menu_image.png)",
      },
      gridTemplateColumns: {
        blogCards: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      fontFamily: {
        sans: ["General Sans", "sans-serif"],
        rasputin: ["Rasputin", "sans-serif"],
        georgia: ["Georgia", "sans-serif"],
      },
      fontSize: {
        s: "0.9rem",
      },
      screens: {
        //very-small
        vs: "320px",
        //medium-small
        ms: "400px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        k_brown: "rgb(var(--color-brown-kianda))", // #402D12
        k_beige: "rgb(var(--color-beige-kianda))", // #E6D7C0
        k_green_dark: "rgb(var(--color-green-olive-dark-kianda))", // #273618
        k_green_light: "rgb(var(--color-green-olive-light-kianda))", // #606C38
        k_amber: "rgb(var(--color-amber-kianda))", // #DCA05E
        k_bronze: "rgb(var(--color-bronze-kianda))", // #C98B31
        k_cinnamon: "rgb(var(--color-cinnamon-kianda))", // #BB6C25
        k_orange: "rgb(var(--color-orange-kianda))", // #FFB703
        k_vivid_orange: "rgb(var(--color-vivid-orange-kianda))", // #F9A528
        k_off_white: "rgb(var(--color-off-white-kianda))", // #F3F1E4
        k_yellow_light: "rgb(var(--color-yellow-light))", // #FEFAE0
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
} satisfies Config;

export default config;
