<template>
  <div id="app">
    <!-- navbar -->
    <van-nav-bar title="3DM游戏网"/>

    <router-view></router-view>

    <van-tabbar v-model="active">
      <!-- tabbar -->
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/game">游戏</van-tabbar-item>
      <van-tabbar-item icon="more-o" to="/strategy">攻略</van-tabbar-item>
      <van-tabbar-item icon="medal-o" to="/original">原创</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="scss">
#app{
  padding-top: 46px;
  padding-bottom: 50px;
  .van-nav-bar{
    position: fixed;
    top: 0;
    width: 100%;
  .van-nav-bar__title{
    font-weight:700;
    font-size: 18px;
  }
}
}
</style>