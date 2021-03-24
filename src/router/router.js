import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout'
import CommonLayout from '@/layouts/CommonLayout'
import MainPage from '@/views/MainPage'
import LoginPage from '@/views/LoginPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // 除了上面的，都要加 Layout

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
