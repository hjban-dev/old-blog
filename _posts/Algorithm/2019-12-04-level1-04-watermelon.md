---
layout: post
title: level 1-4. 수박수박수박수박수박수? (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: false
---
# level 1. 수박수박수박수박수박수?
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12922>

## 문제

```
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
```

### 제한사항

  - n은 길이 10,000이하인 자연수입니다.

#### 입출력 예

n | return 
--------- | ---------
4 | "수박수박"
3 | "수박수"

***

## 내가 한 풀이
```javascript
function solution(n) {
  var answer = '';
  for(var i=1; i<n+1; i++){
    i%2 ? answer += '수' : answer += '박';
    // result += i % 2 ? "수" : "박";
  }
  return answer;
}
```
매개변수를 for 반복문을 실행하여 1부터 n까지 2로 나누어, 나머지가 0이면 차례로 answer에 "수"를 넣고, 나머지가 1이면 "박"을 넣는다.  
지난 문제에서 배웠던 삼항 연산자를 활용하였다 ^^!  
밑에 주석 부분은 다른 사람 풀이를 참고하여 중복되는 부분을 앞에서 빼서 더 간단하게 만들었다.

***

## 다른사람 풀이
```javascript
const soulution = n => "수박".repeat(n).slice(0,n);
```
`repeat()` 메서드를 활용하여 result 값을 반복하였고, 반복된 값에서 slice() 메서드를 활용하여 n번째 문자열까지 골라냄.  
간결하지만 내장 함수를 몰라서 쓸 수 없었던 코드다.

```javascript
const solution = n => {
  return "수박".repeat(n/2) + (n%2 === 1 ? "수" : '');
}
```
위의 풀이와 비슷한 접근법이다. n을 2로 나눈 몫 만큼 "수박" 문자열을 반복했고, n을 2로 나눈 값의 나머지가 1이라면 "수" 문자열을 추가하였다.

***

## 배운점

반복문, 조건문을 어느 정도 쓸 줄 알아서 문제 푸는 것은 수월했지만, 다른 사람 풀이를 보니 아직 한참 부족하다는 생각이 든다...ㅎ...  
다른 사람들 진짜 다들 천재 만재 들인가...  
새로 얻은 지식들 잊지 말고 다른 문제에서 다시 활용해보자!

- 공부 한 내용 복습하고, 활용하도록 하자!
- 코드를 간결하게 쓰는 시도를 해보자.
- es6 문법 공부를 하자.