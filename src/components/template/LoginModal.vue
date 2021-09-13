<template>
			<b-modal id="loginModal" hide-footer>
			<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
				<h5 class="modal-title" id="loginModal">{{$t('navbar.login',lang)}}</h5>
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
					<label for="email">{{$t('navbar.email',lang)}}</label>
					<input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
						<small id="emailHelp" class="form-text text-muted"></small>
						</div>
						<div class="form-group">
						<label for="password">{{$t('navbar.password',lang)}}</label>
						<input type="password" v-model="password" class="form-control" id="password" placeholder="">
						</div>
						<div class="alert alert-danger" role="alert" v-if="error!=null">
						{{error}}
					</div>
					</div>
					<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeLoginModal">
						{{$t('navbar.close',lang)}}
					</button>
					<button type="button" class="btn btn-primary" @click="login">{{$t('navbar.login',lang)}}</button>
					<br>
					<div class="float-right">
						<app-language></app-language>
					</div>
					</div>

				</div>
				</div>
			</b-modal>
</template>

<script>
import {mapGetters} from "vuex";
import language from "./language.vue";

export default {
  data(){
    return {
			email:"kasim-yilmaz@hotmail.com",
			password:"123456",
			error:null,
    }
  },
	components:{
		appLanguage:language
	},
  methods:
	{
    closeLoginModal:function(){
			this.$bvModal.hide('loginModal');
		},
		login:function(){

			this.error=null;
			let result = this.$services.Auth.checkUser(this.email,this.password);
			console.log(result);
			if(result.status){
			this.$store.commit("setUser",
			{
				name:result.user.name,
				email:result.user.email
			});  
			this.closeLoginModal();
			//this.$router.go(this.$router.currentRoute);
			}else
			{
			this.error =result.error;
			}	
		},
	},
		computed:{
		...mapGetters({
			lang:'getLang'
		})
		}
}
</script>
<style scoped>
 li 
 {
   list-style-type: none; 
 }
 li a, li a:hover 
 {
	 color: rgb(0 0 0 / 50%) !important;
 }
</style>
