<template>
  <div id="home">
  <el-container>
    <el-header>
<<<<<<< HEAD
      <base-header></base-header>
=======
      <base-header v-if="isRouterAlive"></base-header>
>>>>>>> 已经测试完登录注册 以及baseHeader

    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
  </div>
</template>

<script>
  import BaseHeader from "./components/BaseHeader";

    export default {
        name: "Home",
<<<<<<< HEAD
      components: {
        'base-header':BaseHeader}
=======
        data(){
            return{
              isRouterAlive:true
            }
        },
      components: {
        'base-header':BaseHeader},
        methods: {
        reload () {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
   }   
 }
>>>>>>> 已经测试完登录注册 以及baseHeader

    }
</script>

<style scoped>

</style>
