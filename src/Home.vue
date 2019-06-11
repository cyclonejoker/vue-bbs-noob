<template>
  <div id="home">
  <el-container>
    <el-header>
      <base-header></base-header>

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
      components: {
        'base-header':BaseHeader}

    }
</script>

<style scoped>

</style>
