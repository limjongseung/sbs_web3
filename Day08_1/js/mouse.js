$(document).ready(function(){

$(".wrap").on("mouseenter",function(){
    $("p").css("background","skyblue");
});

$(".wrap").mouseenter(function(){
    $("p").css("background","skyblue");
});

$(".wrap").on("mouseleave",function(){
    $("p").css("background","yellow");
});

$(document).on("click",function(e){
    console.dir(e);
    //! dir 속성을 상세하게
});

$(document).on("mousemove",function(e){
    let x  = e.pageX; // 마우스 X축 좌표값
    let y  = e.pageY; // 마우스 Y축 좌표값
    $("h2").text("x: " + x + " y: " + y);
});

//^ 선택(포커스) 시 발생 메소드 = change()
// - change() : 선택한 입력 요소에 값이 새 값(value)으로 변경되고
//                   포커스가 다른 요소로 이동되었을 때 이벤트 발생

$(".site").on("change",function(){
    $(".txt").text($(this).val());
    $(".txt").css("color","cyan");
});


// $(":type") 으로 이벤트 등록
// $(":button") -> 제이쿼리 선택자 필터

$("input:button").on("click",function(){
    alert($(this).val() + "번을 클릭하셨습니다.")
});

//*==================================

$(".link_box .move").on("click",function(){
    return confirm($(this).text() + "하시겠습니까?");
});

//! return값을 주지 않으면 사용자의 의견과 무관하게 사이트로 이동하게 됨



































})