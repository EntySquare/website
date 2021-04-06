import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout'
import CommonLayout from '@/layouts/CommonLayout'
import Home from '@/views/home/Home'
import Resource from '@/views/home/HomeResource'
import HeadBar from '@/views/home/HeadBar'

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
      {
        path: '/resetPwd',
        name: 'ResetPwd',
        component: () => import('../views/auth/ResetPassword.vue'),
      },
      {
        path: '/resetPwdEmail',
        name: 'resetPwdEmail',
        component: () => import('../views/auth/ResetPasswordEmail.vue'),
      },
      {
        path: '/wallet',
        name: 'wallet',
        component: () => import('../views/wallet/index.vue'),
      },
    ],
  },
  // {
  //   path: '/',
  //   name: 'CommonLayout',
  //   component: CommonLayout,
  //   children: [
  //     {
  //       path: '/product',
  //       name: 'Product',
  //       component: () => import('../views/product/Product.vue'),
  //     },
  //     {
  //       path: '/bar',
  //       name: 'Bar',
  //       component: () => import('../views/demo/Bar.vue'),
  //     },
  //     {
  //       path: '/home/resource/',
  //       name: 'Resource',
  //     },
  //   ],
  // },
  {
    path: '/',
    name: 'CommonLayout',
    component: CommonLayout,
    children: [
      {
        path: '/centerTab/',
        name: 'CenterTab',
        component: () => import('../views/center/CenterTab.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
