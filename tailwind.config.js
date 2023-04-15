/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js, jsx, ts, tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#0B77DB",
            // secondaryColor: "#fca311",
            accentColor: "#FC7940",
            accentColorShade: "#FF9466",
            black: "#333333",
            lighterBlack: "#525252",
            white: "#FFFFFF",
            backgroundColor: "#F3F7FB",
            backgroundColorShade: "#D8E6F3",
        },
    },
    plugins: [],
};
