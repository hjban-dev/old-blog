---
layout: post
title: level 1. 완주하지 못한 선수 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: false
---
# level 1. 완주하지 못한 선수
> 출처 : https://programmers.co.kr/learn/courses/30/lessons/42576

## 문제

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.  
  
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.  

### 제한사항

  - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
  - completion의 길이는 participant의 길이보다 1 작습니다.
  - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
  - 참가자 중에는 동명이인이 있을 수 있습니다.


## 풀이
```javascript
function solution(participant, completion) {
  var part = participant.sort();
  var comp = completion.sort();
  var answer = '';
    
  var i = 0;
  for(i in part){
      if(part[i] != comp[i]){
        answer += part[i];
        break;
      }

  }
  return answer; 
}
```

## 다른사람 풀이
```javascript
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for(let i in participant) {
    if(participant[i] !== completion[i]) return participant[i];
  }
}
```

```javascript
function solution(participant, completion) {
  var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
  return participant.find(t=> {
    if(dic[t])
      dic[t] = dic[t]-1;
    else 
      return true;
  });
}
```

## 배운점

처음에 문제풀이 할 때 중첩 반복문 돌려서 배열 정렬하고, 그 안에서 또 배열을 반복하는 코드를 썼었다.
답은 전부 맞았다.
하지만 문제 효율성 체크 부분에서 시간 초과로 채점 불가 결과가 나왔고 비슷한 코드만 1293348번 수정했고 약간의 힌트를 얻어 문제를 해결했다.
`javascript 자체 내장 함수에 대해 더 공부하고 또 공부하고 복습하자.`

- 다시한번 `javascript 자체 내장 함수에 대해 더 공부하고 또 공부하고 복습하자.`
- 코드의 효율성을 생각하자.
- 정석이라고 생각하지 말자. 다른 사람의 코드도 심도있게 살펴보자.
