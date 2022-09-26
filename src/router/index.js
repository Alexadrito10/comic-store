import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WelcomeView from '../views/WelcomeView.vue';
import ComicsCollectionView from '../views/ComicsCollectionView.vue';
import NewComicFormView from '../views/NewComicFormView.vue';
import ComicDetail from '../components/ComicDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/FerLexComicCollection',
      name: 'comic-collection',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ComicsCollectionView,
    }, 
    {
      path: '/add-comic',
      name: 'newComic',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NewComicFormView,
    },
    {
      path: '/comic/:comicName',
      name: 'comicDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  ComicDetail,
    }
  ]
})

export default router
