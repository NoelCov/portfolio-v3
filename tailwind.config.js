/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#0B77DB",
            accentColor: "#FC7940",
            accentColorShade: "#FF9466",
            black: "#333333",
            lighterBlack: "#525252",
            white: "#FFFFFF",
            backgroundColor: "#F7FAFC",
            backgroundColorShade: "#FBFDFE",
        },
    },
    plugins: [],
};
