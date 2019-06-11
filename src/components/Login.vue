<template>
<<<<<<< HEAD
  <div id="login" v-title data-title="登录">
=======
  <div id="login">
>>>>>>> 已经测试完登录注册 以及baseHeader
    <!--<video preload="auto" class="me-video-player" autoplay="autoplay" loop="loop">
          <source src="../../static/vedio/sea.mp4" type="video/mp4">
      </video>-->

    <div class="me-login-box me-login-box-radius">
      <h1>登录</h1>

      <el-form ref="userForm" :model="userForm" :rules="rules">
<<<<<<< HEAD
        <el-form-item prop="userid">
          <el-input placeholder="用户名" v-model="userForm.userid"></el-input>
=======
        <el-form-item prop="userID">
          <el-input placeholder="用户名" v-model="userForm.userID"></el-input>
>>>>>>> 已经测试完登录注册 以及baseHeader
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" v-model="userForm.password"></el-input>
        </el-form-item>

        <el-form-item size="small" class="me-login-button">
          <el-button type="primary" @click.native.prevent="onSubmit('userForm')">登录</el-button>
        </el-form-item>
      </el-form>

      <div class="me-login-design">
        <p>回到
          <strong>
            <router-link to="/" class="me-login-design-color">首页</router-link>
          </strong>
        </p>
      </div>

    </div>
  </div>
</template>

<script>

    export default {
      name: "Login",
      data() {
        return {
          userForm: {
<<<<<<< HEAD
            userid: '',
            password: ''
          },
          rules: {
            userid: [
=======
            userID: '',
            password: ''
          },
          rules: {
            userID: [
>>>>>>> 已经测试完登录注册 以及baseHeader
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {max: 10, message: '不能大于10个字符', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {max: 10, message: '不能大于10个字符', trigger: 'blur'}
            ]
          }
        }
      },
      methods:{
        onSubmit(formName)
        {
          this.$refs[formName].validate(valid=>{
              if (valid){
<<<<<<< HEAD

                this.$axios.post("user/add",this.userForm).then(function (response) {
=======
                  var temp=this.userForm;
                  let that=this;
                this.$axios.post("user/login",this.userForm).then(function (response) {
>>>>>>> 已经测试完登录注册 以及baseHeader
                  if (response.data.code===0)
                  {
                        console.log("登陆成功");
                        var data={
<<<<<<< HEAD
                          userid: this.userForm.userid,
=======
                          userID: temp.userID,
>>>>>>> 已经测试完登录注册 以及baseHeader
                          username: response.data.username
                        }
                        //save data to localstoreage.
                        //返回过来的数据有一个form 然后把这个userfrom 存到浏览器里
                    /*
<<<<<<< HEAD
                    { userid:'',
                    username:''
                    }
                     */

                        this.$store.dispatch('store_userinfo',data);
                        console.log(this.$store.state);
=======
                    { userID:'',
                    username:''
                    }
                     */
                      console.log(data);
                        that.$store.dispatch('store_userinfo',data);
                        console.log(that.$store.state);
                        that.$router.push({path:'/'})
>>>>>>> 已经测试完登录注册 以及baseHeader

                  }
                  else {
                    console.log("登录失败");
                  }
                })
              }
              else {
                console.log("登录失败");
              }
          })
        }

      }

    }
</script>

<style scoped>
  #login {
    min-width: 100%;
    min-height: 100%;
  }

  .me-video-player {
    background-color: transparent;
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
    position: absolute;
    left: 0;
    z-index: 0;
    top: 0;
  }

  .me-login-box {
    position: absolute;
    width: 300px;
    height: 260px;
    background-color: white;
    margin-top: 150px;
    margin-left: -180px;
    left: 50%;
    padding: 30px;
  }

  .me-login-box-radius {
    border-radius: 10px;
    box-shadow: 0px 0px 1px 1px rgba(161, 159, 159, 0.1);
  }

  .me-login-box h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    vertical-align: middle;
  }

  .me-login-design {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }

  .me-login-design-color {
    color: #5FB878 !important;
  }

  .me-login-button {
    text-align: center;
  }

  .me-login-button button {
    width: 100%;
  }

</style>
