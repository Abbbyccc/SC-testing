/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary_green: {
                    DEFAULT: '#89B755',
                },
                primary_yellow: {
                    DEFAULT: '#F4BD1A',
                },
                primary_blue: {
                    DEFAULT: '#0CAABB',
                },
                primary_red: {
                    DEFAULT: '#F5625D',
                },
                pale_yellow: {
                    DEFAULT: '#EAEFBD',
                },
                bright_yellow: {
                    DEFAULT: '#CEFF85',
                },
            },
        },
    },
    plugins: [],
}
