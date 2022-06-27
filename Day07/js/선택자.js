
$(document).ready(function(){

     // 전체 선택자 : 모든 요소 (태그)를 선택함
    //  $("*").css("border","1px solid red");


     //아이디 선택자 : id속성에 지정된 값을 가진 요소를 선택
     $("#title").css("background","gray").css("color","#fff");

     //클래스 선택자 : class 속성에 지정된 값을 가진 요소를 모두 선택
     $(".content").css("background","blue");

     //요소 선택자 : 지정된  요소명과 일치하는 모든 요소를 선택
     $("h1").css("border","1px solid red");

    //  그룹선택자 : 인수에 지정된 모든 요소를 선택
     $("h1, h3").css("color","purple");

    //  =======================================================

    // 2. 부모, 자식 요소 선택
    //부모요소 선택자 : 선택한 요소의 친부모 요소만 선택
    $(".second").parent().css("border","1px solid red");    

    //상위 요소 선택자 : 선택한 요소의 모든 상위 요소를 선택
    // $(".wrap").parents().css("background","gray");
    // 생각보다 잘 쓰이지 않습니다.

    // 하위 요소 선택자 : 자식과 하위를 모두 포함
    // $(".wrap li").css("color","green");
    $(".wrap").children().css("background","yellow");

    // 친자식 요소 선택자 : 친자식만 선택
    $(".wrap > li").css("color","blue");

    //  =====================================================


    //3. 형제  요소 선택
    // 형제 (이전) 선택자 ; 선택한 요소의 이전 요소 1개(첫번째) 선택
    $(".container").prev().css("color","tomato");

    //형제(이전)  선택자2: 선택한 요소의 이전 모든 요소 선택
    $(".container").prevAll().css("border", "5px solid red");   


    // 형제 (다음)선택자 : 선택한 요소의 이후 요소 1개 (첫번째) 선택
    $(".container").next().css("color","aqua");

    //형재(다음)선택자 : 선택한 요소의 이후 모든 요소 선택
    $(".container").nextAll().css("border","5px solid orange");

    //모든 형제 요소 선택 : 모든 형제 요소 선택(선택된 요소 제외)
        $(".container").siblings().css("background","gray");

     // ========================================

     // 4. 위치 선택자

     // 첫번째 요소 선택1.
    //  $(".menu li:first").css("color","red"); // 선택자 인수로 넣어서 사용
    $(".menu li").first().css("color","orange"); // 메소드로 사용
    
    // 마지막요소 선택
    // $(".menu li:last").css("color", "blue");
    $(".menu li ").last().css("color","tomato");

    //==================================

    //5. 탐색 선택자
    // index 기준으로 선택
    // 첫번째는 0부터 시작합니다.
    // 지정한 인텍스가 참조하는 요소만 선택
    $(".search li:eq(3)").css("background","pink"); 

    // 지정한 인덱스보다 작은 요소만 선택(less than)
    $(".search li:lt(3)").css("background","orange");

    // 지정한 인덱스보다 큰 요소만 선택(reater tahn)
    $(".search li:gt(3)").css("background", "tomato");

    $(".search li:eq(0)").css("background","magenta");

    
     
























})





































