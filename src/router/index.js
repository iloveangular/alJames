import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import companies from '@/components/companies'
import singleProduct from '@/components/product'
import offers from '@/components/offers'
import singlePackage from '@/components/package'
import packages from '@/components/packages'
import documents from '@/components/documents'
import affiliates from '@/components/affiliates'
import faqs from '@/components/faqs'
import partners from '@/components/partners'
import trademarks from '@/components/trademarks'
import nicheServices from '@/components/additionalServices'
import nicheSingle from '@/components/nicheSingle'
import termsOfUse from '@/components/termsOfUse'
import termsOfPayment from '@/components/termsOfPayment'
import terms from '@/components/terms'
import privacyPolicy from '@/components/privacyPolicy'
import disclaimer from '@/components/disclaimer'
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path:'/about',
            name: 'about',
            component: about
        },
        {
            path: '/companies',
            name: 'companies',
            component: companies
        },
        {
            path: '/product/company-formation/:productId',
            name: 'singleProduct',
            component: singleProduct
        },
        {
            path: '/niche-services',
            name: 'nicheServices',
            component: nicheServices
        },
        {
            path:'/niche-service/:nicheId',
            name: 'nicheSingle',
            component: nicheSingle
        },
        {
            path: '/documents',
            name: 'documents',
            component: documents
        },
        {
            path: '/affiliates',
            name: 'affiliates',
            component: affiliates
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: faqs
        },
        {
            path: '/packages',
            name: 'packages',
            component: packages
        },
        {
            path: '/package/:packageId',
            name: 'singlePackage',
            component: singlePackage
        },
        {
            path: '/partners',
            name: 'partners',
            component: partners
        },
        {
            path: '/terms-of-use',
            name: 'termsOfUse',
            component: termsOfUse
        },
        {
            path: '/terms-of-payment',
            name: 'termsOfPayment',
            component: termsOfPayment
        },
        {
            path: '/terms',
            name: 'terms',
            component: terms
        },
        {
            path: '/privacy-policy',
            name: 'privacyPolicy',
            component: privacyPolicy
        },
        {
            path: '/disclaimer',
            name: 'disclaimer',
            component: disclaimer
        },
        {
            path: '/offers',
            name: 'offers',
            component: offers
        },
        {
            path: '/trademarks',
            name: 'trademarks',
            component: trademarks
        }
    ]
})
