
$(".slider").slick({
    infinite:true,    //^ 무한반복 옵션 true / false
    speed: 1000, //^다음슬라이드가 나오는 데 까지 걸리는 시간
    autoplay : true, //^ 자동재생
    puaseOnHover: true, //^슬라이드에 마우스 호버하면 자동재생 멈춤 설정
    autoplaySpeed : 3000,  // ^ 자동재생 속도
    vertical : false, //^세로방향 슬라이드 옵션
    draggable: false, //^ 드래그 슬라이드 옵션
    dots:true, //^ 슬라이드 페이지네이션옵션
    arrows:true,  //previous &  next 버튼옵션
    slidesToShow: 4,  // 한화면에 보여질 슬라이드 갯수
    slideToScroll: 4, //한번에 슬라이드가 되는 콘텐츠 개수
    fade:false, // 페이드 효과 옵션(slideToShow의 개수가 1개 일때만 사용가능)
    responsive:[//^반응형 슬라이드 옵션
    {
        breakpoint : 1400, // 화면 사이즈 1400px
        settings: {
            slidesToShow: 3,//한 화면에 보여질 슬라이드 갯수
            slidesToScroll: 3 //한번에 슬라이드가 되는 콘텐츠 개수
        }
    },
    {
        breakpoint : 1000, // 화면 사이즈 1000px
        settings: {
            slidesToShow: 2,//한 화면에 보여질 슬라이드 갯수
            slidesToScroll: 2 //한번에 슬라이드가 되는 콘텐츠 개수
        }
    },
    {
        breakpoint : 700, // 화면 사이즈 700px
        settings: {
            slidesToShow: 1,//한 화면에 보여질 슬라이드 갯수
            slidesToScroll: 1 //한번에 슬라이드가 되는 콘텐츠 개수
        }
    }

]

})


















