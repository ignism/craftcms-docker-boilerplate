import Vue from 'vue'
import App from './vue/styleguide.vue'

let element = document.querySelector('#styleguide-app')

if (element) {
  new Vue({
    render: (h) => h(App)
  }).$mount(element)
}
