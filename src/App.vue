<template>

   <div class="mybox">
   <tophead></tophead>
    <sidebar></sidebar>
    <div class='content'>
      <router-view></router-view>
    </div>
   
   </div>

</template>

<script>
// 第一步 一定要根目录  之后在style 里面写结构  第三步 创建组件  头部不再需要  （import） 引入头部组件 在注册(注册commpontens ) 之后再template 注册头部
//引入 
import tophead from './commpent/tophead.vue'

import sidebar from './commpent/sidebar.vue'

export default {
  components:{
    tophead:tophead,
    sidebar:sidebar
  }
}
</script>

<style >

  .mybox {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
.tophead {
  width: 800px;
  height: 80px;
  border: 5px solid red;
  box-sizing: border-box;
}
.sidebar {
  float: left;
  width: 200px;
  height: 520px;
  border: 5px solid green;
  box-sizing: border-box;
}
.content {
  float: right;
  width: 600px;
  height: 520px;
  border: 5px solid blue;
  box-sizing: border-box;
}
</style>