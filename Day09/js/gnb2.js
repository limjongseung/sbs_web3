$(function(){
    $(".sub").slideUp();

    $(".gnb >li").on("mouseover",function(){
        $(this).find(".sub").slideDown(500).show();
    });
    $(".gnb >li").on("mouseleave",function(){
        $(this).find(".sub").slideUp(500);
    });
});