<template>
    <div >
      <el-container>
        <el-main class="me-posts">
          <article-scroll-page></article-scroll-page>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    import ArticleScrollPage from "./common/ArticleScrollPage";
    export default {
        name: "ListAll",
      components: {ArticleScrollPage}
    }
</script>

<style scoped>

</style>
