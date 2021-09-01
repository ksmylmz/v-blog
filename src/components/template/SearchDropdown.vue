<template>
  <div class="dropdown">
    <input
     v-model.trim="inputValue" 
     class="dropdown-input form-control"
      type="text" 
      :placeholder="$t('contact.country',lang)"
      @keyup="showDropdown=true"
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
            countryList:[],
            inputValue:'',
            showDropdown:false            
        }
    },
    created:function()
    {
        this.countryList = this.$services.Requirements.getCountryList();
        console.log(this.countryList);
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
            this.showDropdown=false;
        }
    },
    computed:{
        ...mapGetters({
            lang:'getLang'
        }),
    }
}
</script>