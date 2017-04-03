import Vue from 'vue'
import Router from 'vue-router'

import Timetable from './pages/Timetable'
import Settings from './pages/Settings'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Timetable',
      component: Timetable,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
  ],
})

if (process.env.BROWSER) {
  import('nprogress').then(nprogress => {
    import('nprogress/nprogress.css')

    router.beforeEach((from, to, next) => {
      nprogress.start()
      next()
    })
    router.afterEach(() => {
      nprogress.done()
    })
  })

}

export default router
