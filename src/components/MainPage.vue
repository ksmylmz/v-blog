<template>
<div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
    <app-footerarea></app-footerarea>
</div>
</template>
<script>
import Header from "./template/Header"
import Footer from "./template/footer"
import Footerarea from "./template/footerarea"
import MainpageContent from "./template/MainpageContent.vue"
export default {
    data(){
        return {
            
        }
    },
    components:{
        appHeader:Header,
        appContent:MainpageContent,
        appFooter:Footer,
        appFooterarea:Footerarea
    },
    created()
    {
    console.log("35..................");
    console.log(process.env.VUE_APP_BASE_URL_SRC);

    }
}
</script>
