import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MyInfo from '@/components/MyInfo'
import MyFeed from '@/components/MyFeed'
import TagSearch from '@/components/TagSearch'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-stagram',
      redirect: '/vue-stagram/me'
    },
    {
      path: '/vue-stagram/me',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/vue-stagram/feeds',
      name: 'MyFeed',
      component: MyFeed
    },
    {
      path: '/vue-stagram/search',
      name: 'TagSearch',
      component: TagSearch
    },
    {
      path: '/vue-stagram/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && token === null) {
    if (to.hash.includes('#access_token')) {
      const tokenHash = to.hash
      const tokenValue = tokenHash.split('=')[1]
      localStorage.setItem('token', tokenValue)
      next('/vue-stagram/me')
      return
    }
    next('/vue-stagram/login')
    return
  }
  next()
})

export default router








