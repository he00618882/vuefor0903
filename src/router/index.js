import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EIPUI from '@/components/function/EIPUI'
import notThing from '@/components/function/notThing'
import meteorological from '@/components/function/meteorological'
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
          path:"notThing",
          component:notThing
        },
        {
          path:"meteorological",
          component:meteorological
        }
      ]
    }
  ]
})
