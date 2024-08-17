import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {requiresAuth: false}
    }
  ]
})

router.beforeEach((to) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user.access)
      return {name: "login"}
  }
})

export default router
