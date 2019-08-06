---
layout: post
title: Nodejs 설치 및 실행
category: Nodejs
tags: [Nodejs]
comments: false
---
> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.

# nodejs 설치 및 실행

## Node.js?
- 크롬V8엔진 기반으로 개발된 자바스크립트(JavaScript)를 이용하여 서버 프로그래밍을 할 수 있도록 해주는 플랫폼

## 설치
-  [nodejs.org](https://nodejs.org/ko/download/) 에서 파일 다운로드 후 설치
  - node.js의 홀수 버전은 지속적으로 기능을 추가하는 stable 버전
  - 짝수 버전은 안정적이고 지속적인 지원을 약속하는 LTS(Long Time Supports)버전. 짝수 버전 선호
-  또는 npm 을 통하여 설치 (installing Node.js via package manager)
-  설치 후 터미널에서 `node --version` 명령어 통해서 버전 확인
  - 터미널 여는법 : 윈도우 + r 키 누르거나 윈도우 검색창에 cmd 검색

## 실행
- 폴더 생성 후 js 파일 작성 (ex. nodejs/hello.js)

```javascript
console.log('hello');
```
- `터미널 > cd nodejs (js 파일이 들어있는 폴더로 이동) > node hello.js`

```
$ node hello.js
Hello world
```
