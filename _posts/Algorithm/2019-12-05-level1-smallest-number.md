---
layout: post
title: level 1. 제일 작은 수 제거하기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: false
---
# level 1. 제일 작은 수 제거하기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12935>

## 문제

```
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
```

### 제한사항

  - arr은 길이 1 이상인 배열입니다.
  - 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

#### 입출력 예

arr | return 
--------- | ---------
[4,3,2,1] | [4,3,2]
[10] | [-1]
[3,1,2,4] | [3,2,4]

***

## 내가 한 풀이
```javascript
function solution(input) {
  if(input.length > 1){
    var min = Math.min(...input);
    input.splice(input.indexOf(min),1); 
  }else{
    input.splice(0,1,-1); 
  }
     
  return input;
}
```
매개변수 input의 개수가 1보다 크다면 `Math.min()` 메서드로 매개변수의 제일 작은 수의 인덱스 값이 들어 있는 변수 min 생성  
Array의 배열의 항목을 추가 / 제거하고 제거 된 항목을 반환하는 `splice()` 메서드를 사용하여 변수 min의 인덱스 값에서 1개를 제거 후 반환  
  
매개변수 input의 개수가 1이하 라면 index 0번 부터 1개를 자르고 -1을 넣어서 반환
***

## 다른사람 풀이
```javascript
function solution(input) {
  input.splice(input.indexOf(Math.min(...input)),1);
  if(arr.length<1) return[-1];
  return input;
}
```
접근법은 같다. 차이점은 위 코드는 변수 지정 없이 splice() 메서드 바로 실행하고, 처음부터 조건을 돌리지 않고 math.min() 메서드 실행하게 하였다.

***

## 배운점

이 문제는 이전에 풀고 후에 포스팅을 하는 중인데, 그 때 어떻게 풀었는지 잘 기억이 안난다...  
Math.min() 메서드에 배열을 넣을때는 앞에 ... 을 붙여주면 되는데 이걸 어떻게 기억하고 있었지...?;  
복습하자..

- 공부 한 내용 복습하고, 활용하도록 하자!
- 코드를 간결하게 쓰는 시도를 해보자.
- es6 문법 공부를 하자.
