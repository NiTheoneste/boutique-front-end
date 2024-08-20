import { createRouter, createWebHistory } from 'vue-router'
import TheLayout from '@/components/layout/TheLayout.vue'
import store from '../store'

//Login

import LoginView from '../views/auth/LoginView.vue'
import HomeView from '../views/home/HomeView.vue'

const routes= [
    {
      path: '/',
      name: 'layout',
      component: TheLayout,
      children: [
        { path: '', name: 'fallback', redirect: () => { return { name: 'home' } } },
        {
          path: '/home',
          children: [
            {
              path: '',
              name: 'home',
              component: HomeView,
            },
          ]
        },
      ],
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false },
    }

  ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user?.access)
      return { name: 'login' }
  }

})

export default router
