<template>
  <div id="home">
  <el-container>
    <el-header>
      <base-header v-if="isRouterAlive"></base-header>

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

    }
</script>

<style scoped>

</style>
