---
layout: post
title: level 1-11. 짝수와 홀수 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 짝수와 홀수
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12937>

## 문제

```
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
```

### 제한사항

  - num은 int 범위의 정수입니다.
  - 0은 짝수입니다.

#### 입출력 예

num | return 
--------- | ---------
3 | "Odd"
4 | "Even"

***

## 내가 한 풀이
```javascript
function solution(num) {
  var answer = num%2 == 0 ? "Even" : "Odd"
  return answer;
}
```
삼항연산자로 조건에 따른 answer 를 return

***

## 다른사람 풀이
접근방법은 나와 비슷해서 따로 적지 않는다.

## 배운점

가뿐.
