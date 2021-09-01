export default{
    
    countryList:{
        en:[
            { id: "TR", name: "Turkey" },
            { id: "US", name: "United States of America" },
            { id: "GB", name: "United Kingdom" },
            { id: "DE", name: "Germany" },
            { id: "SE", name: "Sweden" },
            { id: "KE", name: "Kenya" },
            { id: "BR", name: "Brazil" },
            { id: "ZW", name: "Zimbabwe" }
        ],
        tr:[
            { id: "TR", name: "Türkiye" },
            { id: "US", name: "Amerika Birleşik Devletleri" },
            { id: "GB", name: "Birleşik Krallık" },
            { id: "DE", name: "Almanya" },
            { id: "SE", name: "İsviçre" },
            { id: "KE", name: "Kenya" },
            { id: "BR", name: "Brezilya" },
            { id: "ZW", name: "Zimbabwe" }
        ],
    },
    getCountryList(lang)
    {
        console.log(lang);
        return this.countryList[lang];
    },
}