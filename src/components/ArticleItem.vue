<template>
  <el-card class="me-area" :body-style="{ padding: '16px' }">
    <div class="me-article-header">

<<<<<<< HEAD
      <a @click="view(id)" class="me-article-title">{{title}}</a>
=======
      <a @click="view(postID)" class="me-article-title">{{title}}</a>
>>>>>>> 已经测试完登录注册 以及baseHeader
      <!--<el-button v-if="weight > 0" class="me-article-icon" type="text">置顶</el-button>-->
      <span class="me-pull-right me-article-count">
	    	<i class="me-icon-comment"></i>&nbsp;{{commentCounts}}
	    </span>
      <span class="me-pull-right me-article-count">
<<<<<<< HEAD
	    	<i class="el-icon-view"></i>&nbsp;{{viewCounts}}
=======
	    	<i class="el-icon-view"></i>&nbsp;{{pageviews}}
>>>>>>> 已经测试完登录注册 以及baseHeader
	    </span>
    </div>

    <div class="me-artile-description">
<<<<<<< HEAD
      {{summary}}
    </div>
    <div class="me-article-footer">
	  	<span class="me-article-author">
	    	<i class="me-icon-author"></i>&nbsp;{{author.nickname}}
	    </span>

      <!--<el-tag v-for="t in tags" :key="t.tagname" size="mini" type="success">{{t.tagname}}</el-tag>-->
      <el-tag type="success" size="mini">{{tags}}</el-tag>
      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-time"></i>&nbsp;{{createDate}}
=======
      {{content}}
    </div>
    <div class="me-article-footer">
	  	<span class="me-article-author">
	    	<i class="me-icon-author"></i>&nbsp;{{username}}
	    </span>

      <!--<el-tag v-for="t in tag" :key="t.tagname" size="mini" type="success">{{t.tagname}}</el-tag>-->
      <el-tag type="success" size="mini">{{tag}}</el-tag>
      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-time"></i>&nbsp;{{createTime}}
>>>>>>> 已经测试完登录注册 以及baseHeader
	    </span>

    </div>
  </el-card>
</template>

<script>
    export default {
        name: "ArticleItem",
      //父组件内置的参数
      props: {
<<<<<<< HEAD
        id: Number,
        weight: Number,
        title: String,
        commentCounts: Number,
        viewCounts: Number,
        summary: String,
        author: Object,
        tags: Array,
        createDate: String
      },
        data(){
          return {
          //   id:"这是文章id",
          //     weight:1,
          //   title:'这是文章标题',
          //   commentCounts:18,
          //   viewCounts:15,
          //   summary:'这是文章的简介',
=======
        postID: Number,
        userID:String,
        username:String,
        createTime: String,
        content: String,
        star:String,
        title: String,
        pageviews: Number,
        commentCounts: Number,
        comments:Array,
        tag: String
      },
        data(){
          return {
          //   postID:"这是文章postID",
          //     weight:1,
          //   title:'这是文章标题',
          //   commentCounts:18,
          //   pageviews:15,
          //   content:'这是文章的简介',
>>>>>>> 已经测试完登录注册 以及baseHeader
          //   author:{
          //   nickname:'周玉丽'
          // },
          //   tag:'这是一个标签',
<<<<<<< HEAD
          //     createDate:'2019-06-02',
=======
          //     createTime:'2019-06-02',
>>>>>>> 已经测试完登录注册 以及baseHeader
          }
        },

      methods: {
<<<<<<< HEAD
        view(id) {
          this.$router.push({path:"/listDetail",
          query:{
            id:id
=======
        view(postID) {
          this.$router.push({path:"/listDetail",
          query:{
            postID:postID
>>>>>>> 已经测试完登录注册 以及baseHeader
          }})
        }
      }

    }
</script>

<style scoped>
  .me-article-header {
    /*padding: 10px 18px;*/
    padding-bottom: 10px;
  }

  .me-article-title {
    font-weight: 600;
  }

  .me-article-icon {
    padding: 3px 8px;
  }

  .me-article-count {
    color: #a6a6a6;
    padding-left: 14px;
    font-size: 13px;
  }

  .me-pull-right {
    float: right;
  }

  .me-artile-description {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .me-article-author {
    color: #a6a6a6;
    padding-right: 18px;
    font-size: 13px;
  }

  .el-tag {
    margin-left: 6px;
  }
</style>
