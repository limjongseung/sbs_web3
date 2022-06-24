



/* 
    키보드 이벤트
    keydown : 특정키를 누르고 있을때 (눌러지는 순간 실행)
    keyup : 특정키를 누르다가 손을 땔 떄 (떼는 순간 실행)
    keypress :  키를 누르고 있을 때 (문자 관련키만 동작)
    - alt, ctrl, shift, 화살표키 등등 작동하지 않습니다.
*/

//키보드 이벤트는 무조건 window선택자를 잡어서 연결해야 합니다.

/* window.addEventListener("keypress",e=>{
    console.log("keypress");
});
 */

/* window.addEventListener("keydown",e=>{
    console.log("keydown");
}); */

/* window.addEventListener("keyup",e=>{
    console.log("keyup");
});
 */

/* window.addEventListener("keyup",e=>{
    // console.log(e);
    const keyName = e.key;
    console.log(`${keyName} 키를 눌렀습니다.`);
}); */


document.addEventListener("keydown",e=>{
    // console.log(e.keyCode);
    let key = e.keyCode;
    let box = document.querySelector(".box");
    let y = parseInt(box.style.top || 10); //반환된 값에 10진법으로 변환
    let x = parseInt(box.style.left|| 10);


    if(key ===37){ //left
        box.style.left = x - 10 + "px";
    } else if(key ===38){//top
        box.style.top = y -10 + "px";
    } else if (key ===39){//right
        box.style.left = x +10 +"px";
    } else if (key ===40 ){//bottom
        box.style.top = y +10 + "px" ;
    }
});































