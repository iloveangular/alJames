import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import contact from '@/components/contact'
import companies from '@/components/companies'
import singleProduct from '@/components/product'
import banks from '@/components/banks'
import singleBank from '@/components/singleBank'
import offers from '@/components/offers'
import singlePackage from '@/components/package'
import packages from '@/components/packages'
import documents from '@/components/documents'
import singleCategory from '@/components/category'
import singleDocument from '@/components/document'
import affiliates from '@/components/affiliates'
import affiliatesSignup from '@/components/affiliatesSignup'
// import faqs from '@/components/faqs'
import partners from '@/components/partners'
import confirmation from '@/components/confirmation'
/* Trademarks */
import trademarks from '@/components/trademarks'
import trademarksRegistration from '@/components/trademarksRegistration'
// import trademarksSearch from '@/components/trademarksSearch'
// import trademarksWatch from '@/components/trademarksWatch'
/* Niche Services */
import nicheServices from '@/components/additionalServices'
import nicheSingle from '@/components/nicheSingle'
import termsOfUse from '@/components/termsOfUse'
import termsOfPayment from '@/components/termsOfPayment'
import terms from '@/components/terms'
import privacyPolicy from '@/components/privacyPolicy'
import disclaimer from '@/components/disclaimer'
/* Login Pages */
import login from '@/components/login'
import order from '@/components/order'
import orders from '@/components/orders'
import trademarkOrder from '@/components/trademarkOrder'
import cart from '@/components/cart'
import checkout from '@/components/checkout'
import forgotPassword from '@/components/forgotPassword'
/* Exclusive Credit Card */
import exclusiveCreditCard from '@/components/exclusivecc'


/* Directives */
Vue.mixin({
  data: function() {
    return {
      get globalReadOnlyProperty() {
        return "Can't change me!";
      }
    }
  }
})
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
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
      path: '/product/company-formation/bank/:bankId',
      name: 'singleBank',
      component: singleBank
    },
    {
      path: '/product/exclusive-credit-card/:cardId',
      name: 'exclusiveCreditCard',
      component: exclusiveCreditCard
    },
    {
      path: '/banks',
      name: 'banks',
      component: banks
    },
    {
      path: '/niche-services',
      name: 'nicheServices',
      component: nicheServices
    },
    {
      path: '/niche-service/:nicheId',
      name: 'nicheSingle',
      component: nicheSingle
    },
    {
      path: '/documents',
      name: 'documents',
      component: documents
    },
    {
      path: '/documents/:documentId',
      name: 'singleCategory',
      component: singleCategory
    },
    {
      path: '/document/:documentId',
      name: 'singleDocument',
      component: singleDocument
    },
    {
      path: '/affiliates',
      name: 'affiliates',
      component: affiliates
    },
    {
      path: '/affiliates/signup',
      name: 'affiliatesSignup',
      component: affiliatesSignup
    },
    // {
    //   path: '/faqs',
    //   name: 'faqs',
    //   component: faqs
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/order/:orderID',
      name: 'order',
      component: order
    },
    {
      path: '/trademarkOrder',
      name: 'trademarkOrder',
      component: trademarkOrder
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/checkout/payment',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: forgotPassword
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
      path: '/confirmation/:confirmationCode/email/:email',
      name: confirmation,
      component: confirmation
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
    },
    {
      path: '/trademarks/registration/',
      name: trademarksRegistration,
      component: trademarksRegistration
    },
    // {
    //   path: '/trademarks/search/',
    //   name: trademarksSearch,
    //   component: trademarksSearch
    // },
    // {
    //   path: '/trademarks/watch/',
    //   name: trademarksWatch,
    //   component: trademarksWatch
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {x: 0, y: 0}
    } else {
      return {x: 0, y: 0}
    }
  }
})
