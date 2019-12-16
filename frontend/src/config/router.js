import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticleByCategory from '@/components/article/ArticleByCategory'
import ArticleById from '@/components/article/ArticleById'
import Auth from '@/components/auth/Auth'

import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
  name: 'home',
  path: '/',
  component: Home
}, {
  name: 'adminPages',
  path: '/admin',
  component: AdminPages,
  meta: { requiresAdmin: true}
}, {
  name: 'articleByCategory',
  path: '/categories/:id/articles',
  component: ArticleByCategory
}, {
  name: 'articleById',
  path: '/article/:id',
  component: ArticleById
}, {
  name: 'auth',
  path: '/auth',
  component: Auth
}]

const router = new VueRouter({
  node: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userKey)

  if(to.matched.some(record => record.meta.requiresAdmin)) {
    const user = JSON.parse(json)
    user && user.admin === 'true' ? next() : next({path: '/'})
  } else {
    next()
  }
})
export default router
