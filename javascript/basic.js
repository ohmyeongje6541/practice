// TODO: 변수와 문자열
// myName 변수를 선언하고, 자신의 이름을 할당한다
// myName 변수를 출력한다
let myName = "정우영"
console.log(myName);


/* 출력 결과
정우영
*/

// TODO: 변수와 숫자 연산
// num1 변수에 10, num2 변수에 20을 할당한다
// 두 변수의 합을 sum 변수에 할당하여 출력한다
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);

/* 출력 결과
30
*/

// TODO: 비교 연산자
// 100이 50보다 큰지 비교 결과를 출력한다
// 문자열 "100"과 숫자 100을 엄격하게 비교한 결과를 출력한다
const number1 = 100;
const number2 = 50;
console.log(number1 > number2);

const char = "100";
const number3 = 100;
console.log(char === number3);

/* 출력 결과
true
false
*/

// TODO: typeof 연산자
// "hello", 2024, true의 자료형을 각각 출력한다
const str = "hello";
const num3 = 2024;
const boolean = "true";
console.log(typeof str);
console.log(typeof num3);
console.log(typeof boolean);

/* 출력 결과
string
number
boolean
*/

// TODO: 템플릿 리터럴
// productName은 "노트북", productPrice는 1200000으로 할당한다
// "상품: 노트북, 가격: 1,200,000원" 형식으로 출력한다
const productName = "노트북";
const productPrice = 1200000;
console.log(`상품: ${productName}, 가격: ${productPrice}원`);


/* 출력 결과
상품: 노트북, 가격: 1,200,000원
*/

// TODO: 논리 연산자
// isMember는 true, hasCoupon은 false로 할당한다
// isMember와 hasCoupon의 AND, OR 연산 결과를 각각 출력한다
const isMember = true;
const hasCoupon = false;
console.log(isMember && hasCoupon);
console.log(isMember || hasCoupon);

/* 출력 결과
false
true
*/

// TODO: 변수 재할당
// score 변수를 85로 선언하고 출력한다
// score 변수에 10을 더해 재할당하고 출력한다
let score = 85;
console.log(score);

score = 95;
console.log(score);
/* 출력 결과
85
95
*/

// TODO: 나머지 연산자
// 25를 4로 나눈 나머지를 출력한다
const num4 = 25;
const num5 = 4;
console.log(num4 % num5);
/* 출력 결과
1
*/

// TODO: null과 undefined
// 선언만 한 emptyValue 변수를 출력한다
// null을 할당한 user 변수를 출력한다
// 두 변수의 자료형을 각각 출력한다
let emptyValue;
console.log(emptyValue);
let user = null;
console.log(user); 
console.log(typeof undefined);
console.log(typeof null);

/* 출력 결과
undefined
null
undefined
object
*/
