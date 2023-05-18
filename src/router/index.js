import { createRouter, createWebHashHistory } from 'vue-router'

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/data'
    },
    {
      path: '/data',
      name: 'Data',
      component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue')
    },
  ]
})

export default router