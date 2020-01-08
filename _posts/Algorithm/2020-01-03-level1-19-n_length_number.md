---
layout: post
title: level 1-19. x만큼 간격이 있는 n개의 숫자 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. x만큼 간격이 있는 n개의 숫자
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12954>

## 문제

```
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
```

### 제한사항

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

#### 입출력 예

| x   | n   | answer           |
| --- | --- | ---------------- |
| 2   | 5   | [2, 4, 6, 8, 10] |
| 4   | 3   | [4, 8, 12]       |
| -4  | 2   | [-4, -8]         |

***

## 내가 한 풀이
```javascript
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x*i)
  }
  return answer;
}
```
오래 생각할 필요 없이 반복문으로 돌려서 해결했다.  
x를 n번 반복

***

## 다른사람 풀이
```javascript
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
```
흠...들어온 n번 자리까지의 배열을 만들고, 내부를 x의 값으로 채웠다. ex)[ 2, 2, 2, 2, 2 ]  
그리고 map() 메서드로 인덱스 번호 순서대로 변경

```javascript
function solution(x, n) {
  return [...Array(n).keys()].map(v => (v + 1) * x);
}
```
흠...들어온 n번 자리까지의 배열을 만들고, keys() 메서드로 인덱스 값으로 채웠다. ex)[ 0, 1, 2, 3, 4 ]  
그리고 map() 메서드로 인덱스 번호 순서대로 변경

## 배운점


**arr.fill(value[, start[, end]])** - start부터 end까지 value 값으로 채운다
**arr.keys(obj)** - 배열의 각 인덱스를 키 값으로 가지는 새로운 Array 객체 반환
