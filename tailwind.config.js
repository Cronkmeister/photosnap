module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: { peach: "#FFC593", purple: "#BC7198", blue: "#5A77FF" },
        black: "#000000",
        grey: "#DFDFDF",
        white: "#FFFFFF",
        "black-900": "var(--black_900)",
        "black-900_00": "var(--black_900_00)",
        "black-900_7f": "var(--black_900_7f)",
        "black-900_99": "var(--black_900_99)",
        "black-900_8a": "var(--black_900_8a)",
        gray: {
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          300: "var(--gray_300)",
        },
        indigo: { 200: "var(--indigo_200)" },
        orange: { 200: "var(--orange_200)" },
        purple: { 300: "var(--purple_300)" },
        "white-a700": "var(--white_a700)",
        "white-a700_3f": "var(--white_a700_3f)",
        "white-a700_7f": "var(--white_a700_7f)",
        "white-a700_99": "var(--white_a700_99)",
        "white-a700_bf": "var(--white_a700_bf)",
      },
      fontFamily: { sans: ['"DM Sans"', "sans-serif"], dmsans: "DM Sans" },
      fontSize: {
        h1: ["40px", { lineHeight: "48px", letterSpacing: "0.05em" }],
        h2: ["24px", { lineHeight: "25px" }],
        h3: ["18px", { lineHeight: "25px" }],
        h4: ["12px", { lineHeight: "16px", letterSpacing: "0.1em" }],
        body: ["15px", { lineHeight: "25px" }],
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(135deg, #FFC593 0%, #BC7198 59%, #5A77FF 100%)",
        gradient1: "linear-gradient(180deg, #00000000, #0000008a)",
        gradient2: "linear-gradient(26deg, #ffc493, #bb7197, #5977ff)",
      },
      // screens: {
      //   md: { min: "1050px" },
      //   sm: { max: "550px" },
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
