/* 
   연산자 : 측정 값을 도출하기 위해 연산을 처리하는 식별자 -3가지
   
   
   산술연산자: 수학적인 연산(+, -, /, *, % , ++ , --)
   % : 나누기 한 뒤에 남은 값 (나머지)
   ++ : 어떠한 값에서 1씩 증가
   -- : 어떠한 값에서 1씩 감소

   대입연산자: 특정 값을 대입하기 위한 연산(= , +=, -=, *= , /=)
   프로그래밍 언어에서 "=" 표시는 같다 라는 게 절대 아니고, 오른쪽의 값을 왼쪽에 대입한다.

   비교 연산자: 두 개 이상의 값을 서로 비교하기 위한 연산 (결과 값을 반환, true, false)
*/
//플러스 연산자
let num = 0;
num = num + 2;
console.log(num);

//마이너스 연산자
let num1 = 5;
num1 = num1 -3;
console.log(num1);

//곱하기 연산자
let num2 = 5;
num2 = num2 * 2;
console.log(num2);

//나누기 연산자
let num3 = 5;
num3 = num3/2
console.log(num3);

//나머지 연산자
let num4 = 5;
num4 = num4%2;
console.log(num4);

//대입연산자에서 산술 연사이랑 같이 결합이 되어 있는 복합대입연산
let num5 = 2;
//num5 = num5 + 2;
num5 += 2;
console.log(num5);


let num6  = 2;
// num6 = num6 +1;
num6++;  //num6에서 1씩 증가한 값
console.log(num6);

//후위연산: 초기 변수값을 먼저 사용하고 그 다음에 값을 증가(연산)
let plus =0;
console.log(plus);
plus = plus +1;

//전위연산 : 초기 연산값을 먼저 연산시키고 그 값을 사용
let plus2=0;
plus2 = plus2 +1;
console.log(plus2);


//비교연산자는 2가지 방식
// == : 2개면 값만 비교
// ===: 3개면 값 뿐만 아니라 자료형까지 같이 비교
//프로그래밍 언어에서 따옴표 안에 있는 text는 자료형으로 구분
let result = (2 == "2"); //숫자, 문자 자료형은 다르지만 값은 같아요
console.log(result);

let result2 = (2 ==="2"); // 숫자,문자 자료형까지 체크했을 때 값은 같으나, 자료형으로 틀리다
console.log(result2)

// == 2개는 자료형이 다르더라도 값이 같기 때문에 true를 반환해서 느슨한 비교연산
// ===3개는 값 뿐만 아니라 자료형까지 같아야 true를 반환합니다. 좀더 엄격한 연산이 되겠죠.

let num9 = "2";
num9 = num9 + 2;
console.log(num9)
















