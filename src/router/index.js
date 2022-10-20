import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowsListView from '../views/ShowsListView.vue';
import ShowDetailsView from '../views/ShowDetailsView.vue';
import SavedShowsView from '../views/SavedShowsView.vue';
import AboutView from '../views/AboutView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'shows-list',
    component: ShowsListView,
    meta: {
      title: 'All Shows - TheatRI',
    },
  },
  {
    path: '/shows/:id',
    name: 'show-details',
    component: ShowDetailsView,
    meta: {
      title: 'Show Details - TheatRI',
    },
  },
  {
    path: '/saved',
    name: 'saved-shows',
    component: SavedShowsView,
    meta: {
      title: 'Saved - TheatRI',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About - TheatRI',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // Return to last position when returning to All Shows
  // AND prevent inexplicable scrolling to bottom whenever a ShowDetails is loaded
  scrollBehavior(to, from, savedPosition) {
    // behavior: 'auto' does not prevent smooth scrolling
    // https://kilianvalkhof.com/2022/css-html/preventing-smooth-scrolling-with-javascript/
    if (savedPosition) return { savedPosition, behavior: 'instant' };
    document.getElementById('app').scrollIntoView({ behavior: 'instant' });
    return {};
  },
});

const DEFAULT_TITLE = 'TheatRI';
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
