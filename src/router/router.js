import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout'
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
  // 除了上面的，都要加 Layout
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/foo',
        name: 'Foo',
        component: () => import('../views/demo/Foo.vue'),
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
