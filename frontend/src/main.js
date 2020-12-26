// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResizeText from 'vue-resize-text'

const MyPlugin = {
  install(Vue, options) {
    Vue.prototype.htmlNewLine = (html) => {
      return html.replace(/(?:\r\n|\r|\n)/g, '<br>')
    }
  }
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(MyPlugin)
Vue.use(VueResizeText)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
