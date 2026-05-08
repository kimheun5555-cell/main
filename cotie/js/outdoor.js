$("#outdoor .wrap article > a").click(function(){
    $(this).toggleClass("on");
});


$("#outdoor .wrap > ul li a").hover(
    function(){
        var outdata = $(this).find("img").attr("data-i");
        if (outdata) {
            var originalSrc = $(this).find("img").attr("src");
            $(this).find("img").attr("orig-src", originalSrc);
            $(this).find("img").attr("src", outdata);
        }
    },
    function(){
        var originalSrc = $(this).find("img").attr("orig-src");
        if (originalSrc) {
            $(this).find("img").attr("src", originalSrc);
        }
    }
)