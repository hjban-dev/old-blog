---
layout: post
title: level 1. 약수의 합 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: false
---
# level 1. 약수의 합
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12928>

## 문제

```
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
```

### 제한사항

  - n은 0 이상 3000이하인 정수입니다.

#### 입출력 예

n | return 
--------- | ---------
12 | 28
5 | 6

입출력 예 설명  
  1. 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
  1. 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

***

## 내가 한 풀이
```javascript
function solution(n) {
  var answer = 0;

  for(var i=1; i<n+1; i++) {
    if( (n%i) == 0){
      answer += i;
    }
  }
  return answer;
}
```
매개변수를 for 반복문을 실행하여 n을 1부터 n까지의 수로 나눠서 나머지가 0이 되는요소들의 합을 구한다.

***

## 다른사람 풀이
```javascript
let solution = n => {
  let answer = 0,
    i = 1,
    j = n%2 == 0 ? 1 : 2;

  for(i; i<n; i=i+j) if(n%i == 0) answer += i;
  return answer+n;
}
```
이건 나랑 비슷하게 접근 방법이지만 es6 문법과 코드를 사용하여 코드를 간결하게 만들어둬서 참고용으로 가져왔다.

```javascript
function solution(n, a=0, b=0) {
  return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}
```
이건 봐도 모르겠따... 재귀함수 라는데.. 아직 갈길이 멀었다;ㅎㅎ

***

## 배운점

저번 문제와 비슷하게 반복문을 돌려서 조건 값을 구하는 문제는 비교적 수월하다  

- 코드를 간결하게 쓰는 습관을 들이자.
- es6 문법 공부를 하자