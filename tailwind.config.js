/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,vue,js}', './index.html'],
    theme: {
        extend: {
            colors: {
                'app-white1': '#fbfbfb',
                'app-white2': '#f0f1f3',
                'app-gray': '#c4c4c4',
                'app-black': '#2d2d2e',
            },
            height: {
                '87': '21.875rem',
                '106': '26.5rem',
            },
            width: {
                '57': '14.475rem',
            },
            minHeight: {
                '106': '26.5rem',
            },
            maxWidth: {
                '2/3': '66.666667%',
            },
        },
    },
    plugins: [],
    // safelist: [
    //     {
    //         pattern: /.*/,
    //     },
    // ],
};
