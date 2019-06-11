<template>
    <el-header class="me-area">
      <el-row class="me-header">
        <el-col :span="4" class="me-header-left">
          <router-link to="/" class="me-title">
            <!--//记得加一个logo-->
          </router-link>
        </el-col>
        <!--导航模块-->
        <el-col :span="16">
          <!--// 这里有一个问题，如何在编辑文档的时候，去掉这个导航栏-->
          <el-menu :router=true menu-trigger="click" active-text-color="#5FB878" mode="horizontal">
            <el-menu-item index="/">首页</el-menu-item>
            <!--<el-menu-item index="/category/all">文章分类</el-menu-item>-->
            <el-menu-item index="/tag">标签</el-menu-item>
            <el-menu-item index="/messageBoard">留言板</el-menu-item>
            <el-menu-item index="/listDetail">文章详情</el-menu-item>
            <el-col :span="4" :offset="4">
              <el-menu-item index="/write"><i class="el-icon-edit"></i>写文章</el-menu-item>
            </el-col>

          </el-menu>
        </el-col>
        <!--登录模块 false-->
        <el-col :span="4">
          <el-menu :router="true" menu-trigger="click" mode="horizontal" active-text-color="#5FB878">
            <template v-if="!user.Login">
              <!--如果用户没有登录，则 显示登录注册-->
              <el-menu-item index="/login">
                <el-button type="text">登录</el-button>
              </el-menu-item>
              <el-menu-item index="/register">
                <el-button type="text">注册</el-button>
              </el-menu-item>
            </template>
            <template v-else>
               <el-submenu index>
                 <template slot="title">个人中心</template>
                 <el-menu-item >账号管理</el-menu-item>
                 <el-menu-item index @click="logout" ><i class="el-icon-back" ></i>退出 </el-menu-item>
               </el-submenu>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
</template>

<script>
  import {getUsername}from"../store/userinfo"
    export default {
        name: "BaseHeader",
      computed:{
          user() {
            let Login = this.$store.state.username.length != 0
            alert(Login);
            return Login;
          }
      },
      methods:
        {
          logout(){
            let that=this;
            console.log("操作前"+this.$store.state.username);
            this.$store.dispatch('remove_userinfo');
            console.log("操作后"+this.$store.state.username);
            alert("退出成功");
          }
        }
    }
</script>

<style scoped>

  .el-header {
    position: fixed;
    z-index: 1024;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
  }

  .me-title {
    margin-top: 10px;
    font-size: 24px;
  }

  .me-header-left {
    margin-top: 10px;
  }

  .me-title img {
    max-height: 2.4rem;
    max-width: 100%;
  }

  .me-header-picture {
    width: 36px;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
    background-color: #5fb878;
  }
</style>
