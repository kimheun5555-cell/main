$(document).ready(function(){
    $("body").addClass("on");
    setTimeout(function(){
        $("#intro .main").addClass("on");}, 500);
});


let toggle = false;
function mainimg() {
    toggle = !toggle;
    $("#intro .main img").attr("src", toggle ? "img/mainimg2.png" : "img/mainimg1.png");
}
setInterval(mainimg, 400);

function scroll() {
    $("#intro p").addClass("on");
    setTimeout(function() { $("#intro p").removeClass("on"); }, 200);
}
setInterval(scroll, 2000);



$("#menu li a").hover(
    function(){
        $(this).addClass("on");
    },
    function(){
        $(this).removeClass("on");
    }
)


        $("#main .wrap article").hover(
            function(){
                $(this).addClass("on");
            },
            function(){
                $(this).removeClass("on");
            }
        )



        $("#main .wrap ul li a").hover(
            function(){
                $(this).addClass("on");
            },
            function(){
                $(this).removeClass("on");
            }
        )

    $(function () {
        const $section = $('#prd .wrap .raos .circle-area');
        if (!$section.length) return;

        const circles = [
            { id: '#circle1', target: 90, color: '#3F3F3F' },
            { id: '#circle2', target: 85, color: '#3F3F3F' }
        ];

        function initCanvas($canvas, targetPercent, color) {
            if (!$canvas.length) return null;

            // Ensure each canvas has its own positioned wrapper so texts don't overlap
            if (!$canvas.parent().hasClass('circle-wrap')) {
                $canvas.wrap('<div class="circle-wrap"></div>');
            }
            const $container = $canvas.parent(); // now the per-canvas wrapper
            $container.css({
                position: $container.css('position') === 'static' ? 'relative' : $container.css('position'),
                display: 'inline-block',
                width: $container.width() ? $container.width() : '100%',
                height: $container.height() ? $container.height() : '100%'
            });

            // remove any existing text to avoid duplicates
            $container.find('.circle-text').remove();

            const canvasEl = $canvas[0];
            const ctx = canvasEl.getContext('2d');
            const lineWidth = 12;

            $canvas.css({ display: 'block', width: '100%', height: '100%' });

            const $text = $('<div class="circle-text"></div>').css({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                color: '#222',
                fontSize: '22px',
                fontWeight: '600',
                textAlign: 'center',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                zIndex: 2
            }).text('0%');
            $container.append($text);

            function resize() {
                // use wrapper rect so canvas scales to wrapper size
                const rect = canvasEl.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                canvasEl.style.width = rect.width + 'px';
                canvasEl.style.height = rect.height + 'px';
                canvasEl.width = Math.max(1, Math.floor(rect.width * dpr));
                canvasEl.height = Math.max(1, Math.floor(rect.height * dpr));
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                const baseFont = Math.round(Math.max(12, Math.min(28, rect.width * 0.12)));
                $text.css('fontSize', baseFont + 'px');
            }

            function draw(progress) {
                const rect = canvasEl.getBoundingClientRect();
                const w = rect.width;
                const h = rect.height;
                const cx = w / 2;
                const cy = h / 2;
                const radius = Math.max(0, Math.min(cx, cy) - lineWidth / 2);
                ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

                // background circle
                ctx.beginPath();
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = '#eee';
                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                ctx.stroke();

                // progress arc
                const endAngle = -Math.PI / 2 + Math.PI * 2 * progress;
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth;
                ctx.arc(cx, cy, radius, -Math.PI / 2, endAngle);
                ctx.stroke();
            }

            function animateTo(target) {
                let start = null;
                const duration = 7000;
                const from = 0;

                function step(ts) {
                    if (!start) start = ts;
                    const elapsed = ts - start;
                    const t = Math.min(1, elapsed / duration);
                    const eased = 1 - Math.pow(1 - t, 3);
                    const current = from + (target - from) * eased;

                    draw(current / 100);
                    $text.text(Math.round(current) + '%');

                    if (elapsed < duration) {
                        requestAnimationFrame(step);
                    } else {
                        draw(target / 100);
                        $text.text(target + '%');
                    }
                }
                requestAnimationFrame(step);
            }

            resize();
            $(window).on('resize', resize);

            return { animateTo, targetPercent };
        }

        const instances = circles
            .map(c => initCanvas($(c.id), c.target, c.color))
            .filter(Boolean);

        let played = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !played) {
                    played = true;
                    instances.forEach(i => i.animateTo(i.targetPercent));
                }
            });
        }, { threshold: 0.3 });

        const prdEl = $('#prd')[0];
        if (prdEl) observer.observe(prdEl);
    });


    $("#prd .wrap .laos .but a").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    )




    $(function(){
    const projectData = {
        cotie: {
            title: "Cotie Shop",
            process: "cotie.html",
            view: "cotie/index.html",
            description: "반려동물 쇼핑몰 꼬띠샵의 클론 웹사이트로, 기존 사이트의 감성과 디테일을 최대한 살려 재구성하였습니다. UI 구성과 색감, 타이포그래피 등 세부적인 디자인 요소를 직접 구현하며 실제 서비스 수준의 완성도를 목표로 제작했습니다." 
        },
        kookje: {
            title: "Kookje University",
            process: "kookje.html",
            view: "kookje/index.html",
            description: "국제대학교 공식 웹사이트를 참고하여 모바일 디자인을 재구성하고, HTML과 CSS과 jquery을 이용해 구현하였습니다 기존 사이트의 구조적 장점을 분석하며, 실무 감각과 퍼블리싱 완성도를 높이는 데 중점을 두었습니다." 
        },
        korea_arts: {
            title: "한국예술종합학교",
            process: "korea_arts.html",
            view: "korea_arts/index.html",
            description: "한국예술종합학교 공식 웹사이트를 참고하여 디자인을 재구성하고, HTML과 CSS만을 이용해 처음으로 반응형을 구현하였습니다 기존 사이트의 구조적 장점을 분석하며, 실무 감각과 퍼블리싱 완성도를 높이는 데 중점을 두었습니다." 
        }
    };

    let currentIndex = 0;
    const $slides = $("#main .frame .slide li");
    const $article = $("#main article");

    function updateContent(index){
        const $current = $slides.eq(index);
        const name = $current.find("img").data("name");
        const data = projectData[name];

        if (data) {
            $article.find("h3").fadeOut(200, function() {
                $(this).text(data.title).fadeIn(200);
            });
            $article.find("p").fadeOut(200, function() {
                $(this).text(data.description).fadeIn(200);
            });

            const $links = $article.find(".botbox a");
            $links.eq(0).attr("href", data.process);
            $links.eq(1).attr("href", data.view);
        }
    }

    updateContent(currentIndex);

    $("#main .page .next").click(function(e){
        e.preventDefault();
        currentIndex = (currentIndex + 1) % $slides.length;
        $("#main .frame .slide").css({
            transform: `translateX(${-732 * currentIndex}px)`,
            transition: "0.6s"
        });
        updateContent(currentIndex);
    });

    $("#main .page .prev").click(function(e){
        e.preventDefault();
        currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
        $("#main .frame .slide").css({
            transform: `translateX(${-732 * currentIndex}px)`,
            transition: "0.6s"
        });
        updateContent(currentIndex);
    });
});

