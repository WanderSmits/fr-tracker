module.exports = {
  devServer: {
    proxy: {
      "/profile": {
        target: "http://localhost:5000",
      },
    },
  },
};
