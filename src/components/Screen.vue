<template >
  <div class="shaixuans" >
       <div @click="clicks(item)" class="btn"  tag="button" v-for="item in zimu" :key="item">
        {{item}}
       </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      zimu:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
      show:false,
      inner:'',
    }
  },
  name: "screen",
  methods: {
    clicks(item){
      this.inner = item
      this.$parent.$parent.isShow = false;
      this.$router.push({path:`/seriesGames/${this.inner}`})
    }
  },
};
</script>

<style lang="scss">
.shaixuans {
  position: fixed;
  top: 100px;
  left: 10px;
  width: 95%;
  height: 78%;
  background-color: #ffffff;
  text-align: center;
  border-radius: 5px 5px;
  .btn {
    width: 20%;
    line-height: 20px;
    height: 20px;
    float: left;
    margin: 2.4%;
    background-color: #cccccc;
    border-radius: 5px 5px;
    border:0;
    outline:none;
    color: #333;
    font-size: 14px;
  }
}
</style>