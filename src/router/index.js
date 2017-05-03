import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/Start'
import main from '@/components/Main'
import list from '@/components/List'
import detail from '@/components/Detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path:'/main',
      component:main,
      children:[
        {
          path:'',
          component:list
        },
        {
          path:'detail/:id',
          component:detail
        }
      ]
    }
  ]
})
