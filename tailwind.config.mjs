/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // Next.js App Router pages/components
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Your reusable components
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F"
      },
      fontFamily: {
        Outfit: ["outfit", "sans-serif"],
        Ovo: ["ovo", "serif"]
      },
    },
  },
  
};
