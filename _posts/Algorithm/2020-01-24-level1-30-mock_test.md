---
layout: post
title: level 1-30. 모의고사 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---

# level 1. 모의고사
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/42840>

## 문제

```
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
```

### 제한사항

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

#### 입출력 예

answers   | return  |
--- | ------- |
[1,2,3,4,5]  | [1] |
[1,3,2,4,2]   | [1,2,3] |

***

입출력 예 설명

1. 가장 문제를 많이 맞힌 사람은 수포자 1입니다.
    -  수포자 1은 모든 문제를 맞혔습니다.
    -  수포자 2는 모든 문제를 틀렸습니다.
    -  수포자 3은 모든 문제를 틀렸습니다.  

1. 모든 사람이 2문제씩을 맞췄습니다.

## 내가 한 풀이

```javascript
function solution(answers) {
  var answer = [];
  var peoples = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
  var score = [0, 0, 0]

  peoples.map(function(a,b){
    for(var i =0; i<answers.length; i++ ){
      if(answers[i] == peoples[b][i % peoples[b].length]){
        score[b] += 1;
      }
    }
  })

  score.map(function(a,b){
    if(a == Math.max(...score)){
      answer.push(b+1)
    }
  })

  return answer;
}
}
```

흠 은근히 까다로운 문제였다.  
peoples라는 변수에 수포자들의 찍는 흐름을 넣는 배열을 만들었고, peoples 자체를 map()메소드로 반복문 돌렸다. 수포자 각각을 for문으로 answer의 개수만큼 반복하여 맞는 점수가 나오면 score에 +1점을 주면서 score배열을 완성시켰다.  
그리고 나온 결과 score를 다시 map()메서드로 반복했다. 다시 보니까 반복문이 3개나 있다. 흠...반성..  
score의 최댓값이 a와 같다면 answer배열에 push.  
  
다시보니 마음 아픈 코드...네...^^;  
채점할 때 걸린 시간이 4ms 대가 나온 이유가 있었..ㅎ...

***

## 다른사람 풀이

```javascript
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
  var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
  var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
  var max = Math.max(a1c,a2c,a3c);

  if (a1c === max) {answer.push(1)};
  if (a2c === max) {answer.push(2)};
  if (a3c === max) {answer.push(3)};

  return answer;
}
```

나는 다른 사람들의 코드도 테스트를 해보는데 이 코드가 통과 속도가 제일 빨랐다. 인정하고 싶지 않지만..  
흠...어쩌면 나는 초심으로 돌아가야 할지도..?  
위 코드는 굳이 분석 할 필요 없어보인다. 가독성이 아주 좋다.  

## 배운점

저번 포스팅 최대공약수, 최소공배수에서는 다른 사람의 풀이를 보고 한참이나 이해 못하면서 아직 멀었나 내가 더 분발해야 하나 싶었지만, 이번 포스팅의 다른 사람의 풀이는...흠...나를 되돌아보게 하는 코드였다.  
무조건 간결하고 짧게가 아닐 때도 있네..ㅎ.. 
