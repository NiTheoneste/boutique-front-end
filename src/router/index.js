import { createRouter, createWebHistory } from 'vue-router'
import TheLayout from '@/components/layout/TheLayout.vue'
import store from '../store'

//Login

import LoginView from '../views/auth/LoginView.vue'

//Dasboard
import DashboardView from '../views/dashboard/DashboardView.vue'

//Products
import ProductsView from '../views/products/ProductsView.vue'
import CreateProduct from '../views/products/CreateProduct.vue'


const routes= [
    {
      path: '/',
      name: 'layout',
      component: TheLayout,
      children: [
        { path: '', name: 'fallback', redirect: () => { return { name: 'dashboard' } } },
        {
          path: 'dashboard',

          children: [
            {
              path: '',
              name: 'dashboard',
              component: DashboardView,
            },
          ]
        },
        {
          path: 'products',
          children: [
            {
              path: '',
              name: 'products',
              component: ProductsView,
            },
            {
              path: '/create',
              name: 'createProduct',
              component: CreateProduct,
            },
            {
              path: '/update/:id',
              name: 'updateProduct',
              component: CreateProduct,
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
