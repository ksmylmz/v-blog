<template>
	<div class="container">
    				<nav class="navbar navbar-expand-lg navbar-light bg-white">
					<router-link to="/" tag="a" class="navbar-brand"><img :src="logourl" alt=""/></router-link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
								<router-link
									tag="li"
									to="/"
									active-class="active"
									class="nav-item"
								>
									<a class="nav-link" >Home</a>
								</router-link>
							
							<router-link
								class="nav-item"
								tag="li"
								to="/contact"
								active-class="active"
							>
								<a class="nav-link">Contact</a>
							</router-link>
							<li>					
								<div v-if="user!=null"> 
									<button type="button" class="btn btn-light" :click="logout">
										<i class="far fa-user"></i>
										Logout({{user.name}})</button>
								</div>
								<div v-else>
									<button type="button" class="btn btn-light"
									 v-b-modal.loginModal
													>
										<i class="far fa-user"></i>
										Login</button>
								</div>
							</li>
							<li>
							<div class="form-check">
							<select name="locale" id="locale">
								<option value="TR">TR</option>
								<option value="EN">EN</option>
							</select>
							</div>
							</li>
						</ul>
					</div>
			</nav>
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
					<input type="email" v-model="email4placeholder" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
						<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						<div class="form-group">
						<label for="password">Password</label>
						<input type="password" v-model="password4placeholder" class="form-control" id="password" placeholder="Password">
						</div>
						<div class="alert alert-danger" role="alert" v-if="error!=null">
						{{error}}
					</div>
					</div>
					<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeLoginModal">
						Close
					</button>
					<button type="button" class="btn btn-primary" @click="login">Login</button>
					</div>
				</div>
				</div>
			</b-modal>
    </div>
</template>
<script>
//import loginModal from "./LoginModal.vue"
export default {
	data(){
		return {
			logourl : process.env.VUE_APP_BASE_URL_SRC+"/assets/img/logo.png",
			user:this.$store.state.user,
			email:"kasim-yilmaz@hotmail.com",
			password:"123456",
			error:null,
			
		}
	},
	components:{
		//appLoginModal:loginModal
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
				
				this.$store.commit("setUser",{
				name:result.user.name,
				email:result.user.email,
				});  
			this.setUser();
			this.closeLoginModal();
			//this.$router.go(this.$router.currentRoute);
			}else
			{
			this.error =result.error;
			}	
		},
		logout:function(){
			this.$store.state.user=null;
			this.setUser();
		},
		setUser(){
			this.user = this.$store.state.user;
		}
	},
	computed:{
		user:this.$store.state.user
	}
}
</script>

<style scoped>

</style>