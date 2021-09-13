<template>
<li class="nav-item dropdown" >
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLang" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-globe"></i>
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdownLang">
<a class="dropdown-item" @click="changeLang('en')">EN</a>
<a class="dropdown-item" @click="changeLang('tr')">TR</a>
</div>	
</li>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        changeLang:function(lang)
		{
			this.$store.commit('setLang',lang)
		},
    }
}
</script>