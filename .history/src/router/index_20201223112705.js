import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/Layout'
import home from '../views/layout/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
   path:'',
   component:layout,
   children:[
     {
       path:'/',
       name:'home',
       component:home,
       meta:{
         title:'首页'
       }
     },
     {
      path:'/whole',
      name:'whole',
      component:()=>import('../views/layout/whole/Whole.vue'),
      meta:{
        title:'全部'
      }
    },
   ]
  },
  {
    path:'/login',
      name:'login',
      component:()=>import('../views/login/Login.vue'),
      meta:{
        title:'登录'
      } 
  },
   //所有路由之后最后 配置一个错误路由
  {
    path:"*",//如果我之前的都没有匹配到,就会匹配到这个*的路由
    component:() =>import('../views/404/404.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 跳转显示高亮重复点击不会搞错的法一：
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err);
// };

//路由守卫
// router.beforeEach((to  ,form,next) =>{
//   //动态改变浏览器的标题
//   document.title = to.meta.title
//   next()
//   let user = localStorage.getItem('user')
  
//移动端不需要路由守卫做判断
//   if(to.path === '/login' || to.path === '/register'){next()}else{
//     // console.log(user);
//     user ? next():(next('/login') || next('/register'))
//   }

// })
export default router
