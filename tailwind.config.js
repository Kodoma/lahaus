module.exports = {
    purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#012D26',
                green: {
                    100: '#E5F0EE',
                    300: '#3ecfaf',
                    400: '#5B6866',
                    800: '#012D26',
                },
                blue: {
                    100: '#EBEDFF',
                    400: '#3948FF',
                },
                grey: {
                    100: '#012D26'
                }
            },
            fontFamily: {
                silka: ['Silka', 'Helvetica Neue', 'Arial', 'Helvetica', 'Verdana', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};