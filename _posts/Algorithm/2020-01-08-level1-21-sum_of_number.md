---
layout: post
title: level 1-21. 자릿수 더하기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 자릿수 더하기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12931>

## 문제

```
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
```


### 제한사항

- N의 범위 : 100,000,000 이하의 자연수

#### 입출력 예

| n   | answer |
| --- | ------ |
| 123 | 6      |
| 987 | 24     |

입출력 예 설명

1. 1 + 2 + 3 = 6이므로 6을 return 하면 됩니다.
2. 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.


***

## 내가 한 풀이
```javascript
function solution(n){
  var answer = 0;
  var str_n = String(n)

  for (let i of str_n) {
    answer += Number(i)
  }

  return answer;
}
```
흠 숫자를 배열로 넣어서 reduce() 메서드를 예상했는데 내가 못쓰는건지 왜 뭐가 문제인지 잘 안풀림..  
그럴땐 모두 지우고 처음부터 시작...!  
들어온 n의 타입이 number 라서 변형이 불가능하길래 String() 함수로 자료형 변형시키고, for of 반복문을 쓰니 string도 활용 가능했다. 반복가능 한 부분 확인하고선 수월하게 진행

***

## 다른사람 풀이
```javascript
function solution(n){
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
```
내가 처음에 진행하려고 했던 방향이다. 위에서 말했듯이 들어오는 n의 자료형이 Number라서 나는 String() 함수를 사용했는데 Number에다가 문자열을 더하면 String으로 변환된다. 잊고 있었다.  
처음에 (n+"") 실행하여 타입을 변경하고 split() 메서드로 문자열을 잘랐다. 나도 split() 메소드 기능을 쓰고 싶었는데 기억이 안나서ㅠㅠ slice, splice 밖에 기억 안나서 못썼음ㅠㅠ  
split() 메서드의 결과로 나온 배열을 reduce() 메서드로 합을 구했다.

## 배운점

문제 해결하고 나서 내 코드에 애정을 느껴 다른사람 풀이에 관심을 안가지려 했다... 안했으면 큰일날뻔ㅠㅠ
