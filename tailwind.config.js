/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#1771f7",
            accentColor: "#FFCC00",
            accentColorShade: "#DC9104",
            black: "#262626",
            lighterBlack: "#525252",
            white: "#FFFFFF",
            backgroundColor: "#FBFFFE",
            backgroundColorShade: "#FBFDFE",
            gray: "#707070",
            midGray: "#B8B8B8",
            lightGray: "#F5F5F5",
            
            
            textColor: "#151414",
            bgColor: "#fcfdfc",
            primaryColor: "#1063b7",
            secondaryColor: "#d1d0d2",
            accentColor: "#2cbfbf",
            accentColorShade: "#26A6A6"
        },
        fontFamily: {
            sans: ["lato", "ui-sans-serif"],
        },
    },
    plugins: [],
};
