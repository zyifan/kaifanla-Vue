<template>
  <div class="container">
    <div class="detail">
      <ul class="breadcrumb">
        <li><router-link to="/main">首页</router-link></li>
        <li class="active">详情</li>
      </ul>
      <h2>{{item.name}}</h2>
      <hr/>
      <p>{{item.material}}</p>
      <img :src="'./static/img/'+item.img_l" class="img-responsive"/>
      <br/>
      <div>{{item.detail}}</div>
      <br/>
      <div class="clearfix bottom30">
        <popup>我要订餐</popup>
        <router-link to="/main" class="btn btn-warning pull-right margin-right15">我再看看</router-link>
      </div>
    </div>

  </div>

</template>

<script>
import popup from './Popup'
export default {
  name: 'detail',
  components:{popup:popup},
  mounted:function(){$(window).scrollTop(0)},
  data(){
    return {
      title:'登录'
    }
  },
  computed:{
      item(){
        let item = null;
        let len = this.$store.state.todos.length;
        for(let i=0;i<len;i++){
          if(this.$store.state.todos[i].id === this.$route.params.id){
            item = this.$store.state.todos[i];
            break;
          }
        }
        return item;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position:absolute;
  width:100%;
  height:100%;
  left:0;
  top:70px;
}
  .bottom30{
    margin-bottom:30px;
  }
  .margin-right15{margin-right:15px;}
</style>
