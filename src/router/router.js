import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout'
import CommonLayout from '@/layouts/CommonLayout'
import MainPage from '@/views/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },

  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue'),
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
