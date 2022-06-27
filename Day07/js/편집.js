$(document).ready(function(){



    // alert($("h2").html());
    $("h2").html("<a href = '#'>html(변경후)</a>")

    // alert($("h1").text());
    $("h3").text("변경 후 텍스트 관련 메소드");


    //===============================================

    //attr("속성")/ attr("속성", "값") : 선택한 요소에 새 속성을 추가하거나
    //기존의 속성르 변경할 때 사용
    //removeAttr("속성") : 선택한 요소에서 기존의 속성을 삭제 할 때 사용

    $(".text").text($(".wrap img").attr("src"));  // 이미지 경로를 잡아줌

    $(".wrap img").attr("width","200"); // 속성사이즈 조절

    $(".box img").removeAttr("border"); //속성을 삭제


    //=================================================

    // addClassList()

    //addClass("클래스명") : 선택한 요소에 클래스 선택자를 생성
    //removeClass("클래스명") : 선택한 요소에 지정된 요소를 삭제합니다.

    $("#p1").addClass("aqua");
    $("#p2").removeClass("red");



    // ===============================================

    //vall() / val(값) : 입력요소에 있는 value 값을 가져오거나 변경할때 사용
    alert($("#user_name").val())
    $("#my_name").val($("#user_name").val());
    //id가 user_name인 요소의 value값을 my_name value 값에 세팅
    $("#user_name").val("임종승"); // value 값을 변경




























})