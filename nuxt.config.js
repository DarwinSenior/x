module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'xplorecat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Xplorecat website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/ui.js', ssr: true },
    { src: '~components/index.ts' },
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['nuxt-class-component'],
    extend(config, { isClient }) {
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      };
      config.module.rules.push(
        Object.assign({
          test: /((client|server)\.js)|(\.tsx?)$/
        }, tsLoader)
      );
      for (let rule of config.module.rules) {
        if (rule.loader === 'vue-loader') {
          rule.options.loaders.ts = tsLoader;
        }
      }
    }
  }
}
