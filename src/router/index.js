import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import companies from '@/components/companies'
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/companies',
            name: 'companies',
            component: companies
        }
    ]
})
