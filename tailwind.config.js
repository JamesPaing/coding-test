/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00A6FF',
                secondary: '#FFD600',
                tertiary: '#888888',
                'light-gray': '#F2F2F9',
            },
            backgroundImage: {
                banner: "url('/assets/images/banner-bg.png')",
                'fav-mask': "url('/assets/favorite-mask.svg')",
            },
        },
    },
    plugins: [],
};
