var hw = $(window).width();





if (hw > 360) {
    $(function() {
    const images = [
        "img/layer-sushi.png",
        "img/layer-rainbow.png",
        "img/layer-meat.png",
        "img/layer-grass.png",
        "img/layer-flower.png",
        "img/layer-cloud.png",
        "img/layer-fish.png",
        "img/layer-bone.png",
    ]; // 🌈 랜덤 이미지 리스트

    $(document).on("click", function(e) {
        if ($(e.target).closest("a").length > 0) return;
        const randomImg = images[Math.floor(Math.random() * images.length)];
        const $img = $('<img src="' + randomImg + '" class="spin-img">');
        $img.css({
        top: e.pageY - 35 + "px",
        left: e.pageX - 35 + "px"
        });
        $("body").append($img);
        setTimeout(() => $img.addClass("show"), 10);
        setTimeout(() => $img.addClass("stop"), 500);
        setTimeout(() => {
        $img.css({opacity: 0, transform: "scale(0.8) rotate(15deg)"});
        }, 1000);

        setTimeout(() => $img.remove(), 1500);
    });
    });
        
        $(function () {
        $("body").append('<span id="hoverDot"></span>');
        
        const $dot = $("#hoverDot").css({
            position: "absolute",
            top: "0",
            width: "8px",
            height: "8px",
            borderRadius: "8px",
            background: "#000",
            opacity: 0,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease",
            pointerEvents: "none",
        });
        
        const $menuItems = $("header .wrap1 > ul > li").slice(0, 6);
        
        $menuItems.on("mouseenter", function () {
            const $li = $(this);
            const offset = $li.offset();
            const liWidth = $li.outerWidth();
            const liTop = offset.top;
            const liLeft = offset.left + liWidth / 2;
        
            $dot.css({
            left: liLeft + "px",
            top: liTop - 15 + "px",
            opacity: 1,
            });
        });
        
        $menuItems.on("mouseleave", function () {
            $dot.css({ opacity: 0 });
        });
        });
        
        
        
        
    }                
    
    if (hw > 360) {
        $("header .wrap1 .gnb > li").on("mouseover",function(){
            $(this).addClass("on");
        })
        $("header .wrap1 .gnb > li").on("mouseleave",function(){
            $(this).removeClass("on");
        });
        $("header .wrap1 .gnb > li > ul").on("mouseleave",function(){
            $("header .wrap1 ul > li").removeClass("on");
        });
    } else {
        $("header .wrap1 .gnb > li").click(function(){
            var gnbli = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $("header .wrap1 > img").css({"top":gnbli*85}).addClass("on");
        });
    }











    $(function(){
    const $eye = $(".search-open__eye-in, .search-open__eye-out");
    let blinkTimer = null;

    function blink() {
        $eye.css({
        transformOrigin: "center center",
        transition: "transform 0.15s ease-in-out"
        });
        $eye.css("transform", "scaleY(0.1)");
        setTimeout(function(){              
        $eye.css("transform", "scaleY(1)");
        }, 150);

        const nextBlink = Math.random() * 2000 + 1000;
        blinkTimer = setTimeout(blink, nextBlink);
    }

    $("a[href='#none']").hover(
        function(){
        blink();
        },
        function(){
        clearTimeout(blinkTimer);
        $eye.css("transform", "scaleY(1)");
        }
    );
});

$("header .wrap1 > .shop > li:nth-child(1)").click(function(){
    $(".serach").addClass("on");
});

$(".serach i").click(function(){
    $(".serach").removeClass("on");
});



$("header .wrap1 > .shop > li:nth-child(2)").hover(
    function(){
        $(this).addClass("on");
    },
    function(){
        $(this).removeClass("on")
    }
)



if (hw <= 360) {
    $("header .wrap1 > .shop > li:nth-child(3) a").click(function(){
        $("header .wrap1 > .gnb").addClass("on");
        $("html").addClass("on");
    });
    
    $("header .wrap1 > .gnb > li:first-child").click(function(){
        $("header .wrap1 > .gnb").removeClass("on");
        $("html").removeClass("on");
        $("header .wrap1 > img").removeClass("on");
    });

}




