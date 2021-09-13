export default{
    
    blogcontents:{
        en:[
            { 
                title: "Blog 1", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae fringilla justo. Sed quis magna id urna blandit dictum sed sed dui. Nulla dapibus leo a vulputate aliquam. Duis at lorem rutrum, cursus libero vitae, egestas arcu. Morbi pulvinar sagittis luctus. Nam sollicitudin luctus nisl, at congue lacus pretium vitae. Duis eleifend nec odio fermentum pellentesque. Curabitur magna diam, sollicitudin quis nisi semper, rutrum auctor purus. Ut consequat blandit urna." 
            },
            { 
                title: "Blog 2", 
                content: "Cras tincidunt, massa a tincidunt porttitor, tellus tellus varius ex, elementum rhoncus ipsum enim eget elit. Sed leo velit, pulvinar eget urna at, dictum tincidunt quam. Vestibulum posuere tincidunt leo aliquet pellentesque. In sit amet auctor felis, vitae mattis sem. Sed cursus urna vitae commodo placerat. Donec a nibh in leo tempus pharetra. Suspendisse eu pulvinar mauris. Praesent varius eros ut felis consectetur, ut cursus velit lacinia." 
            },
            { 
                title: "Blog 3", 
                content: "Vestibulum nunc sem, laoreet in erat eget, semper rhoncus risus. Aenean feugiat nibh nec auctor interdum. Maecenas pulvinar vulputate vehicula. Nam consequat quam ut rutrum finibus. Sed accumsan a lorem in fringilla. Pellentesque ac varius risus. Maecenas luctus ac turpis ac accumsan. Suspendisse potenti. Sed eu nunc fringilla, tristique purus venenatis, pellentesque risus. Nam vel diam in augue efficitur mattis. Quisque dictum commodo ultricies. Donec a magna nunc. Suspendisse eget blandit orci. Vivamus luctus purus vel tempor cursus. Mauris interdum enim eu nisi rutrum mattis. Duis non est eu ante tristique tempus." 
            },

        ],
        tr:[
            { 
                title: "Günlük 1", 
                content: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır."
            },
            { 
                title: "Günlük 2", 
                content: "1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden üretilmiştir." 
            },
            { 
                title: "Günlük 3", 
                content: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız, metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız gerekir." 
            },
        ],
    },
    getContents(lang)
    {
        console.log(lang);
        return this.blogcontents[lang];
    },
}