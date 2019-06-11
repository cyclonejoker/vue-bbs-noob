<template>
    <div class="block">
      <span class="demonstration">文章分类入口</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item   v-for="tag in tags" :key="tag" >
          <h3  @click="view(tag)">{{tag}}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "ListTag",
      data(){
          return{
            tags:['java','web','ML']
          }
      },methods:{
        view(choose_tag){
          this.$router.push({path:'/ListbyTag',
            query:{
              tag:choose_tag
            }
          })
        }
      }
    }
</script>

<style scoped>
  .el-carousel-item{
    background-color: dimgray;
  }
</style>
