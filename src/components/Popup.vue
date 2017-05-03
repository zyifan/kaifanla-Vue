<template>
  <div id="mask">
    <button data-toggle="modal" data-target="#myModal" class="btn btn-success pull-right left15"><slot>btn</slot></button>
    <!--模态框-->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Login</h4>
          </div>
          <div class="modal-body">
            <form name="myForm" novalidate>
              <div class="form-group">
                <label for="recipient-name" class="control-label">user:</label>
                <input type="text" name="user" v-model="user" class="form-control" id="recipient-name" required>
              </div>
              <span v-show="userError" style="color:red" >username is required</span>
              <div class="form-group">
                <label for="message-text" class="control-label">password:</label>
                <input class="form-control" name="pwd" v-model="pwd" id="message-text" type="password" required/>
              </div>
              <span v-show="pwdError" style="color:red">password is required</span>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <input type="submit" class="btn btn-primary" @click="submitForm"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name:'popup',
    data(){
      return{
        user:'',
        pwd:'',
        userError:false,
        pwdError:false
      }
    },
    methods:{
      submitForm(){
        if(!this.user){
          this.userError = true;
          return;
        }else{
          this.userError = false;
        }
        if(!this.pwd){
          this.pwdError = true;
          return;
        }else{
          this.pwdError = false;
        }
        $('#myModal').modal('hide');
      }
    }
  }
</script>

<style scoped>

</style>
