import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue();
//is an empty box to put data into to store data to be accessed from all components

new Vue({
  el: '#app',
  render: h => h(App)
})
