import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Chart from '@/components/home/Chart'
import Mall from '@/components/mall/Mall'
import MallNav from '@/components/mall/MallNav'
import Software from '@/components/software/Software'
import Course from '@/components/course/Course'
import Login from '@/components/login/Login'
import UserCenter from '@/components/userCenter/UserCenter'
import News from '@/components/news/News'
import AboutUs from '@/components/aboutUs/AboutUs'

//使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/chart',name: 'Chart',component: Chart},
    {path: '/mall',name: 'Mall',component: Mall},
    {path: '/mallNav',name: 'MallNav',component: MallNav},
    {path: '/software',name: 'Software', component: Software},
    {path: '/course',name: 'Course',component: Course},
    {path: '/login',name: 'Login',component: Login},
    {path: '/userCenter',name: 'UserCenter',component: UserCenter},
    {path: '/news',name: 'News',component: News},
    {path: '/aboutUs',name: 'AboutUs',component: AboutUs},
  ]
})
