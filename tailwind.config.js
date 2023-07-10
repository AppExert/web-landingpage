const generateColorClass = (variable) => {
  return `var(--${variable})`;
};

const brandColors = {
  100: generateColorClass("brand-100"),
  200: generateColorClass("brand-200"),
  300: generateColorClass("brand-300"),
  400: generateColorClass("brand-400"),
  500: generateColorClass("brand-500"),
  600: generateColorClass("brand-600"),
  700: generateColorClass("brand-700"),
  800: generateColorClass("brand-800"),
  900: generateColorClass("brand-900"),
};

const grayColors = {
  100: generateColorClass("gray-100"),
  200: generateColorClass("gray-200"),
  300: generateColorClass("gray-300"),
  400: generateColorClass("gray-400"),
  500: generateColorClass("gray-500"),
  600: generateColorClass("gray-600"),
  700: generateColorClass("gray-700"),
  800: generateColorClass("gray-800"),
  900: generateColorClass("gray-900"),
};

// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  important: true,
  theme: {
    extend: {
      colors: {
        brand: brandColors,
        gray: grayColors,
        "light-gray": generateColorClass("light-gray"),
        "more-gray": generateColorClass("more-gray"),
        "blue-mid": generateColorClass("blue-mid"),
        "footer-gray-light": generateColorClass("footer-gray-light"),
        "footer-gray-dark": generateColorClass("footer-gray-dark"),
        "blue-dark": generateColorClass("blue-dark"),
        "blue-light": generateColorClass("blue-light"),
        "yellow-dark": generateColorClass("yellow-dark"),
        "text-black": generateColorClass("text-black"),
        "text-blue": generateColorClass("text-blue"),
        "text-gray": generateColorClass("text-gray"),
        "text-gray-dark": generateColorClass("text-gray-dark"),
        "green-light": generateColorClass("green-light"),
        "green-dark": generateColorClass("green-dark"),
        "button-text": generateColorClass("button-text"),
        "dark-fill": generateColorClass("dark-fill"),
        "input-box": generateColorClass("input-box"),
        "dark-mode": generateColorClass("dark-mode"),
      },
      scale: {
        "-1": "-1",
      },
      fontFamily: {
        header: ["Inter"],
        text: ["Inter"],
      },
    },
  },
  variants: {},
  plugins: [],
};
