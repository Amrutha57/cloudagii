/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#050508",
        "dark-card": "#0f1117",
        "dark-border": "#1a1f2e",
        "accent-blue": "#3b82f6",
        "accent-cyan": "#06b6d4",
        "accent-purple": "#8b5cf6",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-dark": "linear-gradient(180deg, #0f1729 0%, #1a2847 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
      },
      animation: {
        "gradient-shift": "gradient-shift 6s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "twinkle": "twinkle 2s ease-in-out infinite",
        "fall": "fall linear forwards",
        "sparkle-pulse": "sparkle-pulse 1.5s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "fall": {
          "0%": { transform: "translateY(-100vh) translateX(0)", opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh) translateX(100px)", opacity: "0" },
        },
        "sparkle-pulse": {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
