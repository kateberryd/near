module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        backgroundImage: {
          'header-bg': "url('./imgs/1.jpg')",
          // 'footer-texture': "url('/img/footer-texture.png')",
        }
      ,
      colors:{
        'slider1': 'rgb(237, 168, 10)',
        'primary': '#FFF8F4',
        'secondary': '#F3782C',
        'secondary2': '#134E60',
        'secondary3': '#2140A3',
        'secondary4': '#F8F9FE'
       
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
