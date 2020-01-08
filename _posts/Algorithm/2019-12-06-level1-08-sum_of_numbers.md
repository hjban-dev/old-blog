---
layout: post
title: level 1-8. 두 정수 사이의 합 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 두 정수 사이의 합
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12912>

## 문제

```
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
```

### 제한사항

  - a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
  - a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
  - a와 b의 대소관계는 정해져있지 않습니다.

#### 입출력 예

a | b | return 
--------- | --------- | ---------
3 | 5 | 12
3 | 3 | 3
5 | 3 | 12

***

## 내가 한 풀이
```javascript
function solution(a, b) {
  var number = [a, b].sort(function(a, b) {return a - b});

  var answer = 0;
  var gap = Math.abs(number[1] - number[0]);
  
  var i = 0;
  do{
    answer += (number[0]+i);
    i++;
  }
  while(i <= gap)
  
  return answer;
}
```
변수 number는 매개변수로 들어온 a,b 를 배열로 만들고, `sort()` 메서드를 사용하여 오름차순 순으로 배열한 후 a 값에서 b를 뺀 값을 넣는다.  
  
변수 gap 은 오름차순으로 정렬한 number 배열의 두 수 사이의 절댓값.  
  
do while 반복문 사용으로 i는 0부터 gap의 값까지 반복을 돈다.
반복을 돌 때 마다 number[0] 즉, 첫번째 배열의 값과 1씩 늘어난 i의 값을 더하여 answer의 안에 넣어준다.

***

## 다른사람 풀이
```javascript
function solution(a, b) {
  return (a+b)*(Math.abs(b-a)+1)/2;
}
```
a와 b를 더한 값에 a에서 b를 뺀 값의 절대값에 1을 더한값을 곱하고 2로 나눴다...?
저게 되나 싶었는데 문제들에 전부 적용된다.
진짜 수학으로 박살냄...ㅎ 오져버림...

```javascript
function solution(a, b, answer = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;
  return answer;
}
```
처음부터 answer 라는 변수를 0으로 넣어주었다.
반복문으로 a와 b중 작은수를 i의 값으로 넣어주고, 큰 수의 값까지 만큼 반복문을 돌렸다.  
answer 에 작은 수 부터 큰 수까지 더해줌.
***

## 배운점

이 문제도 전에 풀고 후에 포스팅을 하는 중인데 전에 나는 왜 저렇게 풀었는지 모르겠다... 음수에서 고난을 겪었던 건 기억나는데...ㅎ;  
지금 보니 다른 사람의 두 번째 풀이가 정석? 처럼 보인다  
과거의 나는 저 문제를 되게 힘들게 풀었다는게 느껴지네

- sort() 메서드를 그냥 사용하면 숫자를 문자열로 인식하여 100이 25보다 작다는 결과가 나온다. 
- do while 반복문
