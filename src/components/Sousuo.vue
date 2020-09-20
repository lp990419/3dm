<template>
    <div class="screens-bj">
      <div class="screen">
        <span>按首字母检索:</span>
          <el-dropdown>
            <el-dropdown-menu></el-dropdown-menu>
            <el-button type="primary" @click="click">
              筛选
              <i :class="activeClass == false ? 'el-icon-caret-bottom':'el-icon-caret-top'"></i>
            </el-button>
              <div class="shaixuans" v-show="isShow" >
                <div @click="getKeyWord(item)" class="btn"  tag="button" v-for="item in zimu" :key="item">
                  {{item}}
                </div>
            </div>
          </el-dropdown>
      </div>
    </div>
</template>

<script>
export default {
  data(){
       return{
           isShow: false,
       activeClass:false,
      zimu:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
       }
  },
  methods: {
    click() {
      console.log(99999999999999)
      this.isShow = !this.isShow;
      this.activeClass = !this.activeClass
    },
    //获取搜索关键词
    getKeyWord(item){
      this.isShow = false
      this.$router.push({path:`/seriesGames/${item}`})
    }
  },
};
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .screens-bj {
    padding: 0 10px;
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
    position: fixed;
    top: 45px;
    z-index: 999;
    .screen {
      margin-top: 10px;
      width: 95%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      background-color: #fff;
      border-radius: 5px 5px;

      span {
        margin-left: 10px;
      }
      .el-button--primary {
        background-color: #eeeeee;
        padding: 5px 10px;
        color: black;
        margin-left: 10px;
        border: 1px solid #eeeeee;
      }
    }
  }
</style>