import Vue from 'vue';

// Bootstrap-Vue
import { BootstrapVue } from 'bootstrap-vue';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMasksTheater, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Vue
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Bootstrap-Vue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

// FontAwesome
library.add(faMasksTheater, faHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
