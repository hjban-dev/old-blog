---
layout: post
title: Express모듈의 Router, Static 미들웨어
category: Nodejs
tags: [Nodejs]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  
> 미들웨어의 개념을 잡고 router 미들웨어와 static 미들웨어를 알아본다.  

# 미들웨어

- 쉽게 말해 요청과 응답 사이에서 특수 기능을 수행  (모듈의 구성요소 중 하나가 미들웨어)
- app객체의 use()메서드로 미들웨어 등록
- 따지고 보면 미들웨어 실행 후 라우터 실행

## Static 미들웨어

- 정적 파일을 제공할때 사용하는 미들웨어
  - 정적 파일 : 기본적인 css 파일이나 js 파일 같이 아무리 요청해도 변경되지 않는 파일
  - ex) public 폴더의 login.html 과 logout.html등을 제공하고 싶을 때 사용
- express에 내장된 static 미들웨어를 사용하거나 serve-static 외부 모듈을 설치해서 사용

### exprss.static 사용 예시

```javascript
app.use(express.static('public'));
```

- 하지만 express.static 매개변수에 들어가는 경로는 node 프로세스가 실행되는 폴더를 기준으로 하는 상대경로이다. 
- Express 앱을 다른 디렉토리에서 실행하는 경우에는 제공하려는 폴더의 절대 경로를 사용하는 것이 더 안전

```javascript
app.use('/static', express.static(__dirname + '/public'));
```

## 라우팅

- 개념 : 사용자의 요청에 대한 정보를 제공하는 것을 `라우트(route)한다`라고 표현
- 간단하게 풀면 `요청에 따라 다른 기능을 실행`시키는 것
- 어렵게 풀면 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등) 요청에 애플리케이션이 응답하는 방법을 결정하는 것
- 각 라우트는 하나 이상의 핸들러 함수를 가질 수 있으며, 그 함수는 라우트가 **일치할 때 실행**

### 라우트의 기본 구조

라우트 정의에는 다음과 같은 구조가 필요
- app은 express의 인스턴스
- METHOD는 HTTP 요청 메소드
- PATH는 서버에서의 경로
- HANDLER는 라우트가 일치할 때 실행되는 함수

```javascript
app.METHOD(PATH, HANDLER)
```

#### HTTP 요청 메소드

| 메서드 이름 | 설명 |
|:--------|:--------|
| app.get() | get 요청 처리 |
| app.post() | post 요청 처리 |
| app.put() | put 요청 처리 |
| app.delete() | delete 요청 처리 |


### 기본적인 router 미들웨어 예시

router 미들웨어는 라우팅을 구현하는 미들웨어

```javascript
var express = require('express');
var app = express();

// 사용자의 '/' get 요청에 서버는 hello world로 응답
app.get('/', function(req, res) {
  res.send('hello world');
});
```
