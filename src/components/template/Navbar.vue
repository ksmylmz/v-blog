<template>
	<div class="container" v-if="!ismobile()">
		<div class="row">
		<router-link to="/" tag="a" class="navbar-brand col-4"><img :src="logourl" alt=""/></router-link>
						<nav class="navbar navbar-expand-lg navbar-light bg-white col-6" >
						
						<button
							class="navbar-toggler ml-auto"
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
										<a class="nav-link" ><i class="fa fa-home"></i> {{$t('navbar.home',lang)}}</a>
									</router-link>
								
								<router-link
									class="nav-item"
									tag="li"
									to="/contact"
									active-class=""
								>
									<a class="nav-link"><i class="fa fa-paper-plane"></i> {{$t('navbar.contact',lang)}}</a>
								</router-link>
								<li v-if="user!=null" class="nav-item dropdown">	
										<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i class="far fa-user"></i>
										</a>
										<div class="dropdown-menu" aria-labelledby="navbarDropdownUser">
										<a class="dropdown-item" >{{user.email}} </a>
										<a class="dropdown-item" >{{user.name}} </a>
										<a class="dropdown-item"  v-on:click="logout">{{$t('navbar.logout',lang)}}</a>
										</div>				
				
								</li>
								<li v-else>
										<a type="button" class="nav-link"
										v-b-modal.loginModal
														>
											<i class="far fa-user"></i>
											{{$t('navbar.login',lang)}}</a>
								</li>

								<li class="nav-item dropdown" >
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLang" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="fa fa-globe"></i>
									</a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdownLang">
									<a class="dropdown-item" @click="changeLang('en')">EN</a>
									<a class="dropdown-item" @click="changeLang('tr')">TR</a>
									</div>	
								</li>
							</ul>
						</div>
				</nav>
				<app-login-modal></app-login-modal>
		</div>
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
		changeLang:function(lang)
		{
			this.$store.commit('setLang',lang)
		},
		ismobile()
		{
			return window.innerWidth<760?true:false;
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