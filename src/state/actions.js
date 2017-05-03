import axios from 'axios'
export var actions = {
  getInitialTodos({commit}){
     axios.get('./static/list.json')
      .then(function(response){
          commit('getInitialTodos',response.data);
        }).catch(function(error){
          commit('catchErrors',error);
        });
  },
  addTodos({commit,state},payload){
    commit('changeLoading',true);
    let t1,t2;
    if(state.haveMore){
      t1 = setTimeout(function(){
        axios.get('./static/list1.json')
          .then(function(response){
            commit('addTodos',response.data);
            commit('changeLoading',false);
            commit('changeHaveMore');
            clearTimeout(t1);
          }).catch(function(error){
            commit('catchErrors',error);
            clearTimeout(t1);
          });
      },2000);
    }else{
      t2 = setTimeout(function(){
        commit('changeLoading',false);
        clearTimeout(t2);
      },2000);
    }

  }
};
