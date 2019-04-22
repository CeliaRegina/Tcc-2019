import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Amor from './views/Amor.vue'
import Amizade from './views/Amizade.vue'
import Indiretas from './views/Indiretas.vue'
import Refletir from './views/Refletir.vue'
import Motivacao from './views/Motivacao.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    ,
    {
      path: '/amor',
      name: 'amor',
      component: Amor
    }
    ,
    {
      path: '/amizade',
      name: 'amizade',
      component: Amizade
    }
    ,
    {
      path: '/indiretas',
      name: 'indiretas',
      component: Indiretas
    }
    ,
    {
      path: '/refletir',
      name: 'refletir',
      component: Refletir
    }
    ,
    {
      path: '/motivacao',
      name: 'motivacao',
      component: Motivacao
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
