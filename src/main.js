import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import fb from '@firebase/app'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'

Vue.use(Vuetify, {

})
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyAb5O_D-9THl0PVg-7eOy3clXgbw31mWIk",
      authDomain: "itc-project-e7e8e.firebaseapp.com",
      databaseURL: "https://itc-project-e7e8e-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "itc-project-e7e8e",
      storageBucket: "itc-project-e7e8e.appspot.com",
      messagingSenderId: "201391281682",
      appId: "1:201391281682:web:4086ce8df2feb9b41c6acb",
      measurementId: "G-5VDC41FJNR"
      
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
