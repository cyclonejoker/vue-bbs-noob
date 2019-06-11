<template>
  <scroll-page :loading="loading" :offset="offset" :no-data="noData" v-on:load="load">
    <article-item v-for="a in articles" :key="a.postID" v-bind="a"></article-item>
  </scroll-page>
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
        articles: []
      }
    },
    methods: {
      load() {
        this.getArticles()
      },
      view(id) {
        this.$router.push({path: `/view/${id}`})
      },
        getArticles(){
          let that = this;
          that.loading = true;
          var params={
            pageNumber:that.innerPage.pageNumber,
            pageSize:that.innerPage.pageSize,
            // tag:that.query.tag
          }
          console.log("请求的参数是"+params.pageNumber);
          this.$axios.post('post/postList',params).then(function (response) {
              let newPosts = response.data;
              console.log("传入的参数是"+newPosts)
              //这样写有一个bug，传过来的数据是[] 不是{}
              // let newPosts={
              //   postID:response.data.postID,
              //   userID:response.data.userID,
              //   username:response.data.username,
              //   createTime:response.data.createTime,
              //   title:response.data.title,
              //   content:response.data.content,
              //   star:response.data.star,
              //   pageviews:response.data.pageviews,
              //   commentCounts:response.data.commentCounts,
              //   comments:response.data.comments,
              //   tag:response.data.tag
              //
              // }


              if (newPosts && newPosts.length > 0) {
                that.innerPage.pageNumber += 1;
                that.articles = that.articles.concat(newPosts)
              } else {
                that.noData = true;
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
