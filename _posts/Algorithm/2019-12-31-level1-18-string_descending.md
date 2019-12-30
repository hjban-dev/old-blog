---
layout: post
title: level 1-18. 문자열 내림차순으로 배치하기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 문자열 내림차순으로 배치하기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12917>

## 문제

```
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
```

### 제한사항

- str은 길이 1 이상인 문자열입니다.

#### 입출력 예

| s         | answer    |
| --------- | --------- |
| "Zbcdefg" | "gfedcbZ" |

***

## 내가 한 풀이
```javascript
function solution(s) {
  var answer = Array.from(s).sort().reverse().join('');
  return answer;
}
```
사실 문제 이해 안함. 예시 보니 뒤집는 것 같아서 요리조리 하니까 통과했다...ㅋㅋㅋ  
내장 메소드만 사용해서 설명 없음.
***

## 다른사람 풀이
```javascript
function solution(s) {
  return s.split("").sort((a,b) => a<b ? 1:-1).join("")
}
```
from() 대신 split() 사용.  
sort((a,b) => a < b ? 1 : -1) 로 정렬하면서 뒤집음.

## 배운점

Array.from ( arrayLike [, mapFn [, thisArg ]]) - 반복하여 얕은 복사로 새로운 배열 생성  
Array.join([ separator ]) - separator에 따라 배열을 문자열로 지정( 매개변수 생략하면 ','로 구분됨)
