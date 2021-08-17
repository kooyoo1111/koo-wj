<template>
<el-card shadow="always" style="height:390px;width:250px">
  <div style="padding-top:15px;"><img src="../../assets/img/icon/icon5.jpeg" style="width:127px;border-radius:50%"></div>
    <h1 class="me-author-name">李格</h1>
    <div class="me-author-description">
      <span style="padding-right:10px"><i class="el-icon-female"></i> 全栈开发</span>
      <span><i class="el-icon-location-outline"></i>四川/成都</span>
    </div>
    <div class="me-author-tool">
      <!-- <i @click="showTool(qq)" :title="qq.title" class="me-icon-QQ"></i> -->
      <a href="Mailto:664705209@qq.com" class="el-icon-message" style="font-size:26px"></a>
      <span><a href="https://github.com/kooyoo1111/koo-wj" target="_Blank"><i class="icon-GitHub"></i></a></span>
    </div>
</el-card>
</template>

<script>
  export default {
    name: 'CardMe',
    data() {
      return {
        qq: {title: 'QQ', message: '919431514'},
        github: {
          title: 'github',
          message: '<a target="_blank" href="https://github.com/shimh-develop">https://github.com/shimh-develop</a>'
        }
      }
    },
    methods: {
      showTool(tool) {
        this.$message({
          duration: 0,
          showClose: true,
          dangerouslyUseHTMLString: true,
          message: '<strong>' + tool.message + '</strong>'
        });
      }
    }
  }
</script>

<style scoped>
  .me-author-name {
    text-align: center;
    font-size: 25px;
    border-bottom: 1px solid #409EFF;
  }
  .me-author-description {
    padding: 10px 0;
    padding-top: 5px;
    /* padding-left: 16px;
    padding-right: 16px; */
  }
  .me-icon-job {
    padding-left: 16px;
  }
  .me-author-tool {
    text-align: center;
    padding-top: 10px;
  }
  .me-author-tool i {
    cursor: pointer;
    padding: 4px 10px;
    font-size: 30px;
  }

</style>