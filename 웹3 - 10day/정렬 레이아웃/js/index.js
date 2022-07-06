
//*jquery   ->     $(document).ready(functoin(){})
window.addEventListener("load",function(){
    new Isotope("section",{
        //첫번째 인수는 정렬하는 타겟에 친부모 선택, 객체타입
    itemSelector: "article",   //배치하고 싶은 요소
    columnWidth:"article",   // itemSelector 선택자 요소를 지정하면 자동으로 width 값 계산
    transitionDuration: "0.5s", //위 & 아래 움직일 때 모션
    });  

    const btns = document.querySelectorAll("#main .sorting_btn li");
    btns.forEach((btn,index)=>{
        btn.addEventListener("click",function(e){
            e.preventDefault();
            for(let btn of btns)btn.classList.remove("on");
            e.currentTarget.classList.add("on");
            const btn_a = e.currentTarget.querySelector("a");
            const a_href = btn_a.getAttribute("href");
            console.log(a_href);

            grid.arrange({filter: a_href});

        });
    });




});


























