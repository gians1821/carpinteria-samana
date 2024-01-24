/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'lato': 'Lato, sans-serif',
      'outfit': 'Outfit, sans-serif',
      'noto':'Noto Sans, sans-serif',
    },
    extend: {
      colors: {
        'default': 'black',
        'primary': '#e3d9b1',
        'secondary': '#f1ecca',
        'hover': '#d5c599',
        'active': '#f1ecca',
        'dark-default': 'white',
        'dark-primary': '#2E4053',
        'dark-secondary': '#26394e',
        'dark-hover': '#416183',
      },
      backgroundImage: {
        'hero-pattern': "url(https://i.imgur.com/xhPc4OC.jpg)",
        'drywall': "url(https://img.freepik.com/foto-gratis/hombre-vista-frontal-trabajando-vistiendo-equipo-proteccion_23-2148784098.jpg?w=1380&t=st=1699645799~exp=1699646399~hmac=b9ea6f1abfc54f6bdc5958dde29ea3a78ac890b6d0ccbd942b94b08bdf716f76)",
        'wood': "url(https://img.freepik.com/foto-gratis/vista-lateral-carpintero-femenino-estudio-sierra-electrica_23-2148813332.jpg?w=1480&t=st=1699645920~exp=1699646520~hmac=6431648b52bc7b6b6cf827799b7af15393084bd69e128f8c88fa7af6cd44a45a)",
        'melamine': "url(https://img.freepik.com/foto-gratis/primer-plano-conjunto-cajones-madera_181624-25200.jpg?w=1380&t=st=1699646195~exp=1699646795~hmac=281cfd6dace5560f0d2b6c0bc04b71027b9980aa8e5a110e8e145d3671e27a73)",
      }
    }
  }
}
