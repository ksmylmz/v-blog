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
								<div v-if="this.$store.state.user!=null"> 
									<button type="button" class="btn btn-light" :click="logout">
										<i class="far fa-user"></i>
										Logout({{this.$store.state.user.name}})</button>
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
			<app-login-modal></app-login-modal>
    </div>
</template>
<script>
import loginModal from "./LoginModal.vue"
export default {
	data(){
		return {
			logourl : process.env.VUE_APP_BASE_URL_SRC+"/assets/img/logo.png"
		}
	},
	components:{
		appLoginModal:loginModal
	},
	watch:{
		logout:function(){
			this.$store.state.user=null;
		}
	}

}
</script>

<style scoped>

</style>