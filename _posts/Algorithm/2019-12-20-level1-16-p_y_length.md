---
layout: post
title: level 1-16. 문자열 내 p와 y의 개수 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 문자열 내 p와 y의 개수
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12916>

## 문제

```
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
```

### 제한사항

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

#### 입출력 예

s | return 
--------- | --------- 
"pPoooyY" | true
"Pyy" | false

입출력 예 설명

1. 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
2. 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

***

## 내가 한 풀이
```javascript
function solution(str){
  var s = str.toUpperCase();
  var pLength = 0;
  var yLength = 0;
  
  for(var i=0; i<s.length; i++){
    if(s[i] == "P"){
      pLength++;
    }else if(s[i] == "Y"){
      yLength++;
    }
  }
  
  var answer = (pLength != yLength) ? false : true ;
  return answer;
}
```
먼저 문제가 소문자 대문자를 구분하지 않아서 들어오는 s를 toUpperCase() 메서드를 사용하여 대문자로 변환시켜 주었다.
0을 가지는 pLength와 yLength를 변수를 만들고, for 반복문으로 P, Y의 개수를 각각 세어줌.
pLength와 yLength의 개수에 따라 answer 를 false 와 true로 return
***

## 다른사람 풀이
```javascript
function solution(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}
```
정규 표현식으로 대문자 소문자 구별 없이 p, y와 맞는 개수를 찾아서 비교.
```javascript
function solution(s) {
  var s = str.toUpperCase();
  return s.split("P").length === s.split("Y").length;
}
```
위 방법과 접근방법은 비슷. split() 메서드로 p, y와 맞는 개수 찾아서 비교 

## 배운점

반복문 쓰지 말고 내장 메서드 사용해야 하는데 자꾸 반복문 먼저 떠오르고, 반복문이 떠오른 후에는 다른 생각이 나지 않는다...  
정규 표현식 관련 포스팅 시급. 코드 분석은 하는데 사용이 서툴다ㅠㅠ 예제 문제 반복 필수.

```javascript
// split() 문자열을 특정 문자를 기준으로 잘라 새 배열 생성
'ppoooyy'.split('p'); // 	[ '', '', 'ooyy' ]
```
