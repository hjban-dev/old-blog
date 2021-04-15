---
layout: post
title: Create-react-app 설치 및 실행
category: React
tags: [React]
comments: false
---
> ReactJS 이 정도는 알아야지 - 이효범 교재와 KOSMO React 프로그래밍 수업을 듣고 정리합니다.  
> [w3school](https://www.w3schools.com) 참고

# Create-react-app 설치 및 실행

## 설치
- React 앱 작성 방법 중 하나인 create-react-app 사용
  - Node.js 가 설치 되어 있어야 함.
  - [nodejs.org](https://nodejs.org/ko/download/) 에서 파일 다운로드 후 설치
  - Node.js 설치하면 NPM 같이 설치 됨
- 설치 후 터미널에서 `npm install -g create-react-app` 명령어 통해서 버전 확인
  - 터미널 여는법 : 윈도우 + r 키 누르거나 윈도우 검색창에 cmd 검색
- myfirstreact 라는 이름의 React 앱 작성
  - 터미널에서 `npx create-react-app myfirstreact` 명령어 

## Create-react-app
- myfirstreact 폴더로 이동
```
터미널 > cd myfirstreact
```

- 명령어로 React 앱 실행
```
npm start
```
- 생성한 React 앱과 함께 새 브라우저 창이 나타남. 그렇지 않았다면 브라우저를 열고 localhost:3000 입력

<center>
<figure>
<img src="/assets/post-img/react/react-app.jpg" alt="" width="600">
<figcaption>처음 생성한 React 앱</figcaption>
</figure>
</center>

앞으로 챕터들에서 JavaScript의 ECMAScript6 (ES6) 문법들을 활용합니다
