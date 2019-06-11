import Vue from "vue";
import Vuex from "vuex";
import {getUsername,setUsername,removeUsername,setUserid} from './userinfo'
Vue.use(Vuex);

export default new Vuex.Store(
  {
    state:{
      userid:'',
      username:'',
    },
    mutations: {
      SET_USERINFO:(state,userinfo)=>
      {
        state.userid=userinfo.userid;
        state.username=userinfo.username;
        setUsername(userinfo.username);
        setUserid(userinfo.userid)
      },
    },
    actions:
      {
        store_userinfo(userinfo)
        {
          // 嗯是个逻辑bug 我改改
          this.commit("SET_USERINFO",userinfo);
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
                userid:'',
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
              userid:'',
            username:''
          };
          this.commit("SET_USERINFO",data);
        }
      }
  }
)
