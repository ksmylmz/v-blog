<template>
<div>
    <app-header></app-header>
    <section id="categories-area" class="section-py">
        			<div class="container">
				<div class="cat-title">
					<h2>{{ $t('contact.contactus',lang) }}</h2>
				</div>
                        <div class="row">
                        <div class="col-md-8">
                            <form action="/post" method="post">
                                <input class="form-control" name="name" :value="user!=null?user.name:''"  :placeholder="$t('contact.name',lang)" /><br />
                                <input class="form-control" name="phone"
                                :placeholder="$t('contact.phone',lang)"
                                
                                 @blurr="$v.phoneinput.dirty()"
                                 :class="{'is-invalid':!$v.phoneinput.integer}"
                                 /><br />
                                <input class="form-control" type="text"
                                :value="user!=null?user.email:''" 
                                 name="email" 
                                 @blurr="$v.emailinput.dirty()"
                                :placeholder="$t('contact.email',lang)"
                                :class="{'is-invalid':!$v.emailinput.email}"
                                 />
                                 <br />
                                <textarea class="form-control" name="text" :placeholder="$t('contact.howcan',lang)"  style="height:150px;"></textarea><br />
                                <input class="btn btn-primary" type="submit" :value="$t('contact.send',lang)" /><br /><br />
                            </form>
                        </div>
                        <div class="col-md-4">
                            <b> {{ $t('contact.customersercvice',lang) }} :</b> <br />
                            Phone: +1 111 11 11<br />
                            E-mail: <a href="mailto:support@v-conmerce.com">support@v-commerce.com</a><br />
                            <br /><br />
                            <b>{{ $t('contact.Headquarter',lang) }} :</b><br />
                            Company Inc, <br />
                            Las vegas street 201<br />
                            55001 Nevada, USA<br />
                            Phone: +1 145 000 101<br />
                            <a href="mailto:usa@v-conmerce.com">usa@v-conmerce.com</a><br />


                            <br /><br />
                            <b>Istanbul:</b><br />
                            V-Commerce Ltd.Şti, <br />
                            Mecidiye Cad.<br />
                            Mimar Kemalettin Ap. no 0<br/>
                            Phone: +90 111 11 11<br />
                            <a href="mailto:ist@v-conmerce.com">ist@v-conmerce.com</a><br />


                        </div>
                        </div>

			</div>
    </section>  
    <app-footer></app-footer>
    <app-footerarea></app-footerarea>
</div>
</template>
<script>
import Header from "./template/Header"
import Footer from "./template/footer"
import Footerarea from "./template/footerarea"

import {mapGetters} from "vuex"; 
import { email,required,integer }  from 'vuelidate/lib/validators';
export default {
    data(){
        return {
            emailinput:null,
            phoneinput:null
        }
    },
    components:{
        appHeader:Header,
        appFooter:Footer,
        appFooterarea:Footerarea
    },
    computed:{
        ...mapGetters({
            user:'getUser',
            lang:'getLang'
        }),
        email:function(){
            this.user===null?"":user.email
        },
        name:function(){
            this.user===null?"":user.email
        },
    },
    validations(){
        return{
            emailinput:{email},
            phoneinput:{integer}
        }
    },
    methods: {
        getStatusClass(status)
        {
            return status?'valid':'error'
        }
    }
}
</script>
