import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App_Head from '@/components/App_Head'
import App_Body from '@/components/App_Body'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'App_Head',
      component: App_Head
    },
    {
      path: '/',
      name: 'App_Body',
      component: App_Body
    }
  ]

})

