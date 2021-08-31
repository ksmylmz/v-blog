<template>
<section id="showcase">
 <div class="container">
	 <div id="blog" class="row"> 
                
                 <div class="col-md-10 blogShort">
                     <h1>{{$t('mainpage.title',lang)}} 1</h1>
                           
                        
                     <article><p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                         five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                         of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                         Lorem Ipsum.    
                         </p></article>
                     <a class="btn btn-blog pull-right marginBottom10" href="#">READ MORE</a> 
                 </div>
                  <div class="col-md-10 blogShort">
                     <h1>{{$t('mainpage.title',lang)}} 2</h1>
                     <article><p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                         five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                         of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                         Lorem Ipsum.
                         </p></article>
                     <a class="btn btn-blog pull-right marginBottom10" href="#">READ MORE</a> 
                 </div>
                 
                  <div class="col-md-10 blogShort">
                     <h1>{{$t('mainpage.title',lang)}} 3</h1>
                     <article><p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                         five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                         of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                         Lorem Ipsum.
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
	computed:{
		...mapGetters({
			lang:'getLang'
		})
    }
}
</script>