<template>
  <div class="box">
    <div class="screen-bj">
      <div class="screen">
        <span>按首字母检索:</span>
        <el-dropdown>
          <el-dropdown-menu></el-dropdown-menu>
            <el-button type="primary" @click="click">
              筛选
              <i :class="activeClass == false ? 'el-icon-caret-bottom':'el-icon-caret-top'"></i>
            </el-button>
            <screen v-show="isShow"></screen>
          </el-dropdown>
      </div>
    </div>

<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
    <template #pulling="props">
    <img
      class="doge"
      src="https://img.yzcdn.cn/vant/doge.png"
      :style="{ transform: `scale(${props.distance / 80})` }"
    />
  </template>

  <!-- 释放提示 -->
  <template #loosing>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
  </template>

  <!-- 加载提示 -->
  <template #loading>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
  </template>
    <div class="group" v-for="item in contents" :key="item.aid">
      <div class="groups">{{item.name}}</div>
      <div class="content">
        <div class="games" v-for="(i,index) in item.list" :key="index">
          <div class="poster">
            <img :src="i.litpic" />
          </div>
          <p class="title">{{i.title}}</p>
        </div>
      </div>
    </div>
</van-pull-refresh>
  <el-tooltip placement="top" content="返回顶部">
      <back-to-top 
        transitionName="fade"
        :customStyle="myBackToTopStyle" 
        :visibilityHeight="300" 
        :backPosition="50">
      </back-to-top>
    </el-tooltip>
  </div>
</template>

<script>
import BackToTop from '@/components/top.vue'
import { Toast } from 'vant';
import screen from "@/components/Screen.vue";
import dmaxios from "@/tools/dmaxios";
import { standAloneUrl } from "@/tools/api";
export default {
  data() {
    return {
      isShow: false,
      contents: [],
      activeClass:false,
      isLoading: false,
      myBackToTopStyle: {
        'right': '30px',
        'bottom': '80px',
        'width': '40px',
        'height': '40px',
        'border-radius': '20px',
        'line-height': '40px', 
        'background': '#fff'
      
      },
      showtype:"20"
    };
  },
  created() {
    this.m();
  },
  components: {
    screen,
     BackToTop
  },
  methods: {
    async m() {
      let result = await dmaxios("post", standAloneUrl, {
        showtype:20,
        sign: "8Sql77jeuJzj4d1N",
      });
      console.log(result.data.list);
      this.contents = result.data.list;
    },
    click() {
      this.isShow = !this.isShow;
      this.activeClass = !this.activeClass
    },
    onRefresh() {
      setTimeout(() => {
        Toast('哈撒给');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  padding-top: 45px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background-color: #f5f5f5;
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
  .screen-bj {
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

  .group {
    border-radius: 5px 5px;
    background-color: #fff;
    margin-top: 15px;
    :after {
      display: table;
      content: "";
      clear: both;
    }

    .groups {
      padding-top: 10px;
      margin-left: 10px;
      font-size: 18px;
    }
    .content {
      margin-top: 5px;
      // display: flex;
      // flex-wrap: wrap;
      // justify-content:space-between;
      // text-align: center;
      text-align: center;
      width: 100%;
      .games {
        margin-top: 15px;
        height: 200px;
        float: left;
        width: 31%;
        margin-right: 1%;
        margin-left: 1%;
        border-radius: 15px 15px;
        .poster {
          width: 100%;
          height: 80%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 15px 15px;
          }
        }
        .title {
          font-size: 12px;
          padding: 10px 0 10px;
          height: 10px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>