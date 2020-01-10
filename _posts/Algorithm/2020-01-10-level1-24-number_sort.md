---
layout: post
title: level 1-24. 정수 내림차순으로 배치하기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 정수 내림차순으로 배치하기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12933>

## 문제

```
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
```

### 제한사항

- n은 1이상 8000000000 이하인 자연수입니다.

#### 입출력 예

| n   | answer |
| --- | ------ |
| 118372  | 873211   |

***

## 내가 한 풀이
```javascript
function solution(n) {
  const answer = (n+'').split('').sort( (a, b) => b - a ).join('');
  return parseInt(answer); 
}
```
이것도 전 포스팅인 [21.자릿수 더하기](https://hjban-dev.github.io/algorithm/2020/01/08/level1-21-sum_of_number/), [22.자연수 뒤집어 배열로 만들기](https://hjban-dev.github.io/algorithm/2020/01/08/level1-22-arr_of_number/), [23.자연수 뒤집어 배열로 만들기](https://hjban-dev.github.io/algorithm/2020/01/08/level1-23-hashad/) 랑 비슷한 문제였다. 

***

## 다른사람 풀이
```javascript
function solution(n) {
  return parseInt((n+"").split("").sort().reverse().join(""));
}
```
한글자의 숫자뿐이라 굳이 sort() 내부 함수 쓸 필요없이 sort()와 reverse() 메서드 실행.

## 배운점

다 21-24번이 비슷한 문제였다.
