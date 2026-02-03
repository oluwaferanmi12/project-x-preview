module.exports = {
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: "convertColors",
        params: {
          currentColor: true,
        },
      },
    ],
  },
};
