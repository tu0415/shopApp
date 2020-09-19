import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import utils from "@/utils/validate"
Vue.use(utils)

import '@/mixins/index'
import API from './api/index';
import http from './utils/request';
Vue.prototype.$API = API
Vue.prototype.$http = http

import store from './store/index'	
App.store = store

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
