/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        header_bg:"url('./images/mobile/image-header.jpg')",
        desktop_header_bg:"url('./images/desktop/image-header.jpg')",
        graphicDesign_bg:"url('./images/mobile/image-graphic-design.jpg')",
        desktop_graphicDesign_bg:"url('./images/desktop/image-graphic-design.jpg')",
        photography_bg:"url('./images/mobile/image-photography.jpg')",
        desktop_photography_bg:"url('./images/desktop/image-photography.jpg')",



      },
      fontFamily:{
        fraunces:['Fraunces', 'serif'],
        barlow:['Barlow', 'sans-serif'],
      },
      boxShadow:{
        'learnMoreShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      backgroundSize:{
        '100%':'100%'
      }
    },
  },
  plugins: [],
}
