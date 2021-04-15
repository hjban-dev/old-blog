---
layout: post
title: level 1-28. 이상한 문자 만들기 (Javascript)
category: Algorithm
tags: [Algorithm, Javascript, Exercise]
comments: true
---
# level 1. 이상한 문자 만들기
> 출처 : <https://programmers.co.kr/learn/courses/30/lessons/12930>

## 문제

```
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
```

### 제한사항

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

#### 입출력 예

| d                 | return            |
| ----------------- | ----------------- |
| "try hello world" | "TrY HeLlO WoRlD" |

***

입출력 예 설명

1. "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

## 내가 한 풀이

```javascript
function solution(s) {
  var answer = [];

  for(var i of s.split(' ')){
    var text = '';
    for(var j =0; j<i.length; j++){
      text += (j%2) ? i[j].toLowerCase() : i[j].toUpperCase() ;
    }
    answer.push(text);
  }
    
  return answer.join(' ');
}
```

들어오는 s를 split() 메소드로 띄어쓰기를 기준으로 배열을 만들고, 그 배열안에서 반복문 실행.  
i의 텍스트 길이를 찾아서 이중반복문 실행. j가 짝수이면 대문자, 홀수이면 소문자로 변경하며 answer에 push.  
answer를 join() 메소드로 각 요소 사이에 띄어쓰기를 넣고 문자열로 변환 

***

## 다른사람 풀이

```javascript
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){
    return a[0].toUpperCase() + a[1].toLowerCase();
  })
}
```

흠 정규표현식에 대한 공부가 시급하다.  
/(\w)(\w)/g : 대소문자 구분 없이 두 글자씩 선택  
replace() 메소드로 새로운 문자열로 변경하려고 했고, 첫번째 글자는 대문자, 두번째 글자는 소문자로 return

```javascript
function solution(s) {
  var result = "";

  for(var word of s.split(" ")) {
    for(var i in word) {
      result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
    }
    result += " ";
  };

  return result.slice(0, -1);
}
```

이중반복문을 사용해서 접근하는 방식은 같지만, 'word["toUpperCase"]()'의 방식으로 함수를 호출하는게 신기해서 가져왔다.


## 배운점

반복문을 잘못사용하면 효율성 테스트에서 자꾸 실패 결과가 나와서 이 문제도 이중반복문을 돌려야겠다고 생각이 들었을 때 걱정되서 최대한 늦게 도전한 문제이다... 코드에 따라 받는 점수가 다르다는 걸 알게 되니까 더 쉽게 도전하기가 어렵다ㅠㅠ
