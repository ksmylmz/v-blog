<template>
  <b-modal id="loginModal" hide-footer>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModal">Login</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="alert alert-danger" role="alert" v-if="error!=null">
            {{error}}
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" v-on:click="login">Login</button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>

export default {
  data(){
    return {
      email:"kasim-yilmaz@hotmail.com",
      password:"123456",
      error:null,
      isHidden:''
    }
  },
  methods:
	{
		login:function(){

         this.error=null;
         let result = this.$services.Auth.checkUser(this.email,this.password);
         if(result.status){
            
            this.$store.state.user={
             name:result.user.name,
              email:result.user.email,
           };   
           this.$bvModal.hide('loginModal');
         }else
         {
           this.error =result.error;
         }



      
		},
	}
}
</script>
<style scoped>
.mymodal
{

}
</style>
