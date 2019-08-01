---
layout: post
title: Nodejs 설치 및 실행
category: Nodejs
tags: [Nodejs]
comments: false
---
# nodejs 설치 및 실행
> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#)

Node.js는 자바스크립트(JavaScript)로 서버 프로그래밍을 할 수 있도록 해주는 플랫폼

## 설치
-  nodejs.org 에서 파일 다운로드 후 설치
-  또는 npm 을 통하여 설치 (installing Node.js via package manager)
-  터미널에서 `node --version` 명령어 통해서 버전 확인

## 실행
- js 파일 작성 (ex. nodejs/hello.js)

  ```javascript
  console.log('hello');
  ```
- `터미널 > cd nodejs (js 파일이 들어있는 폴더로 이동) > node hello.js`

  ```
  $ node hello.js
  Hello world
  ```
---

# nodejs 간단한 웹앱 만들기
> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#)   
> Nodejs를 이용해서 간단한 서버 에플리케이션을 만들어 본다.

# nodejs 서버연결

## 서버연결을 위한 코드
- node.org > about 에서 파일 복사 후 `webserver.js` 파일에 붙여넣기

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

  ```
  $ node webserver.js
  Server running at http://127.0.0.1:3000/
  ```
- 웹브라우저를 통해 로컬호스트의 3000번 포트 다시 말해 http://127.0.0.1:3000/ 경로에 접속하면 브라우저에 `hello world` 가 출력

## 의미

- webserver.js 자바스크립트의 코드가 웹 브라우저를 통해서 요청한 내용을 받아서 우리에게 hello world 라는 텍스트를 전송 한 것
- 그 결과 우리의 웹브라우저는 화면에 hello world를 출력 할 수 있게 된 것  
