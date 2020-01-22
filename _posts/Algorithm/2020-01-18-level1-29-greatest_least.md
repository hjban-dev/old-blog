---
layout: post
title: level 1-29. 최대공약수와 최소공배수 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 최대공약수와 최소공배수
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12940>

## 문제

```
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
```

### 제한사항

- 두 수는 1이상 1000000이하의 자연수입니다.

#### 입출력 예

| n   | m   | return  |
| --- | --- | ------- |
| 3   | 12  | [3, 12] |
| 2   | 5   | [1, 10] |

***

입출력 예 설명

1. 자연수 3와 12의 최대공약수는 3, 최소공배수는 12이므로 [3, 12]을 리턴해야 합니다.
1. 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

## 내가 한 풀이

```javascript
function solution(n, m) {
  var answer = [];
  var i = n;
    
  while(i > 0){
    if(n%i==0 && m%i==0){ 
      answer[0] = i
      break;
    };
    i--;
  }

  answer.push((n*m)/answer[0]);
  return answer;
}
```

처음엔 i = 0 으로 for 반복문 돌렸다가 최대 공약수는 가장 큰 수 하나만 필요할 것 같아서 while 반복문으로 변경하고 break 주었다. for 반복문보다 전체적으로 0.2ms 정도 속도가 줄었다.  

변수 i는 매개변수 n, i가 0보다 크다면 반복문 실행. 반복문 안의 조건 n과 m이 모두 i로 나누어 떨어진다면 그 값은 두 수의 최대공약수. answer[0]에 i 값을 넣고 break 실행. 
n과 m을 곱하여 최대공약수로 나눈 값은 두 수의 최소공배수.

***

## 다른사람 풀이

```javascript
function greatest(n, m) {return m ? greatest(m, n % m) : n;}
function least(n, m) {return (n * m) / greatest(n, m);}

function solution(n, m) {
    return [greatest(n, m), least(n, m)];
}
```

함수명이 길어서 보기 편하게 변경했다. 일단 solution함수로 greatest(n, m), least(n, m)를 return했고, 정황상 greatest함수는 최대공약수를 구하는 함수, least함수는 최소공배수를 구하는 함수일 것이다.  

greatest함수는 내부에서 자기 자신을 다시 호출하는 재귀함수이다. 조건은 m에 값이 있다면(m의 값이 0이 아니라면) greatest(m, n % m)를 다시 실행하고, 값이 없다면(m의 값이 0이라면) n을 return. 다시 말하면 n의 값이 0이 되기 전까지 계속 반복

least함수는 내 풀이의 접근방법과 동일

```javascript
function solution(a, b) {
  var r;
  for(var ab= a*b; r = a % b; a = b, b = r){}
  return [b, ab/b];
}
```

호오...이것은 도대체 무엇인가...for문이 왜 저렇게 생긴것인가...  
일단 위의 코드로 거의 3일을 잡고 있었다. 가독성도 좋지 않고, 내가 아는 for문과 많이 달라서 나는 내가 모르는 for 문법이 있는 줄 알았다...  
위 코드를 리뷰하자면, r이라는 변수를 두고 r을 기준으로 반복문을 돌린다. return 값은 없고 for문 내부의 r의 값이 0이 될때까지 계속 반복한다. 초기값 var ab= a*b;는 사실 반복문 자체에선 사용하지 않는다.  
흠...똑똑하고 창의력 좋은 사람의 코드 같은데 모르겠다..  

여기서 새로 알게 된 점은 최대공약수를 구할 때 큰 수에 다른 작은 수를 나눈 나머지가 최대공약수가 된다는 점...

## 배운점

코드 분석조차 오래걸렸다...진짜 아직 갈길이 멀다ㅠㅠ  
기존에 알던 약수를 구하는 방법이 아니라 큰 수에 작은 수를 나눈 나머지가 최대공약수가 된다는 점.. 이건 좀 새롭다.ㅎ;
심지어 이 문제는 팀원이랑 같이 풀었는데 받은 점수차이가 있었다ㅠㅠ내가 1점 더 낮았음ㅠㅠ...흠...뭐가 문제지ㅠㅠ
