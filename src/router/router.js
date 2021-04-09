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
      {
        path: '/assets',
        name: 'assets',
        component: () => import('../views/wallet/assets.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/financial/order.vue'),
      },
      {
        path: '/financial',
        name: 'financial',
        component: () => import('../views/financial/index.vue'),
      },
      {
        path: '/investList',
        name: 'investList',
        component: () => import('../views/invest/investList.vue'),
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
      {
        path: '/realName/',
        name: 'realName',
        component: () => import('../views/center/RealName.vue'),
      },
      {
        path: '/invest/index/',
        name: 'investIndex',
        component: () => import('../views/invest/index.vue'),
      },
      {
        path: '/invest/tab/',
        name: 'investTab',
        component: () => import('../views/invest/InvestTab.vue'),
      },
      {
        path: '/invest/',
        name: 'invest',
        component: () => import('../views/invest/invest.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
