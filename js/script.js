$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750)
    });

    $(".items").isotope({
        filter:"*",
        animationOptions: {
            duration: 1500,
            easing: "linear", 
            queue: false
        }
    });


});


$(document).ready(function() {

    var scroll_start = 0;
    var startchange = $("#skills");
    var offset = startchange.offset();

    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(document).scrollTop();
            if(scroll_start > offset.top - 500) {
                $("#navigation").css('background-color', 'rgba(9, 33, 56, 0.9)');
            } else {
                $('#navigation').css('background-color', '#092138');
            }
        });
    }
   
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Graphic Designer.", "UI/UX Designer." , "Web Designer."],
        typeSpeed: 70,
        loop: true,
        backSpeed: 25,
        startDelay: 1000, 
        showCursor: false
        
    });


    $('.carousel').owlCarousel({
        loop:true,
        items: 4,
        nav: true,  
        dots: false,
        navText: ["<img src='../img/icons/prev.png'>","<img src='../img/icons/next.png'>"],  
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:5
            }
        }
    });

    $('.video-carousel').owlCarousel({
        items:1,
        margin:10,
        video:true,
        nav: false,  
        dots: true,
        lazyLoad:false,
        merge:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function() {


        
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: "easeInOut",
                barColor: "#ff636e",
                trackColor: false,
                scaleColor: false,
                lineWidth: 10,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find(".percent").text(Math.round(percent));
                }
             });

        }
    });


    $("[data-fancybox]").fancybox();

       
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: "linear", 
                queue: false
            }
        });

        return false;

    });



});