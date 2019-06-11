import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Write from '../components/write'
import ListDetail from '../components/ListDetail'
import Home from '../Home'
import ListAll from '../components/ListAll'
import ListTag from '../components/ListTag'
import Register from '../components/Register'
import store from "../store";
Vue.use(Router);
import {getUsername} from '../store/userinfo'
const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   meta:{
    //     needLogin:false,
    //     login:false,
    //   },
    //   component: HelloWorld
    // },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/write',
      name:'Write',
      component:Write
    },
    {
      path:'',
      name:'home',
      component:Home,
      children:[
        {
          path:'/',
          component:ListAll
        },
        {
          path:'/listDetail/',
          component:ListDetail
        },
        {
          path:'/tag',
          component:ListTag
        },
        {
          path:'/ListbyTag',
          component:ListAll
        }
      ]
    }
  ]
},
);
router.beforeEach((to, from, next) => {
  // if(to.meta.needLogin){
  //   if(store.state.username.length!==0){
  //     next();
  //   }else{
  //     next('/login');
  //   }
  // }else{
  //   if(to.meta.login&& store.state.username.length!==0){
  //     next('/');
  //   }else{
  //     next();
  //   }
  // }
  if (getUsername())
  {
    if (to.path='/login'){
      next({path:'/'})
    } else {
      if (store.state.username.length===0){
        store.dispatch("get_userinfo").then(data=> {
            next();
          }
        ).catch(()=>{
          next({path:'/'})
        })
      }else{
        next()
      }
    }
  }else {
    if (to.matched.some(r => r.meta.requireLogin)) {
      Message({
        type: 'warning',
        showClose: true,
        message: '请先登录哦'
      })

    }
    else {
      next();
    }
  }
})

export default router
