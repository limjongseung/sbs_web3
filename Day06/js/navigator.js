

/* 
     navigator
*/


const version = navigator.userAgent;
console.log(version);

const isEdg = /edg/i.test(version);
const isIE  = /trident/i.test(version);

if (isEdg){
    console.log("Edg 브라우저로 접속했습니다.");
    document.querySelector("body").style.backgroundColor = "tomato";
}
if(isIE){
    console.log("IE브라우저로 접속했습니다.");
    document.querySelector("body").style.backgroundColor = "magenta";
    alert("IE는 지원이 종료된 브라우저 입니다. 크롬 브라우저를 이용해 주세요.");
    location.href = "https://www.google.co.kr/chrome/?brand=YTUH&gclid=EAIaIQobChMI--T5p4PG-AIVzNlMAh2YogyZEAAYASAAEgLTIPD_BwE&gclsrc=aw.ds" ;
}
if(!isEdg && !isIE){
    console.log("Chrome브라우저로 접속했습니다.");
    document.querySelector("body").style.backgroundColor =
    "cyan";
}



















