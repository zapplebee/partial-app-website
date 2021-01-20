const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        colors: {
            purple: '#777185',
            black: '#211D18',
            gray: '#312F38',
            green: {
                200: '#D6FFDB',
                500: '#67856B'
            }
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
        theme: {
            listStyleType: {
                none: 'none',
                disc: 'disc',
                decimal: 'decimal',
                square: 'square',
                roman: 'upper-roman',
            }
        }
    }
}