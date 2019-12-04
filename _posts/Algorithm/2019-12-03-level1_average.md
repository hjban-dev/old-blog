---
layout: post
title: level 1. 평균 구하기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: false
---
# level 1. 평균 구하기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12944>

## 문제

```
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
```

### 제한사항

  - arr은 길이 1 이상, 100 이하인 배열입니다.
  - arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

#### 입출력 예

arr | return 
--------- | ---------
[1,2,3,4] | 2.5
[5,5] | 5

## 내가 한 풀이
```javascript
function solution(arr) {
  var answer = 0;
  for(var i in arr){
    answer += arr[i];
  }
  answer /= arr.length;
  return answer;
}
```
매개변수로 들어온 배열을 for in 반복문을 실행하여 요소들의 합을 구하고  
length로 나눈다.

## 다른사람 풀이
```javascript
function solution(arr){
  return arr.reduce((a, b) => a + b) / arr.length;
}
```
Array 의 메서드 reduce()를 사용했다. ( es6를 사용하여 너무나도 간결하고 예쁘게...)  
분석하자면 a,b를 더하여 단일 값으로 재배열 후 length로 나눔. (reduce()는 왼쪽에서 오른쪽으로 실행하며 단일 값으로 재배열)  

## 배운점

반복문을 돌려서 조건 값을 구하는 문제는 비교적 수월했다.  
하지만 이번에도...`javascript 자체 내장 함수에 대해 더 공부하고 또 공부하고 복습하자.`  
  
저번에 for in 코드는 성능을 하락시키는 코드로, 캐쉬 방식보다 30프로 가량 늦게 측정된다는 댓글을 보고 공부중에, es6 에서 for of 반복문을 찾았다.  

```javascript
let myString = "test";

// return 0, 1, 2, 3
for (let i in myString) {
  console.log(i);
}

// return t, e, s, t
for (let i of myString) {
  console.log(i);
}
```

- for of 는 문자열도 다룰 수 있음
- 내부에 [Symbol.iterator]를 가진 객체라면 어떤 객체든 순회할 수 있음
- 즉 es6 에서 지원하는 모든 컬렉션을 대상으로 사용할 수 있음