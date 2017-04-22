import Vue from 'vue'
import Router from 'vue-router'
import AppOverview from '../components/appOverview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppOverview
    }
    // children: [
    //
    // ]
  ]
})
