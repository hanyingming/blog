import Vue from 'vue'
import 'swiper/dist/css/swiper.css'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}
