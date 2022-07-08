
$(function(){
    $(".glass").draggable({
         stop:function(){
            $(this).removeClass("start");
            $(this).addClass("stop");
         },
         start:function(){
            $(this).removeClass("stop");
            $(this).addClass("start");
         }
    });
});



















