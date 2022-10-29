import { createRouter, createWebHistory } from 'vue-router';
import {useAuthenticationStore} from '../stores/authentication';
import HomeView from '../views/HomeView.vue';
import WelcomeView from '../views/WelcomeView.vue';
import ComicsCollectionView from '../views/ComicsCollectionView.vue';
import NewComicFormView from '../views/NewComicFormView.vue';
import ComicDetail from '../components/ComicDetail.vue';
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";

const requireAuth = async (to, from, next) => {
  const userStore = useAuthenticationStore();
  userStore.loading = true;
  const user = await userStore.currentUser();
  if (userStore.userData.email === "alexadrito10@gmail.com") {
      next();
  } else {
      alert("You don't have access to add comics , this function is reserved for administrator accounts");
      next("/FerLexComicCollection");
  }
  userStore.loading = false;
};
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
      beforeEnter: requireAuth,
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
    },
    {
      path: '/SignIn',
      name: 'signInView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  SignInView,
    },
    {
      path: '/SignUp',
      name: 'signUpView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  SignUpView,
    }
  ]
})

export default router
