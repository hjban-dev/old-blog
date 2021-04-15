---
layout: post
title: level 1-25. 정수 제곱근 판별 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 정수 제곱근 판별
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12934>

## 문제

```
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
```

### 제한사항

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

#### 입출력 예

| n   | answer |
| --- | ------ |
| 121  | 144   |
| 3  | -1   |

입출력 예 설명

1. 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
2. 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

***

## 내가 한 풀이
```javascript
function solution(n) {
  var answer = Math.sqrt(n);
  var match = (answer == parseInt(answer));
  
  return (match) ? Math.pow(answer+1, 2) :  -1;
}
```
제곱근이라는 말 자체가 어려웠지, 자바스크립트 Math객체에 sqrt()메서드 사용했다. 정규표현식으로 소수점 찾고 싶었는데 한참 했는데도 안되서 ParseInt() 사용했다ㅠㅠ

***

## 다른사람 풀이

```javascript
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1
}
```

접근방식은 같음

## 배운점

난이도 쉬운 문제들은 대부분 다 풀고 이제 어려운 문제만 남아있어서 머리가 너무 복잡하다ㅠㅠ
