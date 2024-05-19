module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary_text: "#DB4444",
        secondary_text: "#6c757d",
        success_text: "#28a745",
        danger_text: "#dc3545",
        warning_text: "#ffc107",
        info_text: "#17a2b8",
        light_text: "#f8f9fa",
        dark_text: "#343a40",
		//hover text
        primary_hover_text: "#0070f3",
        secondary_hover_text: "#6c757d",
        success_hover_text: "#28a745",
        danger_hover_text: "#dc3545",
        warning_hover_text: "#ffc107",
        info_hover_text: "#17a2b8",
        lightHover_text: "#f8f9fa",
        dark_hover_text: "#343a40",
		//bg color
		//bg color hover
		//border
		//border hover
      },
      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],

      // },
      screens: {
        "2xl": { max: "1535px" },
      },
    },
  },
  plugins: [],
};
