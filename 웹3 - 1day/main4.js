// j-Query

/* 
  자바스크립트 기본 언어들의 코드 길이가 너무 길어 이걸 짧게하고 싶어서 짧게 쓰는 코드를 발명했고
  그 코드들만 있으면 자바스크립트를 짧게 쓸 수 가있다고 해서 그걸 대중들에게 공개햇습니다.
  jQuery 라는 이름을 붙여서,,, 그게 바로 제이쿼리 입니다.
  이러한 자바스크립트를 짧게 쓸 수 있는 코드들을 "라이브러리" 라고 부릅니다.


  uncontpressed : 원본 파일 버전
  minified = 원본파일 코드의 공백을 제거한 버전 (용량 작음)
  slim = 몇가지 기능이 빠진 버전
  slim minified = 몇가지 기능이 빠진 코드의 공백을 제거한 버전
*/



//document.getElementById("hello").innerHTML = "반갑습니다.";

//document.querySelector("#hello") // html 맨위에 첫번째 한개만 찾아줍니다.
document.querySelectorAll("#hello")// html 문서의 전체 id를 찾아줍니다.

//제이쿼리 선택자는 CSS셀렉터
//체인기법
//$("#hello").html("안녕?!");
//$("#hello").css("color","hotpink")
$("#hello").attr("href","https://www.naver.com")



















