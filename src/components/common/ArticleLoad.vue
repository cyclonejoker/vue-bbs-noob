<template>
    <article-item v-for="p in posts" :key="p.id" v-bind="p"></article-item>
</template>

<script>
    import ArticleItem from "../ArticleItem";
    export default {
        name: "ArticleLoad",
      components: {ArticleItem},
      created(){
          this.getArticles()
      },
      data(){
          return{
            posts:[],
          }
      },
      methods:{
          getArticles(){

          }
      }
    }
</script>

<style scoped>

</style>
