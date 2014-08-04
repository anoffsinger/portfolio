$(document).ready(function() {

// Logo Flip
    var sOffset = $(".flip-container").offset().top;  //find top of logo
    var shareheight = $(".flip-container").height(); //find height of logo
    var $document = $(document);
    var $flipper = $(".flip-container .flipper");

    $(window).scroll(function() {
        var scrollYpos = $document.scrollTop();
        var direction = scrollYpos > 0? "180deg" : "0deg"; //questionmark is shorthand if

        $flipper.css("-webkit-transform", "rotateY("+direction+")");
    });

// See More
    $(".project-list-all").hide();

    $(".button-see-all").click(function() {
        $(".project-list-all").slideToggle();
        $(this).text(function(i, text){
            return text === "See More" ? "See Less" : "See More";
        })
    });

    if (window.location.hash === "#work") {
        $(".project-list-all").slideToggle();
        $(".button-see-all").text(function(i, text){
            return text === "See More" ? "See Less" : "See More";
        })
    }
});
