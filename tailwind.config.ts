/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"]
      },
      colors: {
        'custom-blue': '#0D8CDC',
        'custom-green': '#11B0AB',
      },
      // Add these extensions for 3D transforms
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        '1000': '1000px',
      }
    },
  },
  // Enable core plugins
  corePlugins: {
    backfaceVisibility: true,
    transformStyle: true,
    perspective: true,
    rotate: true,
  },
  plugins: [],
}