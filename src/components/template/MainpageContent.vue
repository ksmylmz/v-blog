<template>
<section id="showcase">
 <div class="container">
    <div class="cat-title">
        <h2>{{ $t(currentPage,lang) }}</h2>
    </div>
	 <div id="blog" class="row"> 
                 <div class="col-md-10 blogShort"  v-for="content in contentlist">
                     <h1>{{content.title}} </h1>
                     <article><p>
                         {{content.content}}
                         </p></article>
                     <a class="btn btn-blog pull-right marginBottom10" href="#">READ MORE</a> 
                 </div>
                 
               <div class="col-md-12 gap10"></div>
    </div>
</div>
</section>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    data(){
        return {
        }
    },
	computed:{
		...mapGetters({
			lang:'getLang'
		}),
        contentlist:function(){
            return this.$services.ContentSercice.getContents(this.lang);
        },
        currentPage:function(){
            return 'routing_list.'+this.$route.name;
        }  
    }
}
</script> 