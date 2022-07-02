$(document).ready(function(){
    

$(".openModal").on("click",function(){
    $("#modal").show();
    $("body").append("<div class='blackOn'></div>")
});

$("body").on("click",function(e){
    if(e.target.className === "close" || e.target.className === "blackOn"){
        $(".blackOn").hide();
        $("#modal").hide();
    };

});


















    
})