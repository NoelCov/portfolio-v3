/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js, jsx, ts, tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#59ddda",
            secondaryColor: "#fc7033",
            accentColor: "#6d6d6d",
            black: "#2c363f",
            white: "#FFFFFF",
            backgroundColor: "#f2f5ea",
            darkerBackgroundColor: "#d6dbd2",
        },
    },
    plugins: [],
};
