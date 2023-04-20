/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#009DDC",
            accentColor: "#FAA916",
            accentColorShade: "#DC9104",
            black: "#333333",
            lighterBlack: "#525252",
            white: "#FFFFFF",
            backgroundColor: "#FBFFFE",
            backgroundColorShade: "#FBFDFE",
        },
        fontFamily: {
            sans: ["lato", "ui-sans-serif"],
        },
    },
    plugins: [],
};
