$(document).ready(function(){


// alert($("h2").html());
$("h2").html("<a href = '#'>html(변경후)</a>");

// alert($("h1").text());
$("h3").text("변경후 텍스트 관련 메서드");

//*=======================================================

//attr("속성") / attr("속성","값") : 선택한 요소에 새 속서을 추가하거나 기존의 속성으로 변경할 때 사용
//removeAttr("속성") : 선택한 요소에 기존의 속서을 삭제 할때 사용

$(".text").text($(".wrap img").attr("src")); // 이미지 경로를 잡아줌

$(".wrap img").attr("width","200"); //속성사이즈 조절

$(".box img").removeAttr("border"); //속성을 삭제

//*========================================================

//addClassList()

//addClass("클래스 명") : 선택한 요소에 클래스 선택자를 생성
//removeClass("클래스 명") : 선택한 요소에 지정된 요소를 삭제합니다.

$("#p1").addClass("aqua");
$("#p2").addClass("red");


//*========================================================

//val() / val(값)  : 입역요소에 있는 value 값을 가져오거나 변경할때 사용
// alert($("#user_name").val());
$("#my_name").val($("#user_name").val());

//id 가 user_name인 요소의 value값을 my_name value 값에 세팅
$("#user_name").val("임종승");

//*===============================================================

//요소 편집 메소드
// - 선택한 요소를 복제하거나 새 요소를 생성하는 메소드
// - 복제하거나 새로 생산한 요소를 의도한 위치로 삽입

$(".myList").before("<li>새로운 내용 추가1</li>");  //이전 형제 태그로 생성
$(".myList").after("<li>새로운 내용 추가2</li>"); //이후 형제 태그로 생성

//*=========================================================

//! prepend      append    ->    자식으로 생성
$(".List").prepend("<li>새로용 내용 추가3</li>"); //첫번째 자식으로 태그 생성
$(".List").append("<li>새로운 내용 추가4</li>");  //마지막 자식으로 태그 생성

//*=====================================================

// -empty()  : 선택한 요소의 하위 내용들을 모두 삭제 (선택한 요소는 삭제 X)
// -remove() : 선택한 요소를 삭제(상위 요소가 삭제되면서 하위도 삭제됨)


$(".line1").empty();
$(".line2").remove();












})