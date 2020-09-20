import Vue from 'vue'
import VueRouter from 'vue-router'
import game from '@/views/game.vue'
import strategy from '@/views/strategy.vue'
import original from '@/views/original.vue'
import me from '@/views/me.vue'
import standAlone from '@/views/news/standAlone.vue'
import mobileGames from '@/views/news/mobileGames.vue'
import onlineGames from '@/views/news/onlineGames.vue'
import SeriesGames from '@/views/news/shaixuans/SeriesGames.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('../views/home.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: game
  },
  {
    path: '/strategy',
    name: 'strategy',
    component: strategy
  },
  {
    path: '/original',
    name: 'original',
    component: original
  },
  {
    path: '/me',
    name: 'me',
    component: me
  },
  {
    path: '/standalone',
    name: 'standAlone',
    component: standAlone,
    meta:{
      title:'热门单机'
      }
  },
  {
    path: '/mobilegames',
    name: 'mobileGames',
    component: mobileGames,
    meta: {
      title: '热门手游'
      }
  },
  {
    path: '/onlinegames',
    name: 'onlineGames',
    component: onlineGames,
    meta: {
      title: '热门网游'
      }
  },
  {
    path: '/seriesgames/:type',
    name: 'SeriesGames',
    component: SeriesGames,
    meta: {
      title: '热门网游'
      }
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
