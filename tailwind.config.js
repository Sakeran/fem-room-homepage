module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    // Overrides

    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      gray: {
        300: "hsl(0, 0%, 27%)",
        600: "hsl(0, 0%, 63%)",
      },
    },

    letterSpacing: {
      "title-sm": "-1.17px",
      "title-lg": "-1.67px",
      nav: "-0.5px",
      body: "-0.25px",
      5: "5px",
      10: "10px",
    },

		fontFamily: {
			"sans": ["Spartan", "sans-serif"]
		},

    // Extensions
    extend: {
      fontSize: {
        "2.5xl": "1.75rem",
        "4.5xl": "2.5rem",
      },
    },
  },
};
