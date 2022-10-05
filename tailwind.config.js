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
                87: '21.875rem',
                106: '26.5rem',
            },
            width: {
                57: '14.475rem',
                120: '30rem',
            },
            minHeight: {
                106: '26.5rem',
                '4/5': '80vh',
            },
            maxWidth: {
                '2/3': '66.666667%',
            },
            boxShadow: {
                poster: '0px 0px 20px -4px rgba(107,107,107,0.75);',
                dropdown: '0px 0px 23px -2px rgba(0,0,0,0.69)',
            },
            borderRadius: {
                1: '1rem',
            },
            rotate: {
                270: '270deg',
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
