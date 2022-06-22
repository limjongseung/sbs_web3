/* 
     Event :  무엇가 일어나는 행우, 액션 - 2가지
     1. 사용자가 발생시키는 이벤트
     (click, mouseover,mouseleave, mousemove,  mousewheel. scroll)
     2.시스템이 발생시키는 이벤트
     (load, error)

     Event 연결방법 - 2가지
     1. DOM.onclick = ()=> {}  (익명함수를 대입하는 방식)
     같은 인수를 사용하게 된다면 중복이 안되고 나중에 쓴 한개만 적용
     덮어쓰기
     2. DOM.addEventListener("이벤트명",()=>{})(자제 내장함수를 이용하는 방법)
     추가 이벤트
*/

// const a = document.querySelector("a");
// console.dir(a)

/* a.onclick = () => {
    //window 생략가능
    console.log("You click");
}

a.onclick = ()=>{
    console.log("You Clicked Again");

}
 */



// a.addEventListener("click", ()=>{
//     console.log("You Clicked");
// });
// a.addEventListener("click", () =>{
//     console.log("You Clicked Again")
// });

//메소드 = 특정 객체에 종속되어있는 함수를 메소드라고 칭합니다.

// ====================================================

//이벤트 발생시 연결되는 인수로 전달되는 이벤트 객체

const a = document.querySelector("a");
a.addEventListener("click", e =>{
    e.preventDefault(); //상용구문 DOM의 본래 기능을 무시
    console.log("You Click");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", e =>{
   // console.log(e);
  // console.log(`현재 마우스 X축 :${e.pageX}`); //브라우저 기준
   //console.log(`현재 마우스 Y축 :${e.pageY}`); // 브라우저 기준
   console.log(`offsetX : ${e.offsetX}`);
   console.log(`offsetY : ${e.offsetY}`);
});

window.addEventListener("mousewheel", e =>{
    // console.log(e.deltaY);
    if(e.deltaY >0) console.log("Wheel Down!")
    if(e.deltaY <0) console.log("Wheel Up!")
});


















































