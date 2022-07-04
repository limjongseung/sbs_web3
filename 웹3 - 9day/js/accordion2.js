

$(function(){
    $("dt ,dd").click(function(){
        $(this).toggleClass("open");
        if($(this).hasClass("open")){
            $("dt").not(this).removeClass("open");
        };

    });
});




























