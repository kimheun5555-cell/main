var hw = $(window).width();

$(document).ready(function(){
    $("#main .wrap article > img").addClass("on")
});



$("#main .wrap > img").hover(
    function(){
        $(this).addClass("on");
    },
    function(){
        $(this).removeClass("on");
    }
)

    $(function(){
    function checkVisible() {
        $('#brands .aos').each(function(){
        const elemTop = $(this).offset().top;
        const elemBottom = elemTop + $(this).outerHeight();
        const viewTop = $(window).scrollTop();
        const viewBottom = viewTop + $(window).height();
        if (elemBottom > viewTop + 100 && elemTop < viewBottom - 100) {
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
        });
    }
    $(window).on('scroll resize', checkVisible);
    checkVisible();
    });

$(".more").hover(
    function(){
        $(this).addClass("on");
    },
    function(){
        $(this).removeClass("on");
    }
)




setInterval (function(){
    setTimeout(function(){
        $("#video2 .wrap figure img").eq(2).addClass("op");
        setTimeout(function(){
            $("#video2 .wrap figure img").eq(1).addClass("op");
            setTimeout(function(){
                $("#video2 .wrap figure img").eq(0).addClass("op");
            },300);
        },300);
    },300);
    $("#video2 .wrap figure img").removeClass("op");
},2000);


    $(function(){
    function toy() {
        $('#video2 .aos').each(function(){
        const elemTop = $(this).offset().top;
        const elemBottom = elemTop + $(this).outerHeight();
        const viewTop = $(window).scrollTop();
        const viewBottom = viewTop + $(window).height();
        if (elemBottom > viewTop + 100 && elemTop < viewBottom - 200) {
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
        });
    }
    $(window).on('scroll resize', toy);
    toy();
    });




    if(hw > 360) {
        $(function(){
        function hand() {
            $('#milk .aos').each(function(){
            const elemTop = $(this).offset().top;
            const elemBottom = elemTop + $(this).outerHeight();
            const viewTop = $(window).scrollTop();
            const viewBottompc = viewTop + $(window).height()-700;
            if (elemBottom > viewTop + 100 && elemTop < viewBottompc - 100) {
                $(this).addClass('on');
                setTimeout(function(){
                    $("#milk .wrap figure img:nth-of-type(1)").addClass("on");
                },800);
            }
            });
        }
        $(window).on('scroll resize', hand);
        hand();
        });
    } else {
            $(function(){
                function hand() {
                    $('#milk .aos').each(function(){
                    const elemTop = $(this).offset().top;
                    const elemBottom = elemTop + $(this).outerHeight();
                    const viewTop = $(window).scrollTop();
                    const viewBottommob = viewTop + $(window).height();
                if (elemBottom > viewTop + 100 && elemTop < viewBottommob - 100) {
                    $(this).addClass('on');
                    setTimeout(function(){
                        $("#milk .wrap figure img:nth-of-type(1)").addClass("on");
                    },800);
                }
                });
            }
            $(window).on('scroll resize', hand);
            hand();
            });
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 40,
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        });


    $(function(){
    function slide() {
        $('#new .aos').each(function(){
        const elemTop = $(this).offset().top;
        const elemBottom = elemTop + $(this).outerHeight();
        const viewTop = $(window).scrollTop();
        const viewBottom = viewTop + $(window).height();
        if (elemBottom > viewTop + 100 && elemTop < viewBottom - 100) {
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
        });
    }
    $(window).on('scroll resize', slide);
    slide();
    });

    
    $("#new .wrap .swiper .swiper-slide").hover(
        function(){
            mod = $(this).index()+1;
            nh = $(this).find("img").attr("data-img")
            $(this).find("img").attr("src",nh)
        },
        function(){
            $(this).find("img").attr("src", "img/mod"+mod+".jpg")
        }
    )


    $("#insta .wrap .instabox figure").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    )   
