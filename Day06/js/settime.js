 
/* 
   setTimeout: 일정 시간 뒤에 특정 코드를 호출 (지연)
   setInterval: 일정 시간 간격마다 특정 코드를 반복(반복)
   clearIntercal: setInterval의 반복을 해제 (해제)
*/


const box = document.querySelector(".box");
box.addEventListener("click",e =>{


    setTimeout(()=>{
        console.log("clicked!");
    },3000); // 인수가 2개 = 익명함수, 지연될 시간, 1000 = 1s
});


let timer = null; // 전역함수 선언
box.addEventListener("mouseenter",e=>{
    timer = setInterval(()=>{
        console.log("mouse Entered")
    }, 1000); //두개의 인수가 들어감 = 익명함수, 반복된 시간
});

box.addEventListener("mouseleave", e=>{
    console.log("mouse Leave!");
    clearInterval(timer);
});

// ==============================================

// this

/* for (let i =0 ; i<3 ; i ++){
    console.log(this);
};

setTimeout (()=>{
    console.log(this);
},3000);

if(true){
    console.log(this);
};
 */
//es5
// 해당 이벤트요소를 가리킴
const btn = document.querySelector("button");
btn.addEventListener("click", function(e){
    console.log(this);
    // = e.curentTarget, e.target
});
/* const btn = document.querySelector("button");
btn.addEventListener("click", function(e){
    console.log(this);
    // = e.curentTarget, e.target
}.bind()); */
//es6
//window객체를 가리킴
btn.addEventListener("click", e =>{
    console.log(this);
})











































