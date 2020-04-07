---
layout: post
title: level 1-31. 문자열 내 마음대로 정렬하기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---

# level 1. 문자열 내 마음대로 정렬하기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12915>

## 문제

```
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
```

### 제한사항

- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 - 문자열이 앞쪽에 위치합니다.

#### 입출력 예

string | n   | return  |
--- | ------- |------- |
["sun", "bed", "car"]  | 1 | 	["car", "bed", "sun"]
["abce", "abcd", "cdx"]  | 2 | 	["abcd", "abce", "cdx"]

***

입출력 예 설명

1. sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

1. abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다. 따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다. abce와 abcd는 사전순으로 정렬하면 abcd가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

## 내가 한 풀이

```javascript
function solution(strings, n) {
  var new_arr = strings.map(function(curr, idx){
  	return curr[n]+curr
  })
  var answer = new_arr.sort().map(function(a){
  	return a.slice(1, a.length)
  })

  return answer;
}
```
들어오는 strings의 n번째 string을 텍스트의 맨 앞에 붙인 새 배열 new_arr을 만들고, 그 new_arr을 sort()로 정렬한 후 붙였던 첫번째 string을 slice()로 자른 배열 answer를 return 했다.

***

## 다른사람 풀이

```javascript
function solution(strings, n) {
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
```
ㅎ..너무 간결해서 할 말이 없다.  
위 코드...짧지만 분석이 은근히 안되서 보니까 localeCompare() 내장 메소드를 몰랐다. 문자열을 구분해주는 메소드이다.  
짧게 쓴 풀이들이 다 localeCompare() 메소드를 사용해서 굳이 다른 풀이 안가져오고, localeCompare()만 정리하자..

* localeCompare() : 주어진 문자열의 앞 또는 뒤에 오거나 같은지 여부를 나타내는 숫자를 정렬 순서로 리턴합니다.  
  두 문자열을 비교하여 일치하면 0, 다르면 -1, 인자값이 원본문자열의 일부분이면 1을 리턴

## 배운점

처음엔 객체 형식의 배열을 생각했다가, 어렵게 가지 말자 생각하고 텍스트를 붙였다. 하지만 마음에 들지 않는 풀이이다...언제쯤 내 코드가 마음에 들지...원...  
리팩토링을 해도 점수가 바뀌지 않으니 아쉬운 마음만 든다.  
그리고 문제가 도중에 바뀌었는지 다른사람의 풀이가 실행 되지 않아서 당황스러웠다.
