import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import {routerMode} from './config/env'
import FastClick from 'fastclick'
import VueI18n from "vue-i18n"
import i18 from './i18n'
import phone from  './lib/phone'
// import store from './vuex/store';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: routerMode,
    strict: process.env.NODE_ENV !== 'production'
})


Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh_cn', // set locale
    messages:i18, // set locale messages
})


new Vue({
    router,
    i18n,
}).$mount('#app')

