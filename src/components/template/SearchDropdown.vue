<template>
  <div class="dropdown">
    <input
     v-model.trim="inputValue" 
     class="dropdown-input form-control"
      type="text" 
      :placeholder="$t('contact.country',lang)"
      @keyup="showDropdown=true;"
   
       />
       
    <div v-if="showDropdown" class="dropdown-list">
      <div  v-show="itemVisible(country)" v-for="country in countryList" :key="country.name"  class="dropdown-item" @click="selectCountry(country.name)">
        {{ country.name }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"; 
export default {
    data(){
        return {
            inputValue:'',
            showDropdown:false            
        }
    },
    methods:{
        itemVisible:function(item)
        {
                  let currentName = item.name.toLowerCase()
                    let currentInput = this.inputValue.toLowerCase()
                    return currentName.includes(currentInput)
        },
        selectCountry(country){
           this.inputValue = country;
           	this.$store.commit('setSelectedCountry',country);
            this.showDropdown=false;
        },
    },
    computed:{
        ...mapGetters({
            lang:'getLang'
        }),
        countryList:function(){
            return this.$services.Requirements.getCountryList(this.lang);
        }
    },
}
</script>