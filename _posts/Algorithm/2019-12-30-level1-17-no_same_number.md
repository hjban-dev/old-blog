---
layout: post
title: level 1-17. 같은 숫자는 싫어 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 같은 숫자는 싫어
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12906>

## 문제

```
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
```

### 제한사항

- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

#### 입출력 예

input | answer 
--------- | --------- 
[1,1,3,3,0,1,1] | [1,3,0,1]
[4,4,4,3,3] | [4,3]

***

## 내가 한 풀이
```javascript
function solution(input){
  var answer = [];

  input.map(function(currentValue, index, arr){
    arr[index] != arr[index+1] && answer.push(arr[index]);
  }) 

  return answer;
}
```
문제 보자 마자 for in 반복문을 떠올렸지만 내장메서드 사용하려고 계속 머리 굴림. map() 메서드 기억해냈지만 완벽한 기억이 아니라 몇 번이나 헤맸다.  
며칠 안풀었더니 또 굳은 머리...  
map() 메서드 사용해서 반복. 저번에 배웠던 짧은 연산자 사용해서 **arr[index] != arr[index+1]**이 참이면 **answer.push(arr[index])**실행.

***

## 다른사람 풀이
```javascript
function solution(input){
  return arr.filter((val,index) => val != arr[index+1]);
}
```
ㅋㅋㅋ..filter()메서드로 바로 return. 아름다운 코드.  

## 배운점

반복문 쓰지 말고 내장 메서드 사용해야 하는데 자꾸 반복문 먼저 떠오르고, 반복문이 떠오른 후에는 다른 생각이 나지 않는다...  
정규 표현식 관련 포스팅 시급. 코드 분석은 하는데 사용이 서툴다ㅠㅠ 예제 문제 반복 필수.

**array.`map`( function ( currentValue [, index] [, arr] ), thisValue )**  
:배열의 각 요소에 대해 제공된 함수를 순서대로 한 번 호출하여 새 배열을 작성  
(콜백함수에 들어가는 첫번째 매개변수는 처리하는 배열의 현재 요소)  

**array.`filter`( function ( currentValue [, index] [, arr] ), thisValue )**  
:테스트를 통과하는 요소를 걸러내어 배열로 true/false 반환, 없으면 빈 배열
