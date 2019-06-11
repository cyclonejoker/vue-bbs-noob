<template>
  <scroll-page :loading="loading" :offset="offset" :no-data="noData" v-on:load="load">
    <article-item v-for="p in posts" :key="p.id" v-bind="p" ></article-item>
  </scroll-page>
  <!--<scroll-page :></scroll-page>-->
</template>

<script>
  import ArticleItem from '../ArticleItem'
  import ScrollPage from '../scrollpage/index'


  export default {
    name: "ArticleScrollPage",
    props: {
      offset: {
        type: Number,
        default: 100
      },
      page: {
        type: Object,
        default() {
          return {}
        }
      },
      query: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch: {
      'query': {
        handler() {
          this.noData = false
          this.articles = []
          this.innerPage.pageNumber = 1
          this.getArticles()
        },
        deep: true
      },
      'page': {
        handler() {
          this.noData = false
          this.articles = []
          this.innerPage = this.page
          this.getArticles()
        },
        deep: true
      }
    },
    created() {
      this.getArticles()
    },
    data() {
      return {
        loading: false,
        noData: false,
        innerPage: {
          pageSize: 5,
          pageNumber: 1,
        },
        posts: []
      }
    },
    methods: {
      load() {
        this.getArticles()
      },
      view(id) {
        this.$router.push({path: `/view/${id}`})
      },
      getArticles() {
        let that = this;
        that.loading = true;
        var  params={
          pageNumber:that.innerPage.pageNumber,
          pageSize:that.innerPage.pageSize,
          tag:that.query.tag
        }
        this.$axios.post('post/postList',params).then(function (response) {
              if (response.data.code===0 ) {
                let newPosts = response.data.posts;
                if (newPosts && newPosts.length > 0) {
                  that.innerPage.pageNumber += 1;
                  that.posts = that.articles.concat(newPosts)
                } else {
                  that.noData = true;
                }
              }
              else {
                alert("出现错误")
              }

        }).catch(error=>{
          that.$message({type: 'error', message: '文章加载失败!', showClose: true})
        }).finally(() => {
          that.loading = false});
        // getArticles(that.query, that.innerPage).then(data => {
        //
        //   let newArticles = data.data
        //   if (newArticles && newArticles.length > 0) {
        //     that.innerPage.pageNumber += 1
        //     that.articles = that.articles.concat(newArticles)
        //   } else {
        //     that.noData = true
        //   }
        //
        // }).catch(error => {
        //   if (error !== 'error') {
        //     that.$message({type: 'error', message: '文章加载失败!', showClose: true})
        //   }
        // }).finally(() => {
        //   that.loading = false
        // })

      }
    },
    components: {
      'article-item': ArticleItem,
      'scroll-page': ScrollPage
    }

  }
</script>

<style scoped>
  .el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 10px;

  }
</style>
