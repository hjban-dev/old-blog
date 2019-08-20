---
layout: post
title: Express 모듈 설치와 사용
category: Nodejs
tags: [Nodejs]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  
> Express 모듈 설치 후 Express에서 제공하는 미들웨어와 라우터 사용 웹 서버 만들기

# Express 모듈 설치와 사용
- Express는 자체적인 기능을 갖춘 라우팅 및 미들웨어 웹 프레임워크

## Express 모듈 정의
- Node.js만 사용하여 웹 앱을 만드는 것은 어렵고 복잡함
- 위 사항들을 간단하게 만들어주는 다양한 도구 중 가장 대표적인 것이 Express
- [express 홈페이지](http://expressjs.com/ko/) 참고

### Express 설치
- 터미널에서 `npm init`을 통해 해당 프로젝트 폴더를 npm 패키지로 만든다.
- `npm install express --save` 입력 후 package.json 에서 확인
- node_modules 폴더에 파일이 설치되고 완료! 

---

### 코드작성

require() 함수로 설치된 express 모듈 추출  
상수 app 으로 웹 서버를 시작

```javascript
const express = require('express');
const app = express(); // express의 인스턴스

app.use(function(req, res){
  res.send('hello Node user!');
});

// 웹 서버 로컬호스트 3000번 포트 실행
app.listen(3000, function(){
  console.log('connected 3000 port!');
});
```

### 코드실행
- 터미널에서 node app.js 입력하여 파일을 실행
- 브라우저에 http://localhost:3000 로 접속하여 결과 확인

---

## express() 메소드 호출으로 만든 app 객체의 주요 메서드

| 메서드 이름 | 설명 | 
|:--------|:--------|
| use(path, function) | 미들웨어 함수를 사용 |
| app.get(path, callback [, callback ...]) | 특정 패스로 요청된 정보 처리 |
| app.set(name, value) | 서버 설정 속성 지정. 지정한 속성을 get() 메서드로 확인할 수 있음. |
| app.get(name) | app.set() 메서드로 서버 설정을 위해 지정했던 속성 확인 |

get(path, callback [, callback ...]) 메서드는 요청방식 처리 메서드로 다음장에서 더 알아봅시다.

### 코드작성

**아래 코드는 웹 서버 실행을 위해 익숙해져야 함.**

```javascript
var express = require('express');
var app = express();

app.get('/',function(req, res){
  // get 요청 방식으로 접근한 서버 호스트 접속했을 때 실행
  res.send('hello Node.js user!');
});
app.get('/login',function(req, res){
  // get 요청 방식으로 접근한 서버 호스트/login 접속했을 때 실행
  res.send('<h1>login please. Node.js user!</h1>');
});

app.listen(3000, function(){
  console.log('connected 3000 port!');
});
```
브라우저에 http://localhost:3000, http://localhost:3000/login 로 접속하여 결과 확인