$(function(){
    let lastScroll = 0;

    $(window).on("scroll", function(){
        let sc = $(this).scrollTop();
        console.log(sc);
        if (sc > lastScroll && sc > 10) {
            $("header").removeClass("on").addClass("dn");
        } 
        else if (sc < lastScroll) {
            $("header").removeClass("dn").addClass("on");
        }
        if (sc <= 0) {
            $("header").removeClass("on dn");
        }
        lastScroll = sc;
    });
});



if(hw > 360) {
    $("header .wrap1 > .gnb > li > a").on("click", function(e) {
        e.preventDefault();
        const targetUrl = $(this).attr("href"); 
        $("#animate").addClass("on");
        setTimeout(function() {
            $("#animate > img").addClass("up");
        }, 300);
        setTimeout(function() {
            $("#animate > img").addClass("on");
        }, 800);
        setTimeout(function() {
            window.location.href = targetUrl;
            $("#animate > img").removeClass("on")
            $("#animate > img").removeClass("up")
            $("#animate").removeClass("on");
        }, 1500);
    });
}
if(hw > 360) {
    $("header .wrap1 h1 a").on("click", function(e) {
        e.preventDefault();
        const targetUrl = $(this).attr("href"); 
        $("#animate").addClass("on");
        setTimeout(function() {
            $("#animate > img").addClass("up");
        }, 300);
        setTimeout(function() {
            $("#animate > img").addClass("on");
        }, 800);
        setTimeout(function() {
            window.location.href = targetUrl;
            $("#animate > img").removeClass("on")
            $("#animate > img").removeClass("up")
            $("#animate").removeClass("on");
        }, 1500);
    });
}
if(hw > 360) {
    $(".more").on("click", function(e) {
        e.preventDefault();
        const targetUrl = $(this).attr("href"); 
        $("#animate").addClass("on");
        setTimeout(function() {
            $("#animate > img").addClass("up");
        }, 300);
        setTimeout(function() {
            $("#animate > img").addClass("on");
        }, 800);
        setTimeout(function() {
            window.location.href = targetUrl;
            $("#animate > img").removeClass("on")
            $("#animate > img").removeClass("up")
            $("#animate").removeClass("on");
        }, 1500);
    });
}






    $("footer .wrap .about li:last-child").click(function(){
        $(this).toggleClass("on")
        if ($("footer .wrap .about li address").hasClass("on")) {
            $("footer .wrap .about li address").removeClass("on");
        } else {
            $("footer .wrap .about li address").addClass("on");
        }
    })

    $("footer .wrap .sns li").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    )









    $(".play a").hover(
    function(){
        $(this).addClass("on");
    },
    function(){
        $(this).removeClass("on");
    }
)




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

$("#outdoor .wrap .page ul li a").click(function(){
    if ($(this).parent().is(":nth-child(6), :nth-child(7)")) return;
    $(this).addClass("on").parent("li").siblings().find("a").removeClass("on");
});

$("#outdoor .wrap .page ul li a").hover(
    function(){
        if ($(this).parent().is(":nth-child(6), :nth-child(7)")) return;
        $(this).addClass("bd");
    },
    function(){
        if ($(this).parent().is(":nth-child(6), :nth-child(7)")) return;
        $(this).removeClass("bd");
    }
);





$("#indoor .wrap article > a").click(function(){
    $(this).toggleClass("on");
});


$("#indoor .wrap > ul li a").hover(
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

$("#indoor .wrap .page ul li a").click(function(){
    if ($(this).parent().is(":nth-child(6), :nth-child(7)")) return;
    $(this).addClass("on").parent("li").siblings().find("a").removeClass("on");
});

$("#indoor .wrap .page ul li a").hover(
    function(){
        if ($(this).parent().is(":nth-child(6), :nth-child(7)")) return;
        $(this).addClass("bd");
    },
    function(){
        if ($(this).parent().is(":nth-child(6), :nth-child(7)")) return;
        $(this).removeClass("bd");
    }
);

