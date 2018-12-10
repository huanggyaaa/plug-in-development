/**
 * 注册组件
 */


import Login from './Login.vue'

export default {
    install: function(Vue){
        Vue.component('UserLogin', Login);
    }
}