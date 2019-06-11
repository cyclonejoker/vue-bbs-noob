<!--//写完了好吧。但是没有测试 。估计一测试会全是debug-->
<template>
  <div class="me-view-body" v-title :data-title="title">
    <el-container class="me-view-container">

      <el-main>

        <div class="me-view-card">
          <h1 class="me-view-title">{{post.title}}</h1>
          <div class="me-view-author">
            <div class="me-view-info">
              <span>{{posts.author}}</span>
              <div class="me-view-meta">
                <span>创建时间</span>
                <span>阅读   10</span>
                <span>评论   10</span>
              </div>
              <div class="me-view-content">
                {{posts.content}}
              </div>
              <div class="me-view-end">
                <el-alert
                  title="文章End..."
                  type="success"
                  center
                  :closable="false">
                </el-alert>
              </div>
              <div class="me-view-comment">
                <div class="me-view-comment-write">
                  <el-row :gutter="20">
                    <el-col :span="2">
                      <a class="">
                        <!--<img class="me-view-picture" :src="avatar"></img>-->
                      </a>
                    </el-col>
                    <el-col :span="22">
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 2}"
                        placeholder="你的评论..."
                        class="me-view-comment-text"

                        resize="none">
                      </el-input>
                    </el-col>
                  </el-row>

                  <el-row :gutter="20">
                    <el-col :span="2" :offset="22">
                      <el-button type="text" @click="publishComment()">评论</el-button>
                    </el-col>
                  </el-row>
                </div>

                <div class="me-view-comment-title">
                  <span>{{posts.commentCounts}}条评论</span>
                </div>

                <commment-item
                  v-for="(c,index) in comments"
                  :comment="c"
                  :articleId="article.id"
                  :index="index"
                  :rootCommentCounts="comments.length"
                  @commentCountsIncrement="commentCountsIncrement"
                  :key="c.id">
                </commment-item>

              </div>

            </div>

          </div>
        </div>


      </el-main>
    </el-container>
  </div>
</template>
<!--这里可以使用 watch 监听路由变化， 复用代码 因为变化的只是文章-->
<script>
    export default {
        name: "ListALL",
      created(){
          let that=this;
          //传参数方法
        // 传参:
        //   this.$router.push({
        //     path:'/xxx',
        //     query:{
        //       id:id
        //     }
        //   })
        //
        // 接收参数:
        //   this.$route.query.id
        that.posts.id=this.$route.query.id;

        this.getArticleData();
      },
      data(){
          return{
            posts:{
              id:'',
              title: '',
              commentCounts: 0,
              viewCounts: 0,
              summary: '',
              author: {},
              tag: [],
              createDate: '',
              // editor: {
              //   value: '',
              //   toolbarsFlag: false,
              //   subfield: false,
              //   defaultOpen: 'preview'
              // }
              content:''
            },
            comments: [],
            comment: {
              author:'',
              content: ''
            }
          }
      },
      computed:{
          title(){
            // alert("hello")
            return "这是一篇文章"
          }
      },
      methods:{
          editArticle(){
            //注意 这里 用的是 ` ` 而不是' '
            // this.$router.push({path: '/write/${this.article.id}'});
            // this.$router.push({path: `/write/${this.posts.id}`});
            this.$router.push({path:'/write',
            query:{
              id:this.posts.id
            }
            })

          },
          getArticleData(){
            var  data={
              postsid:this.posts.id
            };
            this.$axios.post('/article/get',data).then(function (res) {
              if (res.data.code===-1)
              {
                  this.$message({type: 'error', message: '帖子加载失败', showClose: true});
              }
              else{
                //这里使用object.assign 复制对象
                let  that=this;
                var posts=res.data.posts;
                Object.assign(that.posts,posts);
              }
            })
<<<<<<< HEAD

          }
=======
            this.getComments()

          },
          getComments(){
            var data={
              postID:id
            }

            this.$axios.post()
          }

>>>>>>> 已经测试完登录注册 以及baseHeader
      }
    }
</script>

<style scoped>
  .me-view-body {
    margin: 100px auto 140px;
  }

  .me-view-container {
    /*width: 700px;*/
  }

  .el-main {
    overflow: hidden;
  }

  .me-view-title {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }

  .me-view-author {
    /*margin: 30px 0;*/
    margin-top: 30px;
    vertical-align: middle;
  }

  .me-view-picture {
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
    background-color: #5fb878;
  }

  .me-view-info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
  }

  .me-view-meta {
    font-size: 12px;
    color: #969696;
  }

  .me-view-end {
    margin-top: 20px;
  }

  .me-view-tag {
    margin-top: 20px;
    padding-left: 6px;
    border-left: 4px solid #c5cac3;
  }

  .me-view-tag-item {
    margin: 0 4px;
  }

  .me-view-comment {
    margin-top: 60px;
  }

  .me-view-comment-title {
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 20px;
  }

  .me-view-comment-write {
    margin-top: 20px;
  }

  .me-view-comment-text {
    font-size: 16px;
  }

  .v-show-content {
    padding: 8px 25px 15px 0px !important;
  }

  .v-note-wrapper .v-note-panel {
    box-shadow: none !important;
  }

  .v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
    background: #fff !important;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>
