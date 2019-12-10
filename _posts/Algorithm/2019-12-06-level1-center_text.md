---
layout: post
title: level 1-7. 가운데 글자 가져오기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: false
---
# level 1. 가운데 글자 가져오기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12903>

## 문제

```
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
```

### 제한사항

  - s는 길이가 1 이상, 100이하인 스트링입니다.

#### 입출력 예

s | return 
--------- | ---------
"abcde" | "c"
"qwer" | "we"

***

## 내가 한 풀이
```javascript
function solution(s) {
  var answer = '';
  var sLength = Math.floor(s.length/2);

  answer = (s.length % 2 == 0) ? s[sLength-1]+s[sLength] : s[sLength];
  return answer;
}
```
변수 sLength 는 매개변수 s의 개수를 2로 나눈 몫 
answer 는 s.length를 2로 나눈 나머지가 0 이라면 sLength 번째 문자열과 sLength+1 번째 문자열을 반환.
그렇지 않으면 sLength 번째의 문자열 반환
***

## 다른사람 풀이
```javascript
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```
후... `substr()` 지정된 위치의 문자열의 일부를 반환하는 메서드..  
들어온 문자열의 개수를 2로 나눈 수에서 1을 뺀 수(인덱스) 부터 나머지가 0 이면 2글자, 1이면 한글자 반환
넘나 깔끔 + 퍼펙트...

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

진짜 기본 메서드 활용할 수 있는게 엄청 많은데...!  
`substr()` `charAt()` `repeat()` `splice()` `reduce()` `sort()` 지금 까지 나온 메서드의 활용법이라도 외워두자..!

String

- substr( start [, length] ) : 문자열 일부 추출 [String]
- charAt( index ) : 문자열 반환 [String]
- repeat( index ) : 문자열을 반복하여 반환 [String]

Array

- splice( start, length [, itme] ) : 배열의 요소를 제거하거나 추출 [Array]
- reduce( callback [, initialValue] ) : 하나의 결과값을 반환 [Array]
- sort( [compareFunction] ) : 정렬 후 반환 [Array]
