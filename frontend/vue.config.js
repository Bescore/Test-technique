const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080
}
})
module.exports = {
  pwa: {
      workboxOptions: {
        exclude: [/_redirects/]
      }
    }
}