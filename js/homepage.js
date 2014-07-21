// Site Fade-In
$(document).ready(function() {
//     $(document.body).hide().fadeIn('4000');


// Homepage Logo Flip
    var sOffset = $(".flip-container").offset().top;  //find top of logo
    var shareheight = $(".flip-container").height(); //find height of logo
    var $document = $(document);
    var $flipper = $(".flip-container .flipper");

    $(window).scroll(function() {
        var scrollYpos = $document.scrollTop();
        var direction = scrollYpos > 0? "180deg" : "0deg"; //questionmark is shorthand if

        $flipper.css("-webkit-transform", "rotateY("+direction+")");


        var $nav = $(".project-nav");
        var $textLogo = $(".text-logo");
        var $footer = $("#contact");

        var posFooter = $footer.offset().top;  //find top of footer
        var posNav = $nav.offset().top + 350;  //find top of nav, and compensate for body of nav (260)

        if (posNav > posFooter){
            $(".project-nav, .text-logo").stop(true, true).animate({opacity: 0}, 100);
        } else {
            $(".project-nav, .text-logo").stop(true, true).animate({opacity: 1}, 100);
        }
    });

});
