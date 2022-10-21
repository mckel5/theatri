import Vue from 'vue';

// Bootstrap-Vue
import { BootstrapVue } from 'bootstrap-vue';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMasksTheater,
  faHeart,
  faSchoolFlag,
  faCalendar,
  faClock,
  faTicket,
  faLocationDot,
  faArrowLeft,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
// icon must be renamed to avoid collision with solid faHeart
import { faHeart as faHeartRegular, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// VueLocalStorage
import VueLocalStorage from 'vue-localstorage';

// Vue
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Bootstrap-Vue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueLocalStorage);

// FontAwesome
library.add(
  faMasksTheater,
  faHeart,
  faSchoolFlag,
  faCalendar,
  faClock,
  faTicket,
  faLocationDot,
  faArrowLeft,
  faHeartRegular,
  faGithub,
  faEnvelope,
  faCircleQuestion,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  localStorage: {
    allShows: {
      type: Array,
      default: [],
    },
    savedShows: {
      type: Array,
      default: [],
    },
  },
  data: {
    loadingComplete: false,
  },
}).$mount('#app');
