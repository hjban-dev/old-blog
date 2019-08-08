---
layout: post
title: Nodejs Session 생성 및 사용
category: Nodejs
tags: [Nodejs]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  
> Session 개념을 세우고 사용하는 법을 알아본다  

# Nodejs Session 생성 및 사용

## Session 배경
- 쿠키보다 더 안전하고 많은 데이터를 저장하는 저장 방식
- 데이터를 `웹 서버`에 저장 쿠키보다 조금 더 안전  

## Express-Session [적용방법](https://www.npmjs.com/package/express-session)
- 설치 `npm install express-session --save`
  - package.json 에서 설치 확인
- app.js에 해당 모듈 추가 `expressSession = require('express-session');`
- express 프로세스 app에 express-session 미들웨어 연결  
  `app.use(session({ secret , resave , saveUninitialized }))`
  - secret - 필수항목 이 값으로 세션을 암호화 하여 저장.
  - resave - 세션을 언제나 저장할 지 정하는 값 false를 권장하지만 필요에 따라 true로 설정
  - saveUninitialized - 세션이 저장할 내용이 없어도 uninitialized 상태로 미리 저장.  
  ex) 방문자 추적할 때 사용  

### session 저장하는 방법
```javascript
req.session.객체명 // 객체 방식 선호
```

### session 삭제하는 방법
```javascript
req.session.destroy(function(err) {}) // 세션 삭제
```

#### session 생성 및 삭제 예제 
```javscript
var express = require('express');
var app = express();
var sessionParser = require('express-session'); // 모듈 추출
var router = express.Router();

var port = process.env.port || 3000; // 삼항 연산자로 포트번호 지정

// express-session 미들웨어 연결
app.use(sessionParser({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}));

router.route('/confirm').get(function (req, res) {
  let msg = `세션이 존재하지 않습니다.`
  if (req.session.user) {
    msg = `${req.session.user.age}살 ${req.session.user.name}님 안녕! 세션의 생성된 시간 : ${req.session.user.createCurTime}`;
  }
  res.send(msg);
});

router.route('/').get(function (req, res) {
  if(req.session.user){
    console.log(`세션이 이미 존재합니다.`);
  }else{
	// session 생성
    req.session.user = {
      "name" : "neju money",
      "age" : 25,
      "createCurTime" : new Date()
    }
    console.log(`세션 생성`);
  }
  res.redirect(`/confirm`);
});

// session 삭제 후 redirect
router.route('/destroy').get(function(req,res){
  req.session.destroy();
  console.log(`session을 삭제하였습니다.`);
  res.redirect(`/confirm`);
});

app.use('/', router);
app.listen(port, function () {
  console.log(`${port}번 포트로 서버가 작동합니다.`);
});
```
- session 활용하여 로그인, 로그아웃 기능도 구현 가능
  - public 폴더에 login.html 생성 내부에 input이 포함된 form 태그 구현
  - body-parser로 id, nickname, pw 등 정보 추출
  - session 정보 저장 후 환영 정보 전송
  - 환영 정보에 로그아웃 버튼에 세션 삭제 기능 추가
