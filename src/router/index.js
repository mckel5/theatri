import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowsListView from '../views/ShowsListView.vue';
import ShowDetailsView from '../views/ShowDetailsView.vue';
import SavedShowsView from '../views/SavedShowsView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'shows-list',
    component: ShowsListView,
  },
  {
    path: '/shows/:id',
    name: 'show-details',
    component: ShowDetailsView,
  },
  {
    path: '/saved',
    name: 'saved-shows',
    component: SavedShowsView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
