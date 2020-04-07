---
layout: post
title: 브라우저 너비에 따른 반응형 속성 추가
category: Javascript
tags: [Javascript, Exercise]
comments: true
---
# 브라우저 너비에 따른 반응형 속성 추가 반응형 사이트 만들기

## 예제 코드

```javascript
function responsiveImg(){
  var width = $(window).width()
  //var width = document.documentElement.offsetWidth;
  
  var sizeMode = width > 1440 ? 4 : width > 1023 ? 3 : width > 767 ? 2 : 1;
  //var sizeMode = width > 1440 ? 4 
  //             : width > 1023 ? 3 
  //             : width > 767 ? 2 
  //             :              1;

  document.documentElement.className = document.documentElement.className.replace(/ *s[1-4][1-4]?/g, '')+(' s'+ sizeMode);
});
}

$(window).on('load resize', function(){
  responsiveImg();
});

```

### 풀이

변수 sizeMode 는 삼항연산자(이중삼항연산자) 사용 (조건이 만족하면 전자를 출력, 아니라면 후자 출력)

1. 조건 (width가 1440 이상인가)를 실행 -> 만족하면 4를 출력 만족 못하면 2 실행
2. 조건 (width가 1023 이상인가)를 실행 -> 만족하면 3을 출력 만족 못하면 3 실행
3. 조건(width가 767 이상인가)를 실행 -> 만족하면 2를 출력 만족 못하면 1을 출력

변수 sizeMode는 각각의 값에 따라 반응형 사이즈를 가지고 결과 값을 document에 클래스로 추가
윈도우창 load, resize 될 때 responsiveImg() 실행
