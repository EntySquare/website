import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout'
import CommonLayout from '@/layouts/CommonLayout'
import Home from '@/views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: CommonLayout,
    children: [
      {
        path: '/product',
        name: 'Product',
        component: () => import('../views/product/Product.vue'),
      },
      {
        path: '/bar',
        name: 'Bar',
        component: () => import('../views/demo/Bar.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
