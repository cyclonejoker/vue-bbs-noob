<template>
  <el-card class="me-area" :body-style="{ padding: '16px' }">
    <div class="me-article-header">

      <a @click="view(postID)" class="me-article-title">{{title}}</a>
      <!--<el-button v-if="weight > 0" class="me-article-icon" type="text">置顶</el-button>-->
      <span class="me-pull-right me-article-count">
	    	<i class="me-icon-comment"></i>&nbsp;{{commentCounts}}
	    </span>
      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-view"></i>&nbsp;{{pageviews}}
	    </span>
    </div>

    <div class="me-artile-description">
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
	    </span>

    </div>
  </el-card>
</template>

<script>
    export default {
        name: "ArticleItem",
      //父组件内置的参数
      props: {
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
          //   author:{
          //   nickname:'周玉丽'
          // },
          //   tag:'这是一个标签',
          //     createTime:'2019-06-02',
          }
        },

      methods: {
        view(postID) {
          this.$router.push({path:"/listDetail",
          query:{
            postID:postID
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
