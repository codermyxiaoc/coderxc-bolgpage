import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('views/home/Home.vue')
    },
    {
        path: '/profile',
        component: () => import('views/profile/Profile.vue')
    },
    {
        path: '/login',
        component: () => import('views/login/Login.vue')
    },
    {
        path: '/register',
        component: () => import('views/register/Register.vue')
    },
    {
        path: '/updata',
        component: () => import('views/updata/updata.vue')
    },
    {
        path: '/comment',
        component: () => import('views/comment/Comment.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router