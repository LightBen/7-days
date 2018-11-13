import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase/app'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  projectId: process.env.FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.FIREBASE_SENDER_ID
};
firebase.initializeApp(config);

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}



const sectionTop = document.querySelector('#top');
const checkElemsIn = document.querySelectorAll('.check-elem-in');
// const section = document.querySelectorAll('.main-section');
// const sectionVisible = document.querySelectorAll('.main-section.in-view');
// const checkElemsOut = document.querySelectorAll('.check-elem-out');
// const backToBeginningLink = document.querySelector('#backToBeginning');

window.onscroll = function() {
  for (const checkElemIn of checkElemsIn) {
    if (checkElemIn.getBoundingClientRect().top <= window.innerHeight * 0.75 && checkElemIn.getBoundingClientRect().top > 0) {
      checkElemIn.classList.add('in-view');
    }
    if (sectionTop.getBoundingClientRect().top == 0) {
      checkElemIn.classList.remove('in-view');
    }
  }
};
