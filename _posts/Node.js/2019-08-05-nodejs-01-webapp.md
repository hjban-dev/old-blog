---
layout: post
title: Nodejs 간단한 웹 앱 만들기
category: Nodejs
tags: [Nodejs]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  
> Nodejs를 이용해서 간단한 서버 에플리케이션을 만들어 본다.

# nodejs 간단한 웹 앱 만들기

## nodejs 서버연결

### 서버연결을 위한 코드
- [node.org > about](https://nodejs.org/en/about/) 에서 파일 복사 후 `webserver.js` 생성 후 붙여넣기
- http 내부 모듈을 불러와서 hostname의 port로 서버 생성 후 연결

  ```javascript
  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  ```

- 터미널에서 `node webserver.js` 실행
- 서버 종료할 때는 Ctrl + C 

  ```
  $ node webserver.js
  Server running at http://127.0.0.1:3000/
  ```
- 웹브라우저를 통해 http://127.0.0.1:3000/ (로컬호스트)의 3000번 포트 경로에 접속하면 브라우저에 `hello world` 가 출력

### 의미

- webserver.js 자바스크립트의 코드가 웹 브라우저를 통해서 요청한 내용을 받아서 서버 생성 후 hello world 라는 텍스트를 노출을 명령
- 우리의 웹브라우저는 화면에 hello world를 출력  

---

## nodejs 서버연결을 위한 코드 해석하기

### 서버연결을 위한 코드와 해석

```javascript
const http = require('http'); // http 내부 모듈 추출
  // require()는 javascript 표준 API는 아님. Node.js에서 모듈을 불러오는 특별한 목적을 가진 내장 함수 

const hostname = '127.0.0.1'; // 서버 컴퓨터의 ip
const port = 3000; // 목적 포트. 컴퓨터에는 0 ~ 65535번의 포트(port) 존재

// createServer 명령을 통해 서버 한대를 만든다.
const server = http.createServer((req, res) => { 
  // 매개 변수로 요청의미의 req, 응답의미의 res
  // 사용자에게 응답한다는 의미의 res에 속성 및 메서드 연결
  res.statusCode = 200; // 통신 성공
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  // 만든 서버가 컴퓨터에 리스닝을 하도록 함
  // 첫번째 매개변수는 포트번호, 두번째 매개변수는 ip 
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
