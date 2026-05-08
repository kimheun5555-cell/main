        var hw = $(window).width();
        
        
        
        if (hw > 360) {
            $(window).scroll(function(){
                var sc = $(this).scrollTop()
                console.log(sc)
                if (sc > 1400) {
                    $("#log .wrap article").addClass("off");
                } else {
                    $("#log .wrap article").removeClass("off");
                }
            });
        }
        $("#log .wrap article img").hover(
            function(){
                dh = $(this).attr("data-i");
                sh = $(this).attr("src");
                $(this).attr("src",dh)
            },
            function(){
                $(this).attr("src",sh)
            }
        )


        
        if (hw > 360) {
            $(window).scroll(function(){
                var sc = $(this).scrollTop()
                console.log(sc)
                if (sc > 5500) {
                    $("#store .wrap article").addClass("off");
                } else {
                    $("#store .wrap article").removeClass("off");
                }
            });
        }
        $("#store .wrap article img").hover(
            function(){
                dh = $(this).attr("data-i");
                sh = $(this).attr("src");
                $(this).attr("src",dh)
            },
            function(){
                $(this).attr("src",sh)
            }
        )