module.exports = {
  publicPath: '/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/assets/_variables.scss";
          `
        }
      }
    }
}