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
									<a class="nav-link" >{{$t('navbar.home',lang)}}</a>
								</router-link>
							
							<router-link
								class="nav-item"
								tag="li"
								to="/contact"
								active-class="active"
							>
								<a class="nav-link">{{$t('navbar.contact',lang)}}</a>
							</router-link>
							<li>					
								<div v-if="user!=null"> 
									<button type="button" class="btn btn-light" v-on:click="logout">
										<i class="far fa-user"></i>
										{{$t('navbar.logout',lang)}} ({{user.name}}) </button>
								</div>
								<div v-else>
									<button type="button" class="btn btn-light"
									 v-b-modal.loginModal
													>
										<i class="far fa-user"></i>
										{{$t('navbar.login',lang)}}</button>
								</div>
							</li>
							<li>
							<div class="form-check">
							<select name="locale" @change="changeLang($event)" id="locale">
								<option value="en">EN</option>
								<option value="tr">TR</option>
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
import {mapGetters} from "vuex";
export default {
	data(){
		return {
			logourl : process.env.VUE_APP_BASE_URL_SRC+"/assets/img/logo.png",
			
		}
	},
	components:{
		appLoginModal:loginModal
	},
  	methods:
	{
		logout:function(){
			this.$store.commit('setUser',null);
		},
		changeLang:function(event)
		{
			this.$store.commit('setLang',event.target.value)
		}
	},
	computed:{
		...mapGetters({
			user:'getUser',
			lang:'getLang'
		})

	}
}
</script>

<style scoped>

</style>