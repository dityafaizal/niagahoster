require('./bootstrap');
window.Vue = require('vue');
Vue.component('app-page', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    components: {

    }
});
