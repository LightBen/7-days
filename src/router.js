import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/index.html',
            alias: '/',
            redirect: '/en'
        },

        {
            path: '/:lang',
            component: {
                render(c) { return c('router-view') }
            },
            children: [{
                path: '/',
                name: 'home',
                component: Home
            }]

            /*,
              {
                path: '/about',
                name: 'about',
                component: () => import('./views/About.vue')
              }*/
        }
    ]

})
