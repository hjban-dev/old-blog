---
layout: post
title: 스크롤 내리면 헤더 위치에 맞게 메뉴 고정
category: Javascript
tags: [Javascript, Exercise]
comments: true
---
# 스크롤 내리면 헤더 위치에 맞게 메뉴 고정

## 코드

```css
.sticky {position: fixed;top: 0;width: 100%;}
```
```javascript
window.onscroll = function() {myFunction()};
// 스크롤 할때 myFunction() 실행

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

```

### 풀이

현재 페이지의 Y값이 header의 좌표값보다 크면 헤더 고정
pageYOffset -> scrollY 과 같음 (브라우저 호환성때문에 pageYOffset를 쓰도록 권장)

> 참고 : <https://www.w3schools.com/>
