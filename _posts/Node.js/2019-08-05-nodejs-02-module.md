---
layout: post
title: 모듈과 NPM - nodejs 모듈
category: Nodejs
tags: [Nodejs]
comments: false
---

# 모듈과 NPM - nodejs 모듈
> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.
> Nodejs를 이용해서 간단한 서버 에플리케이션을 만들어 본다.

## 모듈 기초

- `모듈 = 부품` 한 덩어리
- 웹서버를 처음부터 끝까지 만드는 것은 어렵고 복잡한 일 / nodejs 에서는 기본적인 웹서버를 만들어 놓고(내부 모듈), 사용자가 쓸 수 있도록 함
- 

### nodejs의 내부 모듈

- 내부 모듈은 노드 설치시 기본으로 설치. require() 사용하여 불러올 수 있음
- 내장 모듈에 대한 정보 [nodejs api](http://nodejs.org/api)

## http 모듈 호출 코드

```javascript
const http = require('http');
//위 코드가 동작하게 위해서는 nodejs에서 제공하는(내부모듈) http라는 모듈(부품)이 필요하다.
//require 함수를 통해서 http 모듈을 가져오고 상수에 담는다.
```

- http 모듈 사용 설명서 : [nodejs document](https://nodejs.org/dist/latest-v10.x/docs/api/http.html)
    - http.createServer() 메소드 : http 모듈의 Server객체를 리턴
    - http.createServer().listen() 메소드

- `모듈을 사용하기 위해서는 require라는 함수로 호출`한다.
- nodejs는 기본적으로 앱을 만들기 위한 부품을 기본적으로 제공한다. (ex. http, path, os)
- 부품의 사용설명서는 nodejs 사이트의 [document](https://nodejs.org/dist/latest-v6.x/docs/api/)에서 확인 가능하다.

## path 모듈 호출 코드

```javascript
const path = require('path'); //내부모듈 path 불러옴

const curPath = path.join('/Users/newDir', 'app.exe'); //path모듈 내부의 메서드 join()사용
// 매개변수를 합쳐 하나의 패스로 만들어줌. 구분자는 알아서 조정
console.log(curPath); //\Users\newDir\app.exe

const filename = "C:\\Users\\newDir\\app.exe";
const dirname = path.dirname(filename); // 경로명 -> C:\Users\newDir
const basename = path.basename(filename); // 파일이름 -> app.exe
const extname = path.extname(filename); // 확장자명 -> .exe 
console.log(dirname, basename, extname); 
```

- http 모듈 사용 설명서 : [nodejs document](https://nodejs.org/dist/latest-v10.x/docs/api/path.html)

### 터미널

```shell
$ node path.js
\Users\newDir\app.exe
C:\Users\newDir app.exe .exe
```
