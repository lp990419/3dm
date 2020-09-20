<template>
    <div>
      <div class="box">
        <div class="top">
          <div class="hot">热门内容</div>
          <router-link  class="whole" to='/standalone' >全部 +</router-link>
        </div>
        <div class="content">
          <div class="games" v-for="item in films" :key="item.aid">
            <div class="poster">
              <img :src="item.litpic" />
            </div>
            <p class="title">{{item.title}}</p>
          </div>
        </div>
      </div>
      <!-- 第二网游 -->
      <div class="box">
        <div class="top">
          <div class="hot">热门网游</div>
          <router-link  class="whole" to='/onlinegames' >全部 +</router-link>
        </div>
        <div class="content">
          <div class="hotGame" v-for="item in hotGames" :key="item.aid">
            <div class="poster">
              <img :src="item.litpic" />
            </div>
            <p class="title">{{item.title}}</p>
          </div>
        </div>
      </div>
      <!-- 热门手游 -->
      <div class="box">
        <div class="top">
          <div class="hot">热门手游</div>
          <router-link  class="whole" to='/mobilegames'>全部 +</router-link>
        </div>
        <div class="content">
          <div class="mobileGames" v-for="item in mobileGames" :key="item.aid">
            <div class="bj">
              <img :src="item.litpic" />
            </div>
            <div class="details">详情</div>
            <div class="title">{{item.title}}</div>
            <div class="smallposter">
                <div class="smallposter-top">
                </div>
                <div class="smallposter-bottom">
                </div>
              <img :src="item.litpic" >
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import dmaxios from "@/tools/dmaxios";
import { strategyUrl } from "@/tools/api";

export default {
  data() {
    return {
      films: [],
      hotGames: [],
      mobileGames: [],
    };
  },
  created() {
    this.m();
  },
  methods: {
    async m() {
      let result = await dmaxios("POST", strategyUrl, {
        page: 1,
        pagesize: 10,
        sign: "8Sql77jeuJzj4d1N",
      });
      console.log(result.data);
      this.films = result.data.danjilist;
      this.hotGames = result.data.wangyoulist;
      this.mobileGames = result.data.shouyoulist;
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
  margin-top: 5px;
  padding: 5px;
  .top {
    border-left: 3px solid red;
    display: flex;
    justify-content: space-between;
    height: 20px;
    .hot {
      font-size: 16px;
      margin-left: 5px;
      line-height: 20px;
    }
    .whole {
      font-size: 12px;
      line-height: 20px;
      color: #c1c1c1;
      border: 1px solid #c2c2c2;
      border-radius: 8px 8px;
      padding: 0 8px;
      margin-right: 5px;
    }
  }
  .content {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    font-size: 14px;
    color: #616161;
    .mobileGames {
      margin-top: 40px;
      height: 150px;
      width: 31%;
      border-radius: 10px 10px;
      position: relative;
      .bj {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 10px 10px;
        z-index: -2;
        img {
          width: 120%;
          height: 120%;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          filter: blur(4px);
        }
      }
      .details {
        border: 1px solid #3333;
        border-radius: 15px 15px;
        padding: 2px 18px;
        height: 20px;
        width: 30%;
        position: absolute;
          top: 0;
          left: 0;
          bottom: -100px;
          right: 0;
          margin: auto;
        color: #ffffff;
        background: rgba(221, 218, 218, 0.5);
        border: 0;
      }
      .title {
        width: 100%;
        font-size: 14px;
        padding: 10px 0 10px;
        height: 10px;
        overflow: hidden;
        color: #fff;
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
      }
      .smallposter{
        width: 80px;
        height: 80px;
        border-radius: 15px 15px;
        position: absolute;
          top: -120px;
          left: 0;
          bottom: 0px;
          right: 0;
          margin: auto;
        .smallposter-top{
            width: 100%;
            height: 50%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background: #ccc;
            position: absolute;
            top: 0;
            z-index: -1;
        }
        .smallposter-bottom{
            width: 100%;
            height: 50%;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            background: #fff;
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px 20px;
        }
      }
    }
    .hotGame {
      margin-top: 10px;
      height: 150px;
      width: 45%;
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
    .games {
      margin-top: 15px;
      height: 200px;
      width: 31%;
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
</style>