---
layout: post
title: level 1-10. K번째수 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. K번째수
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/42748>

## 문제

```
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

  1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
  2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
  3. 2에서 나온 배열의 3번째 숫자는 5입니다.  

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
```

### 제한사항

  - array의 길이는 1 이상 100 이하입니다.
  - array의 각 원소는 1 이상 100 이하입니다.
  - commands의 길이는 1 이상 50 이하입니다.
  - commands의 각 원소는 길이가 3입니다.

#### 입출력 예

array | commands | return 
--------- | --------- | ---------
[1, 5, 2, 6, 3, 7, 4] | [[2, 5, 3], [4, 4, 1], [1, 7, 3]] | [5, 6, 3]

입출력 예 설명  
  1. [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
  1. [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
  1. [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

***

## 내가 한 풀이
```javascript
function solution(array, commands) {
  var answer = [];

  for(var i = 0; i<commands.length; i++){
    var slice_sort = array.slice(commands[i][0]-1, commands[i][1])
                          .sort(function(a, b){ return a - b; }) 
                          .splice(commands[i][2] - 1 ,1);
    answer.push(Number(slice_sort));
  }
  
  return answer;
}
```
그동안 공부했던 array 관련 메서드를 활용할 수 있었다.  
1. 들어오는 array `slice()` 메서드를 활용하여 commands의 배열의 첫번째, 두번째 요소로 자름
2. `sort()` 메서드로 오름차순으로 정렬
3. `splice()` 메서드로 commands 의 세번째 요소를 잘라냄
4. 결과로 나온 배열 slice_sort를 숫자열로 바꾸고 answer 변수에 `push()` 로 채워넣고, return


***

## 다른사람 풀이
```javascript
function solution(seoul) {
  return commands.map(v => {
    return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
  });
}
```
`map()` 메서드로 새 배열을 생성. 내 코드의 push(), Number() 기능을 쓰지 않아도 됨.

## 배운점

생각보다 어려웠다. 써야하는 메서드도 많았고 복잡했다. 만명 이상이 문제를 풀은걸 보면 다들 열심히 하나보다. 가만히 있을 순 없음.

**array.map(function(currentValue, index, arr), thisValue)**  
함수를 호출 한 결과로 새 배열을 작성, 배열의 각 요소에 대해 제공된 함수를 순서대로 한 번 호출 
