---
layout: post
title: level 1-5. 핸드폰 번호 가리기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: false
---
# level 1. 핸드폰 번호 가리기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12948>

## 문제

```
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
```

### 제한사항

  - s는 길이 4 이상, 20이하인 문자열입니다.

#### 입출력 예

phone_number | return 
--------- | ---------
01033334444 | *******4444
027778888 | *****8888

***

## 내가 한 풀이
```javascript
function solution(phone_number) {
  var answer = '';
  var phoneLength = phone_number.length;

  for(var i = 0; i<phoneLength; i++ ){
    answer += (i<phoneLength-4) ? '*' : phone_number[i]
  }
  return answer;
}
```
들어온 매개변수 phone_number의 글자 수를 체크하여 글자수에서 4를 뺀 수까지는 answer에 "*"를 삽입  
그렇지 않으면 매개변수의 i번째 수 삽입
지난 문제들을 참고하여 삼항 연산자를 짧게 사용
***

## 다른사람 풀이
```javascript
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}
```
정규식을 사용하여 뒤에서 4개의 숫자를 제외하고 * 로 변경

- \d : 숫자
- (?=) : 조건
- {} : 개수

반복문 필요 없이 정규식을 사용해서 깔끔 + 멋있게 작성... 크으...bb

```javascript
function solution(phone_number) {
  var result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return result;
}
```
수박수 문제에서 나왔던 `repeat()` 메서드. (까먹을뻔; reduce()랑 헷갈림;><)  
매개변수 phone_number의 수에서 4를 뺀 수를 반복 + phone_number를 뒤에서 부터 4개를 잘라 합침

```javascript
function solution(phone_number) {
  var result = ""
  
  for(var i=0;i< phone_number.length;i++){
    result += i < phone_number.length -4 ? "*" : phone_number.charAt(i);
  }  
  return result;
}
```
나와 아주 비슷한 접근법.  
지정된 인덱스의 문자를 리턴 `charAt()` 메서드를 사용 

***

## 배운점

대체로 비슷하게 반복문을 돌려서 조건 값을 구하는 문제는 이제...수월...
새로 얻은 지식들 잊지 말고 다른 문제에서 다시 활용해보자!

- 공부 한 내용 복습하고, 활용하도록 하자!
