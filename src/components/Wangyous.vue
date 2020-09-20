<template>
  <div class="box">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="group">
        <div class="groups">{{name}}</div>
        <div class="games" v-for="item in series" :key="item.aid">
          <div class="poster">
            <img :src="item.litpic" />
          </div>
          <p class="title">{{item.title}}</p>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import dmaxios from "@/tools/dmaxios";
import { seriesGameUrl } from "@/tools/api";
export default {
  data() {
    return {
      series: [],
      name: "",
      showtype:"",
       loading: false,
      finished: false,
    };
  },
  created() {
    // this.name = this.$route.params.type.trim();
    // console.log(this.name,111111,"sasd");
    // this.m();
    this.onLoad()
  },
  // watch: {
  //   "$route.path": function (newVal) {
  //     this.series = [];
  //     this.name = this.$route.params.type.trim();
  //     console.log(this.name);
  //     this.m();
  //   },
  // },
  methods: {
    // async m() {
    //   console.log("A");
    //   let result = await dmaxios("post", seriesGameUrl, {
    //     pagesize: 10,
    //     showtype: 21,
    //     page: 1,
    //     name: this.name,
    //     sign: "8Sql77jeuJzj4d1N",
    //   });
    //   console.log(result);
    //   this.series = result.data.list;
    // },
    onLoad() {
         let result = await dmaxios("post", seriesGameUrl, {
        pagesize: 10,
        showtype: 21,
        page: 1,
        name: this.name,
        sign: "8Sql77jeuJzj4d1N",
      });
            this.series = result.data.list;
    }
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
  :after {
    display: table;
    content: "";
    clear: both;
  }
  .group {
    width: 100%;
    border-radius: 5px 5px;
    background-color: #fff;
    margin-top: 15px;
    .groups {
      padding-top: 10px;
      margin-left: 10px;
      font-size: 18px;
    }
    .games {
      width: 31%;
      height: 180px;
      float: left;
      margin-right: 1%;
      margin-left: 1%;
      text-align: center;
      .poster {
        width: 100%;
        height: 80%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px 10px;
        }
      }
      .title {
        font-size: 12px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: 10px;
        overflow: hidden;
      }
    }
  }
}
</style>