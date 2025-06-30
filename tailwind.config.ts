// tailwind.config.ts
export default {
    darkMode: "class", // Muhim!
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [require("tailwindcss-animate")],
  };
  