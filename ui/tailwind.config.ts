import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        basic: {
          white: "#FCFCFC",
          black: "#0C0C1E"
        },

        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          300: "#93C5FD",
          400: "#60A5FA",
          800: "#1E40AF",
          900: "#1E3A8A",
        },

        secondary: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#4F575E",
          600: "#E5E5EB",
          700: "#272B30",
          800: "#5B21B6",
          900: "#4C1D95",
        },

        neutral: {
          50: "#F9F9FB",
          100: "#F3F3F6",
          200: "#E9ECEF",
          300: "#D1D1DB",
          400: "#9C9CAF",
          500: "#6B6B80",
          600: "#4B4B63",
          700: "#373751",
          800: "#1F1F37",
          900: "#14142B",
        },

        info: {
          50: "#E5F5FC",
          100: "#017AAD",
        },

        success: {
          50: "#EAF3EB",
          100: "#29823B",
        },

        warning: {
          50: "#FDF4E5",
          100: "#E99400",
        },

        error: {
          50: "#FCEAEA",
          100: "#DC2020",
        },

        others: {
          blue: "#29BFEE",
          magenta: "#EE29CE",
          red: "EE2970",
          neutral: "#B16711",
          darkred: "#B1111",
          green: "#429919",
        }

      },
      boxShadow: {
        xs: "0px 0px 0px 1px #FFFFFF",
        sm: "0px 4px 6px 0px #0000001A",
        md: "0px 9px 18px 0px #00000026",
      }
    },
  },
  plugins: [],
};
export default config;
