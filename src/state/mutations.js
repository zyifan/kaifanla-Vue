export var mutations = {
  getInitialTodos(state,payload){
    state.todos = payload;
    state.todosOne = payload;
  },
  catchErrors(state,payload){
    state.errorFlag = true;
    state.errorMessage = payload;
  },
  addTodos(state,payload){
    let data = payload;
    if(!!state.filtertext){
      data  = payload.filter(function(v,i){
        let name = v.name.slice(1,-1);
        return name.indexOf(state.filtertext) > -1;
      })
    }
    state.todos = state.todos.concat(data);
    state.todosOne = state.todosOne.concat(payload);
  },
  changeLoading(state,payload){
    state.loading = payload;
  },
  filterTodos(state,payload){
    state.todos = state.todos.filter(function(v,i,a){
      let name = v.name.slice(1,-1);
      return name.indexOf(payload) > -1;
    });
  },
  resetTodos(state){
      state.todos = state.todosOne;
  },
  changeHaveMore(state){
    state.haveMore = false;
  },
  updateFiltertext(state,payload){
    state.filtertext = payload;
  }
};
