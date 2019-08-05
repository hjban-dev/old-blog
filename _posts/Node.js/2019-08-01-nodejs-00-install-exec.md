---
layout: post
title: Nodejs 설치 및 실행
category: Nodejs
tags: [Nodejs]
comments: false
---
# nodejs 설치 및 실행
> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.

Node.js는 자바스크립트(JavaScript)이용하여 서버 프로그래밍을 할 수 있도록 해주는 플랫폼

## 설치
-  [nodejs.org](https://nodejs.org/ko/download/) 에서 파일 다운로드 후 설치
-  또는 npm 을 통하여 설치 (installing Node.js via package manager)
-  설치 후 터미널에서 `node --version` 명령어 통해서 버전 확인

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
