---
layout: post
title: Javascript 헷갈리는 개념과 예제 정리
category: Javascript
tags: [Javascript, Exercise]
comments: true
---

# Javascript 헷갈리는 개념 예제 정리
> [출처] (https://helloworldjavascript.net/)

#### 변수
```javascript
let seven;
const eight; // 다른 값을 대입 불가 (상수)
```
#### isNaN() 메서드
```javascript
const thisIsNan = NaN;

// 주의! 이렇게 하면 안 됩니다.
thisIsNan === NaN; // false

// 이렇게 해야 합니다.
Number.isNaN(thisIsNan); // true
Object.is(thisIsNan, NaN); // true
```
#### isFinite() 메서드
```javascript
Number.isFinite(1); //true
Number.isFinite(Infinity); // false
```
#### parseInt() 메서드 : 문자열을 숫자로
```javascript
parseInt('123'); // 123
parseInt('110', 2); // 6 (문자열을 2진수로 간주한다.)

parseInt('hello'); // NaN
```
#### toString() 메서드 : 숫자를 문자로
```javascript
(12345).toString(); // '12345'
(12345).toLocaleString(); // '12,345'
(1.2345).toFixed(2); // '1.23'
```
#### 템플릿 리터럴 (Template Literal) : 여러 줄로 이루어진 문자열도 표현 가능
```javascript
const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}!`;

`hello
world!
`
```
#### string 객체의 속성과 메서드
```javascript
// 문자열의 길이 알아내기
'hello'.length; // 5

// 여러 문자열 연결하기
'hello'.concat('fun', 'javascript'); // 'hellofunjavascript'

// 특정 문자열을 반복하는 새 문자열 생성하기
'*'.repeat(3); // '***'

// 특정 문자열이 포함되어 있는지 확인하기
'hello javascript'.includes('hello'); // true
'hello javascript'.startsWith('he'); // true
'hello javascript'.endsWith('ript'); // true
'hello javascript'.indexOf('java'); // 6

// 문자열의 특정 부분을 바꾼 새 문자열 생성하기
'hello javascript'.replace('java', 'type'); // 'hello typescript'

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello'.slice(2, 4); // 'll'

// 좌우 공백문자를 제거한 새 문자열 생성하기
'   hello  '.trim(); // 'hello'
'   hello  '.trimLeft(); // 'hello  '
'   hello  '.trimRight(); // '   hello'

// 좌우 공백문자를 추가한 새 문자열 생성하기
'hello'.padStart(8); // '   hello'
'hello'.padEnd(8); // 'hello   '

// 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기
'hello!fun!javavscript'.split('!'); // ['hello', 'fun', 'javascript']
'hello'.split(''); // ['h', 'e', 'l', 'l', 'o']

// 모든 문자를 소문자, 혹은 대문자로 변환한 새 문자열 생성하기
'Hello JavaScript'.toLowerCase(); // 'hello javascript'
'Hello JavaScript'.toUpperCase(); // 'HELLO JAVASCRIPT'
```
JavaScript에서는 아래의 값들은 모두 falsy이고, 이를 제외한 모든 값들은 truthy입니다.
- false
- null
- undefined
- 0
- NaN
- ''

#### 다른 타입의 값을 진리값으로 변환
```javascript
Boolean('hello'); // true
```
null과 undefined : 명시적으로 부재를 나타내고 싶다면 null을 사용
(null : 객체가 없음)
```javascript
typeof null // 'object'
typeof undefined // 'undefined'

let foo; // 값을 대입한 적 없음
let bar = undefined; // 값을 대입함
```
#### Null Check
```javascript
input !== null && input !== undefined;

input === null || input === undefined;
```
#### 스코프 (Scope) : 변수는 코드의 일정 범위 안에서만 유효
```javascript
const five = 5; // 최상위 스코프(top-level scope) 혹은 전역 스코프(global scope)
function add1(x) {
  function add2(y) {
    return x + y;
  }
  return add2(five);
}
add1(3); // 8 : 스코프 연쇄(scope chain)
```
#### 배열의 반복문
```javascript
const arr = [1, 2, 3, 4, 5];

arr.forEach((item, index) => {
  console.log(`배열의 ${index + 1} 번째 요소는 ${item} 입니다.`);
});

// for of 는 es6에서 도입
for (let item of arr) {
  console.log(`현재 요소는 ${item} 입니다.`);
};
```
#### 배열 메서드
- from(), isArray(), of()
- fill(), push(), pop(), unshift(), shiff(), splice(), reverse(), sort()
- slice(), map(), concat(), reduce(), filter(), join()
- indexOf(), lastIndexOf(), find(), findIndex()
- includes(), every(), some()

#### map() 메서드 매개변수 : (누적값, 현재 요소, 인덱스, 배열)
```javascript
arr.map((item, index, array) => {
  return item * index;
}); // [0, 2, 6, 12, 20]
```
