<template>
<div>
    <app-header></app-header>
    <section id="categories-area" class="section-py">
        			<div class="container">
				<div class="cat-title">
					<h2>Contact Us</h2>
				</div>
                        <div class="row">
                        <div class="col-md-8">
                            <form action="/post" method="post">
                                <input class="form-control" name="name" v-model="name" placeholder="Name..." /><br />
                                <input class="form-control" name="phone" placeholder="Phone..." /><br />
                                <input class="form-control" v-model="email" name="email" placeholder="E-mail..." /><br />
                                <textarea class="form-control" name="text" placeholder="How can we help you?" style="height:150px;"></textarea><br />
                                <input class="btn btn-primary" type="submit" value="Send" /><br /><br />
                            </form>
                        </div>
                        <div class="col-md-4">
                            <b>Customer service:</b> <br />
                            Phone: +1 111 11 11<br />
                            E-mail: <a href="mailto:support@v-conmerce.com">support@v-commerce.com</a><br />
                            <br /><br />
                            <b>Headquarter:</b><br />
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
export default {
    data(){
        return {
        name:this.$store.state.user===null ? "":this.$store.state.user.name,
        email:this.$store.state.user===null ? "":this.$store.state.user.email,
        }
    },
    components:{
        appHeader:Header,
        appFooter:Footer,
        appFooterarea:Footerarea
    }
}
</script>
