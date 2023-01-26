import { createRouter, createWebHistory } from 'vue-router'

// 定義路由表
const routes = [
  {
    path: '/',
    name: '主頁',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/about',
    name: '關於我',
    component: () => import('@/views/AboutMe.vue')
  },
  {
    path: '/log',
    name: '更新日誌',
    component: () => import('@/views/UpdateLog.vue')
  },
  {
    path: '/todo',
    name: 'TODO',
    component: () => import('@/views/MyTodo.vue')
  },
  {
    path: '/askme',
    name: '對我發問',
    component: () => import('@/views/AskMe.vue')
  }
]

// 執行路由表
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  }, routes
})

// 將 name 自動賦予至 head 中的 title
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
