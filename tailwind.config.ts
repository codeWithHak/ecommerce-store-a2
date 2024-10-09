import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        "integral-cf": ['integralcf-bold', 'sans-serif']
      },
      fontWeight:{
        bold:'700',
        heavy:'900'
      },
      backgroundImage: {
        'hero': "url('/assets/images/bg-hero-img.png')",
        'casual': "url('/assets/images/casual-img1.png')",
        'formal': "url('/assets/images/formal-img1.png')",
        'party': "url('assets/images/gym-party1.png')",
        'gym': "url('assets/images/gym-img1.png')",
        
      },
      backgroundPosition: {
        'center-down': 'center 1px9', // Adjust as needed
      },
      screens: {
        'above1700': '1700px',
      }
    },
  },
  plugins: [],
};
export default config;
