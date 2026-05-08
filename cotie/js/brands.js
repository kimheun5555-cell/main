    var swiper = new Swiper(".brandsslide", {
        slidesPerView: "auto",
        spaceBetween: 40,
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: "#MD .swiper-button-next",
        prevEl: "#MD .swiper-button-prev",
        },
        });



            $("#MD .wrap .swiper .swiper-slide").hover(
        function(){
            pet = $(this).index()+1;
            nh = $(this).find("img").attr("data-img")
            $(this).find("img").attr("src",nh)
        },
        function(){ 
            $(this).find("img").attr("src", "img/pet"+pet+".jpg")
        }
    )



    $("#brandview article a").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    )