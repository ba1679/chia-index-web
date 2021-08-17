module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/chia-index-web/" : "/",
  outputDir: "./www",
  devServer: {
    https: false
  },
  transpileDependencies: ["vuetify"]
};
