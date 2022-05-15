module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'bgweb': "url('./images/bg-animated.gif')",
      },

      height: {
        'characters': '70vh',
        'maps' : '50vh'
      },
      width: {
        'littleMaps' : '3vw',
        'largeMaps' : '10vw',
      },
      aspectRatio: {
        '1/8': '1 / 8',
      },
      },
  },
  plugins: [],
}
