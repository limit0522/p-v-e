import{createRouter,createWebHashHistory} from 'vue-router'

import ElementUI from './components/ElementUI.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

const router = createRouter({
    history : createWebHashHistory(),
    routes : [{
        name: 'ElementUI',
        path: '/',
        component: ElementUI
    },{
        name: 'Hello',
        path: '/hello',
        component: HelloWorld
    },{
        name: 'Home',
        path: '/home',
        component: Home,
        children:[
            {
                path: '/courseList',
                name: 'CourseListin',
                meta:{
                  isShow:true,
                  title:'课程列表'
                },
                component: () => import('./components/courseList.vue')
            },
            {
                path: '/teacherList',
                name: 'TeacherList',
                meta:{
                  isShow:true,
                  title:'讲师列表'
                },
                component: () => import('./components/teacherList.vue')
            },
            {
                path: '/personal',
                name: 'Personal',
                meta:{
                  isShow:true,
                  title:'个人中心'
                },
                component: () => import('./components/personal.vue')
            }
        ]
    }]
})

export default router
