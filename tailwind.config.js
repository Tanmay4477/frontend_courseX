/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans'],
        satoshiBold: ['Satoshi-Bold', 'sans'],
        satoshiBlack: ['Satoshi-Black', 'sans']
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        marquee2: "marquee2 45s linear infinite",
        "bounce-slow": "bounce-slow 3s infinite ",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "bounce-slow": {
          "0%": {
            transform: "translateY(-3%) rotate(3deg)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateY(-3%) rotate(3deg)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0) rotate(3deg)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
