<template>
  <div class="start">
    <div id="table">
      <div id="tableCell">
        <!--<div class="container">-->
          <h1 class="text-center">开饭啦<small>在线订餐</small></h1>
          <router-link to="/main" class="start-a">
            <img src="../assets/img/kid-foods.jpg">
          </router-link>
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'start'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .start{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
  }
  #table{
    display:table;
    width:100%;
    height:100%;
    text-align:center;
  }
  #tableCell{
    display:table-cell;
    vertical-align:middle;
    text-align:center;
  }
  .text-center{
    margin-top:-50px;
  }
</style>
