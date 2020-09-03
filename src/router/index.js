import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EIPUI from '@/components/function/EIPUI'
import Liver from '@/components/function/liver'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:"/EIPUI",
      component: Home,
      children:[
        {
          path:"EIPUI",
          component:EIPUI
        },
        {
          path:"liver",
          component:Liver
        }
      ]
    }
  ]
})