$("#main .wrap article .botbox a").hover(
    function(){
        $(this).addClass("on");
    },
    function(){
        $(this).removeClass("on");
    }
)

    $(function(){
    const designData = {
        lunabelle: {
            title: "Lunabelle",
            process: "lunabelle.html",
            view: "Lunabelle/index.html",
            description: "루나벨은 신뢰감과 우아함을 동시에 전달하는 성형외과 웹사이트 콘셉트 디자인입니다. 4개의 페이지로 구성되었으며 HTML과 CSS로 제작되었습니다"
        },
        lunero: {
            title: "Lunero",
            process: "lunero.html",
            view: "lunero/index.html",
            description: "루네로는 세련되고 감성적인 무드를 담은 쇼핑 웹사이트 콘셉트 디자인입니다. html과 css로 제작되었습니다." 
        }
    };

    let currentIndex = 0;
    const $slides = $("#design .frame .slide li");
    const $article = $("#design article");

    function updateContent(index){
        const $current = $slides.eq(index);
        const name = $current.find("img").data("name");
        const data = designData[name];

        if (data) {
            $article.find("h3").fadeOut(200, function() {
                $(this).text(data.title).fadeIn(200);
            });
            $article.find("p").fadeOut(200, function() {
                $(this).text(data.description).fadeIn(200);
            });

            const $links = $article.find(".botbox a");
            $links.eq(0).attr("href", data.process);
            $links.eq(1).attr("href", data.view);
        }
    }

    updateContent(currentIndex);

    $("#design .page .next").click(function(e){
        e.preventDefault();
        currentIndex = (currentIndex + 1) % $slides.length;
        $("#design .frame .slide").css({
            transform: `translateX(${-732 * currentIndex}px)`,
            transition: "0.6s"
        });
        updateContent(currentIndex);
    });

    $("#design .page .prev").click(function(e){
        e.preventDefault();
        currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
        $("#design .frame .slide").css({
            transform: `translateX(${-732 * currentIndex}px)`,
            transition: "0.6s"
        });
        updateContent(currentIndex);
    });
});

$("#design .wrap article .botbox a").hover(
    function(){
        $(this).addClass("on");
    },
    function(){
        $(this).removeClass("on");
    }
)