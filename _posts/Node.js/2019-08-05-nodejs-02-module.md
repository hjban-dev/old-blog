---
layout: post
title: Nodejs 모듈과 NPM
category: Nodejs
tags: [Nodejs]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  
> Nodejs를 이용해서 간단한 서버 애플리케이션을 만들어 본다.
  
# 모듈과 NPM - nodejs 모듈

## 모듈 기초

- `모듈 = 부품` 한 덩어리
- 웹서버를 처음부터 끝까지 만드는 것은 어렵고 복잡한 일 / nodejs 에서는 기본적인 웹서버를 만들어 놓고(내부 모듈), 사용자가 쓸 수 있도록 함 

### Nodejs의 내부 모듈

- 내부 모듈은 노드 설치시 기본으로 설치. require() 사용하여 불러올 수 있음
- 내장 모듈에 대한 정보 > [nodejs api](http://nodejs.org/api)

---

## http 모듈 호출 코드

```javascript
const http = require('http');
// 사용자가 nodejs에서 제공하는(내부모듈) http 라는 모듈(부품)이 필요하면 require 함수를 통해서 http 모듈을 가져오고 상수에 담는다.
```

http 모듈 사용 설명서 : [nodejs document](https://nodejs.org/dist/latest-v10.x/docs/api/http.html)
- http.createServer() 메소드 : http 모듈의 Server객체를 리턴
- http.createServer().listen() 메소드

`모듈을 사용하기 위해서는 require라는 함수로 호출`한다.  
nodejs는 기본적으로 앱을 만들기 위한 부품을 기본적으로 제공한다. (ex. http, path, os)  
모듈의 사용설명서는 nodejs 사이트의 [document](https://nodejs.org/dist/latest-v6.x/docs/api/)에서 확인 가능하다.

## path 모듈 호출 코드

```javascript
const path = require('path'); //내부모듈 path 불러옴

const curPath = path.join('/Users/newDir', 'app.exe'); //path모듈 내부의 메서드 join()사용
// 매개변수를 합쳐 하나의 패스로 만들어줌. 구분자는 알아서 조정
console.log(curPath); //\Users\newDir\app.exe

const filename = "C:\Users\newDir\app.exe";
const dirname = path.dirname(filename); // 경로명 -> C:\Users\newDir
const basename = path.basename(filename); // 파일이름 -> app.exe
const extname = path.extname(filename); // 확장자명 -> .exe 
console.log(dirname, basename, extname); 
```

http 모듈 사용 설명서 : [nodejs document](https://nodejs.org/dist/latest-v10.x/docs/api/path.html)

### 터미널

```shell
$ node path.js
\Users\newDir\app.exe
C:\Users\newDir app.exe .exe
```

---

## npm 소개
- **npm = Node Package Manager** (command , cmd 라고 부르기도 함)
- node.js 를 설치하면 자동으로 함께 설치
- npm은 Node 계의 **앱스토어**!
  - 모듈의 설치, 삭제, 버전관리
- 외부 모듈 사용시에 npm에서 설치 필요
- [npm 사이트](https://www.npmjs.com/)

### 명령 프롬프트 기본 명령어

| 명령어 | 설명 | 
|:--------|:--------|
| dir | 현재 폴더의 요소를 출력합니다. |
| cd 폴더명 | 특정 폴더로 이동합니다. |
| .. | 상위폴더 |
| mkdir 폴더명 | 폴더 생성 |
| D: | D 드라이버로 이동. |

## npm 사용법

### npm 초기화
- cmd 창에 `npm init` 입력
- 새 npm 패키지 설정이라는 말은 = package.json 파일 생성
  - **package.json**은 프로젝트에 대한 표. 해당 프로젝트의 이름, 버전, 사용되는 모듈 등의 정보가 적혀있고, 이 파일 하나로 모듈 의존성 모듈 관리도 진행할 수 있다. 
  - <u>어떤 오픈 소스를 다운 받을 때 package.json만 있다면 해당 프로젝트가 사용하는 모듈이 어떤 것인지 알 수 있다.</u>

### npm 에서 외부 모듈 설치
- cmd 창에 `npm install 모듈명 --save` 입력
  - --save 명령어를 입력으로 package.json 에서 설치된 모듈과 버전 확인이 가능하다.
