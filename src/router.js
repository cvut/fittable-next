import Vue from 'vue'
import Router from 'vue-router'
import Timetable from './pages/Timetable'
import Settings from './pages/Settings'

Vue.use(Router)

export default new Router({
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
