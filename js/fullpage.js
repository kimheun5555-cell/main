var deleteLog = false;

$(document).ready(function() {
    AOS.init({
        once: false,
        duration: 1000,
        easing: 'ease-in-out',
    });
    $('#fullpage').fullpage({
        sectionsColor: ['#F0EDE6', '#F0EDE6', '#F0EDE6', '#F0EDE6', '#F0EDE6'],
        anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
        menu: '#menu',
        navigation: true,
        autoScrolling: true,
        scrollHorizontally: false,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3','4','5'],
        responsiveWidth : 800,//모바일에서 풀페이지 작동 안하게 할때 사용
        onLeave: function(index, nextIndex, direction){
            // if (direction == "down") {
            //     $("#menu").addClass("hide")
            // } else {
            //     $("#menu").removeClass("hide")
            // }
            if (nextIndex >= 3) {
                $("#menu").addClass("hide")
            } else {
                $("#menu").removeClass("hide")
            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){

        },
        afterRender: function(){

        },
        afterResize: function(){

        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        const currentSlide = $(".fp-slide.active");
            currentSlide.find('[data-aos]').addClass('aos-animate');
        },
        afterLoad: function(anchorLink, index){
            if (index >= 3) {
                $("#menu").addClass("bg")
            } else {
                $("#menu").removeClass("bg")
            }
            $("#main .wrap h2").removeClass("on");
    if (index == 2) {
setTimeout(function(){
    $(".section").eq(1).find("figure").addClass("on");
    setTimeout(function(){
        $("#main .wrap > figure").addClass("bg");
    }, 900);
}, 500);
    }
    if (index == 3) {
setTimeout(function(){
    $(".section").eq(2).find("figure").addClass("on");
    setTimeout(function(){
        $("#design .wrap > figure").addClass("bg");
    }, 900);
}, 500);
    }
    const currentSection = $(".section").eq(index - 1);
            currentSection.find('[data-aos]').addClass('aos-animate');
    
        }
        
    });

});

