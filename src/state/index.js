import Vue from 'vue'
import Vuex from 'vuex';
import {mutations} from './mutations'
import {actions} from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
      todos:[],
      todosOne:[],
      errorFlag:false,
      errorMessage:'',
      loading:false,
      haveMore:true,
      filtertext:''
  },
  mutations:mutations,
  actions:actions
});
