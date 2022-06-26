

// const btn = document.querySelector(".list li"); // 한개만 잡힌다
const btns = document.querySelectorAll(".list li");
console.log(btns); //유사배열

/* for(let i = 0; i < btns.length; i ++){
    btns[i].addEventListener("click", e=> {
        e.preventDefault();
        console.log(i);
    });
};
 */

/* for (let btn of btns){
    btn.addEventListener("click", e=>{
        console.log(e.currentTarget);
    });
}; */

// forEach : 반복되는 대상, 순서값, 원본배열
// 실무에서는 원본 배열은 거의 안 쓰고 앞에 2개의 인수 값만 주로 사용
btns.forEach((btn, index)=>{
    btn.addEventListener("click", e=>{
        let isOn= e.currentTarget.classList.contains("on");
        // classList.contains = 해당 요소에 on있으면 true / 없으면 false = 판단 메소드
        if(isOn)return;
        /* 
          함수 내부의 값을 함수 바깥으로 배보내주는 것과
          코드가 실행되다가 return 마난명 강제로 실행 중지
          반복제어
        */
       for(let item of btns) item.classList.remove("on");
       btns[index].classList.add("on");
    });
});























