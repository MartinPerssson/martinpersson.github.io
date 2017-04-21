import Vue from 'vue'
import Router from 'vue-router'
import AppOverview from '@/components/AppOverview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppOverview',
      component: AppOverview
    }
  ]
})
