require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './router';
import MainApp from './components/MainApp.vue';
import VueSocialauth from 'vue-social-auth';
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.use(VueSocialauth, {
  providers: {
    vkontakte: {
      clientId: '',
      redirectUri: '/auth/vkontakte/callback'
    }
  }
})

const app = new Vue({
    el: '#app',
    router,
    components: {
    	MainApp
    },
    // methods: {
    //     async initFacebook() {
    //         window.fbAsyncInit = function() {
    //           window.FB.init({
    //             appId: "", //You will need to change this
    //             cookie: true, // This is important, it's not enabled by default
    //             version: "v13.0"
    //           });
    //         };
    // },
    //     async loadFacebookSDK(d, s, id) {
    //         var js,
    //           fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) {
    //           return;
    //         }
    //         js = d.createElement(s);
    //         js.id = id;
    //         js.src = "https://connect.facebook.net/en_US/sdk.js";
    //         fjs.parentNode.insertBefore(js, fjs);
    //         },
    //     },
    //     async created() {
    //     await this.loadFacebookSDK(document, "script", "facebook-jssdk");
    //     await this.initFacebook();
    // }
});
