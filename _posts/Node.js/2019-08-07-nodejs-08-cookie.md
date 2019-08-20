---
layout: post
title: Nodejs Cookie 생성 및 사용
category: Nodejs
tags: [Nodejs]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  
> Cookie 개념을 세우고 사용하는 법을 알아본다  

# Nodejs Cookie 생성 및 사용

## Cookie 배경

- http 라는 통신 방식은 요청과 응답이 이루어지고 나면 연결이 끊김.
- 이전에 사용했던 <u>사용자, 브라우저 등의 정보를 지속적으로 유지하기 위해 개발</u>
  - ex) 사용자가 웹 페이지를 방문하면 방문자의 이름을 쿠키에 저장할 수 있습니다.
  - 다음에 사용자가 페이지를 방문하면 쿠키는 방문자의 이름을 "기억"합니다.
- 클라이언트 `웹브라우저`에 저장하고 같은 주소의 사이트에서만 유효  

## Cookie [적용방법](https://www.npmjs.com/package/cookie-parser)

- 설치 `npm install cookie-parser --save`
  - package.json 에서 설치 확인
- app.js에 해당 모듈 추가 `var cookieParser = require('cookie-parser')`
- express 프로세스 app에 cookie-parse 미들웨어 연결  
  `app.use(cookieParser())`  

### cookie 저장하는 방법

```javascript
res.cookie('cookie name', 'cookie value', option)
```

### 컴퓨터가 가지고 있는 cookie 확인 하는 방법

```javascript
req.cookies.[cookie name]
```
#### cookie로 방문 횟수 추적 예제 

```javascript
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// cookieParser 미들웨어 연결
app.use(cookieParser());

app.get('/', (req, res) => {
  // 쿠키가 없다면 초기화 있다면 쿠키값을 받아옴
	if(req.cookies.count == undefined){
		var count = 0;
	}else{
		var count = parseInt(req.cookies.count);
		res.cookie('count',count+1);
	}
    res.send('count: ' + req.cookies.count);
  }
);

app.listen(3000, () => {
  console.log('server start on port 3000');
});
```

<center>
<figure>
<img src="/assets/post-img/nodejs/cookie-count.jpg" alt="" width="397">
<figcaption>cookie로 방문 횟수 추적 예제</figcaption>
</figure>
</center>

#### cookie 세팅 후 정보 활용

```javascript
router.route('/process/showCookie').get(function(req, res) {
  console.log('/process/showCookie 요청 들어옴 ...');
  // end() 문자열을 인자로 사용, send() 객체나 수식을 인자로 사용.
  res.send(req.cookies);
});

router.route('/process/setCookie').get(function(req, res) {
  // 쿠키는 사용자측 PC에 생성 된다.
  res.cookie('user', {
    id: 'KIM',
    name: '방탄소년단',
    authorized: true
  });
  
  // showCookie로 redirect
  res.redirect('/process/showCookie');
}); 
```
setCookie에서 쿠키를 웹 브라우저에 설정   
/process/showCookie로 redirect  
설정된 cookie 정보로 응답  
개발자 도구의 Network 탭에서 새로 고침후 showCookie에서 cookie 정보 확인  

<center>
<figure>
<img src="/assets/post-img/nodejs/cookie.jpg" alt="" width="600">
<figcaption>개발자 도구에서 웹 브라우저에 저장된 cookie 확인</figcaption>
</figure>
</center>
