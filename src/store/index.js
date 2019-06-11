import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import {getUsername,setUsername,removeUsername,setUserid} from './userinfo'
=======
import {getUsername,setUsername,removeUsername,setUserID} from './userinfo'
>>>>>>> 已经测试完登录注册 以及baseHeader
Vue.use(Vuex);

export default new Vuex.Store(
  {
    state:{
<<<<<<< HEAD
      userid:'',
=======
      userID:'',
>>>>>>> 已经测试完登录注册 以及baseHeader
      username:'',
    },
    mutations: {
      SET_USERINFO:(state,userinfo)=>
      {
<<<<<<< HEAD
        state.userid=userinfo.userid;
        state.username=userinfo.username;
        setUsername(userinfo.username);
        setUserid(userinfo.userid)
=======
        console.log(userinfo);

        state.userID=userinfo.userID;
        state.username=userinfo.username;
        setUsername(userinfo.username);
        setUserID(userinfo.userID)
>>>>>>> 已经测试完登录注册 以及baseHeader
      },
    },
    actions:
      {
<<<<<<< HEAD
        store_userinfo(userinfo)
        {
          // 嗯是个逻辑bug 我改改
          this.commit("SET_USERINFO",userinfo);
=======
        //action 第一个参数是上下文，第二个参数才是传参。
        store_userinfo({commit},userinfo)
        {
          // 嗯是个逻辑bug 我改改
          console.log("the data in actions is "+userinfo);
          commit("SET_USERINFO",userinfo);
>>>>>>> 已经测试完登录注册 以及baseHeader
        },
        /*
        @param
        {
        code: '',
        userinfo:{
          userid:'',
          username:''
        }
        }
        @逻辑  请求当前用户信息，让后端返回现在登陆的账号。 如果后端不存在现在已经登陆的账号，则设置当前store里面的账号信息为空。
        主要用于断线重连
         */
        get_userinfo()
        {
          this.$axios.get("user/getcurrentUser",{}).then(function (res) {
            console.log("获得的用户信息是："+res.data.userinfo);
            if (res.data.code===-1)
            {
              var data={
<<<<<<< HEAD
                userid:'',
=======
                userID:'',
>>>>>>> 已经测试完登录注册 以及baseHeader
                username:''
              };
              this.commit("SET_USERINFO",data);
            }
            else{
              this.commit("SET_USERINFO",res.data.userinfo);
            }
          })
        },
        remove_userinfo()
        {
          var data={
<<<<<<< HEAD
              userid:'',
=======
            userID:'',
>>>>>>> 已经测试完登录注册 以及baseHeader
            username:''
          };
          this.commit("SET_USERINFO",data);
        }
      }
  }
)
