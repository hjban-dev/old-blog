---
layout: post
title: level 1-22. 자연수 뒤집어 배열로 만들기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 자연수 뒤집어 배열로 만들기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12932>

## 문제

```
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
```

### 제한사항

- n은 10,000,000,000이하인 자연수입니다.

#### 입출력 예

| n     | answer      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

입출력 예 설명

1. 1 + 2 + 3 = 6이므로 6을 return 하면 됩니다.
2. 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.


***

## 내가 한 풀이
```javascript
function solution(n) {
  var answer = (n + '').split('').reverse().map((curent)=> Number(curent));
  return answer;
}
```
바로 전에 풀었던 [21.자릿수 더하기](https://hjban-dev.github.io/algorithm/2020/01/08/level1-21-sum_of_number/) 랑 비슷한 문제였다. 전 문제 다른 사람의 풀이를 활용해서 쉽게 풀었다.

***

## 다른사람 풀이
```javascript
function solution(n) {
  var arr = [];

  do {
    arr.push(n%10);
    n = Math.floor(n/10);
  } while (n>0);

  return arr;
}
```
n 을 10으로 나눈 나머지를 배열에 넣고, 몫을 n에 다시 넣어줬다. n이 0보다 크다면 계속 반복.  
n의 값이 12345 일 때, n 을 10으로 나눈 나머지는 5, 몫은 1234.5 가 된다. 위 방법으로는 자료형 변경이 필요없다.

## 배운점

나누기 관련해서 살짝 고민했었지만 복잡해지기 싫고 앞에 배운 split()메서드 사용했는데 다시 배우고 간다.
