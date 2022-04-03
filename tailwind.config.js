module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        backgroundImage: {
          'header-bg': "url('./imgs/1.jpg')",
          // 'footer-texture': "url('/img/footer-texture.png')",
        }
      ,
      colors:{
        'slider1': 'rgb(237, 168, 10)',
        'slider2': 'rgb(102, 187, 198)',
        'paralo-color': '#777777',
        'title-color': 'rgba(237, 168, 10, 0.3)',
        'slider3': 'rgb(204, 80, 75)',
        'bg-body': 'rgba(237, 168, 10, 0.1)',
        'white': '#ffffff', 
        'textgray': '#808080',
        'headercolor': '#ebf7f2',
        'textblack': '#000',
        'fp-white': '#ffffff'
      },
      tracking:{
        'tracking-widest': '2em'
      },
      
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '9xl': '10rem'
      }
    },
  },
  plugins: [],
}
