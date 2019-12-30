---
layout: post
title: level 1-15. 나누어 떨어지는 숫자 배열 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 나누어 떨어지는 숫자 배열
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12918>

## 문제

```
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
```

### 제한사항

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

#### 입출력 예

| arr           | divisior | return        |
| ------------- | -------- | ------------- |
| [5, 9, 7, 10] | 5        | [5, 10]       |
| [2, 36, 1, 3] | 1        | [1, 2, 3, 36] |
| [3, 2, 6]     | 10       | [-1]          |

입출력 예 설명

1. arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
2. arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
1. 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

***

## 내가 한 풀이
```javascript
function solution(arr, divisor) {
  var answer = [];
  for(var i in arr){
    arr[i] % divisor == 0 ? answer.push(arr[i]) : '';
  }
  
  if(answer.length > 0){
    answer.sort(function(a, b){ return a - b;}); 
  }else{
    answer.push(-1);
  }
  
  return answer;
}
```
반복문으로 arr의 요소 각각을 divisor로 나누어 나머지가 0 이라면 answer에 push() 메서드로 넣는다.  
나온 결과 answer의 요소가 있다면 오름차순으로 정렬, 없으면 -1을 추가 
***

## 다른사람 풀이
```javascript
function solution(arr, divisor) {
  var answer = [];
  arr.map((o) => {
    o % divisor === 0 && answer.push(o);
  })
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
```
`map()` 메서드로 새 배열를 만들었다. `&&` 짧은 조건문으로 왼쪽 변이 참이면 오른쪽 변을 실행한다.  
삼항연산자로 return 값 추출 
```javascript
function solution(arr, divisor) {
  var answer = arr.filter(v => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
```
위와 같은 방법이지만, `filter()` 메서드를 사용했다.

## 배운점

짧은 조건문

- `||` : 조건이 거짓일 때 실행
- `&&` : 조건이 참일 때 실행

array.`map`( function ( currentValue [, index] [, arr] ), thisValue )  
:배열의 각 요소에 대해 제공된 함수를 순서대로 한 번 호출하여 새 배열을 작성  
(콜백함수에 들어가는 첫번째 매개변수는 처리하는 배열의 현재 요소)  

array.`filter`( function ( currentValue [, index] [, arr] ), thisValue )  
:테스트를 통과하는 요소를 걸러내어 배열로 true/false 반환, 없으면 빈 배열
