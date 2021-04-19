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
        path: '/AboutUs',//关于我们
        name: 'AboutUs',
        component: () => import('../views/home/aboutUs.vue'),
      },
      {
        path: '/JoinCommunity',//加入社区
        name: 'JoinCommunity',
        component: () => import('../views/home/joinCommunity.vue'),
      },
      {
        path: '/EnterpriseNews',//企业动态
        name: 'EnterpriseNews',
        component: () => import('../views/home/enterpriseNews.vue'),
      },
      {
        path: '/Community',//社区
        name: 'Community',
        component: () => import('../views/home/community.vue'),
      },
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
      {
        path: '/company/about',
        name: 'companyAbout',
        component: () => import('../views/company/About.vue'),
      },
      {
        path: '/company/cooperation',
        name: 'companyCooperation',
        component: () => import('../views/company/Cooperation.vue'),
      },
      {
        path: '/company/contact',
        name: 'companyContact',
        component: () => import('../views/company/Contact.vue'),
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
        path: '/investIndex/',
        name: 'investIndex',
        component: () => import('../views/invest/InvestIndex.vue'),
      },
      {
        path: '/investTab/',
        name: 'investTab',
        component: () => import('../views/invest/InvestTab.vue'),
      },
      {
        path: '/investPast/',
        name: 'investPast',
        component: () => import('../views/invest/InvestPast.vue'),
      },
      {
        path: '/investMine/',
        name: 'investMine',
        component: () => import('../views/invest/InvestMine.vue'),
      },
      {
        path: '/company/state',
        name: 'CompanyState',
        component: () => import('../views/company/CompanyState.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
