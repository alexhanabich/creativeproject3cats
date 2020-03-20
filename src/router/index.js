import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Liked from '../views/Liked.vue'
import Rank from '../views/Rank.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/liked',
    name: 'Liked',
    component: Liked
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
