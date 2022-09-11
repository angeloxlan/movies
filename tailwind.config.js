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
            },
            maxWidth: {
                '2/3': '66.666667%',
            },
            boxShadow: {
                poster: '5px 4px 25px 6px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
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
