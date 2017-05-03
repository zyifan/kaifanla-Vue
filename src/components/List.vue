<template>
  <div class="container">
    <label>美食搜索</label>
    <div class="input-group">
      <input type="search" v-model="filtertext" class="form-control"/>
        <span class="input-group-btn">
            <button class="btn btn-default" @click="filterInput">搜索</button>
        </span>
    </div>
    <div class="list-group">
      <template v-if="errorFlag">
        <h4><span>{{errorMessage.response.status}}</span> Error!</h4>
        <p>
          <span>{{errorMessage.response.config.method}}</span>
          <span class="error-message">{{errorMessage.response.config.url}}</span>
          <span>{{errorMessage.response.statusText}}</span>
        </p>
        <!--<div class="error-message"><span>{{errorMessage.statustext}}</span></div>-->
      </template>
      <template v-else>
        <router-link v-for="todo in todos" class="list-group-item" :to="'/main/detail/'+todo.id" :key="todo.id">
          <div class="media">
            <div class="media-left media-middle">
              <img :src="'./static/img/'+todo.img"/>
            </div>
            <div class="media-body">
              <h4>{{todo.name}}</h4>
              <p>{{todo.material}}</p>
            </div>
          </div>
        </router-link>
      </template>

    </div>
    <button class="btn btn-primary btn-block btn-addmore" @click="addTodos">
      <template v-if="haveMore">
        <span v-show="loading">加载中...</span>
        <span v-show="!loading">加载更多</span>
      </template>
      <template v-else>
        <span v-show="loading">加载中...</span>
        <span v-show="!loading">没有更多数据</span>
      </template>
    </button>
  </div>
</template>

<script>
import { mapState ,mapActions} from 'vuex'
export default {
  name: 'list',
  computed:{
    itemsFilter(){
      if(!!this.filtertext){
        let ft = (this.filtertext+'').trim;
        return this.$store.state.todos.filter(function(v,i,arr){
          return v.name.indexOf(ft) > -1;
        })
      }
    },
    filtertext:{
      get () {
        return this.$store.state.filtertext
      },
      set (value) {
        this.$store.commit('updateFiltertext', value)
      }
    },
    ...mapState([
      'todos',
      'errorFlag',
      'errorMessage',
      'loading',
      'haveMore'
    ])
  },
  methods:{
    filterInput:function(){
      if(!!this.filtertext){
        let text = (this.filtertext+'').trim();
        this.$store.commit('filterTodos',text);
      }else{
        this.$store.commit('resetTodos');
      }
    },
//    ...mapActions(['addTodos'])
    addTodos(){
      this.$store.dispatch('addTodos');
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
  .error-message{
    color:red;
  }
  .list-group{
    margin-top:15px;
  }
  .btn-addmore{
    margin-bottom:20px;
  }
</style>
