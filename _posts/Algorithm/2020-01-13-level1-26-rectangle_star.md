---
layout: post
title: level 1-26. 직사각형 별찍기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 직사각형 별찍기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12969>

## 문제

```
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
```

### 제한사항

- n과 m은 각각 1000 이하인 자연수입니다.

#### 입출력 예

| data | output                        |
| ---- | ----------------------------- |
| 5 3  | ***** <br/> ***** <br/> ***** |

***

## 내가 한 풀이
```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  
  for(var i=0; i<b; i++){
    console.log('*'.repeat(a))
  }
});
```
이 문제도 문제 자체가 어려운건 아니였는데 초기화 상태의 기본 코드가 어려워서 도전을 미뤘다. 아래 코드가 기본 가이드 코드여서 process.stdin.on() 형식이 무슨 상태인지 몰랐음.  
들어오는 매개변수가 각각 변수 a,b로 작성되어 있어서 어렵지 않게 제작. a만큼 반복한 *을 b만큼 반복

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  console.log(a);
  console.log(b);
});
```
위 코드가 초기 기본 코드

***

## 다른사람 풀이

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  const star = `${'*'.repeat(a)}\n`;

  console.log(star.repeat(b));
});
```

접근 방법은 비슷. 반복문대신 repeat()메서드를 두번 사용.

## 배운점

혼자 풀때는 몰랐는데 작성한 코드에 따라 받는 점수가 다른가보다ㅠㅠ 팀원이랑 비교 해봤는데 다른 점수를 받았다ㅠ효율성을 좀 더 생각하면서 코드를 작성해야겠다ㅠㅠ
 