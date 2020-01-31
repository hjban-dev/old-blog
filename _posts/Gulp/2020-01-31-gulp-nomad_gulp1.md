---
layout: post
title: Nomadcoder's Gulp Introduction
category: Gulp
tags: [Gulp]
comments: true
---

> 노마드코더의 Gulp 90분 마스터하기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 0 Introduction

## 0.1 Introduction

Gulp.js가 어떻게 webpack을 대체할 수 있는지, 또 어떻게 우리의 워크플로우를 자동화할 수 있을지 배워봅시다.  
우리는 pug, scss, 최신 javascript들을 Gulp로 Compiling하겠습니다.

---

## 0.2 Scaffolding Part One

> [Gulp 공식사이트 링크](https://gulpjs.com/)

Nico는 강의에서 맥과 yarn을 사용하고 있지만, 필자는 윈도우 + yarn + 조금 npm 을 사용하겠습니다.  

파일을 넣을 디렉토리 supergulp를 생성하고, 터미널에서 `yarn add gulp-cli -g`로 설치합니다.  
gulp-cli는 여러분이 콘솔에서 gulp를 호출할 수 있도록 도와주는 패키지입니다.

우리는 이 디렉토리 안의 파일들을 gulp를 사용해서 컴파일 할 것 입니다.  
supergulp안에 폴더 구성은 아래 이미지처럼 해주겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-1.jpg" alt="">
<figcaption>supergulp 폴더 구조(동영상캡쳐)</figcaption>
</figure>
</center>

그리고 img폴더에는 [Gulp 공식사이트](https://gulpjs.com/)에서 로고를 logo.svg 파일로 저장하겠습니다.

다시 터미널로 돌아가 yarn init으로 초기 세팅을 해주겠습니다. 세팅이 끝나면 package.json파일이 생성확인을 해주시면 됩니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-3.jpg" alt="">
<figcaption>yarn init으로 생성된 package.json파일</figcaption>
</figure>
</center>

---

## 0.3 Scaffolding Part Two

이번엔 util.js, main.js를 javascript의 최신 문법으로 작성하고,
index.pug, footer.pug, laygout.pug 파일도 작성하겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-4.jpg" alt="">
<figcaption>js와 pug파일들 내부 코드</figcaption>
</figure>
</center>

scss폴더 내부의 scss파일들도 세팅해주겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-5.jpg" alt="">
<figcaption>scss파일들 내부 코드</figcaption>
</figure>
</center>

reset.scss 파일의 내부는 구글에서 reset.css를 검색하여 복사해왔습니다.

이제 파일 구조 생성은 끝났고, webpack을 실행할 때 webpack.config로 초기 세팅을 합니다. 비슷하게 Gulp에서도 gulpfile.js를 만들어야 합니다. src에 파일 생성만 하고 gulp 설치를 마저 해봅시다.

우리는 아까 gulp-cli를 설치했었습니다. 말했듯이 gulp-cli는 console창에서 쓴다고 말했지만 만약 여러분이 터미널에서 gulp-cli를 사용하고 싶다면 package.json에 명령어를 추가해야 합니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-6.jpg" alt="">
<figcaption>package.json에 명령어 추가</figcaption>
</figure>
</center>

명령어를 보니 뭔지는 모르겠지만 gulp를 사용하겠다는 뜻 같죠? 이번엔 gulp를 설치해줍시다.

터미널에 yarn add gulp -D 으로 gulp 명령으로 설치하고, yarn dev 실행하겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-7.jpg" alt="">
<figcaption>터미널에 yarn dev 명령 실행</figcaption>
</figure>
</center>

에러부분은 무시하고 gulp가 제대로 작동하고 있고, gulpfile.js를 활용하고 있는게 확인됩니다.  
gulpfile.js에 코드를 추가해보겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-8.jpg" alt="">
<figcaption>gulpfile.js 파일</figcaption>
</figure>
</center>

첫번째 줄에 있는 import 키워드를 사용해서 gulp를 불러오려고 했는데 문법 오류라는 오류를 반환합니다. 세번째 줄에 있는 코드처럼 require를 사용해서 불러오라고 합니다.  
gulp가 최신 문법을 이해하지 못하고 있습니다!

하지만 저희는 최신 자바스크립트 문법을 사용하고 싶으니, babel을 사용하겠습니다.

---

## 0.4 Gulp + Babel

우리는 저번 시간에 gulp를 설치했고 dev와 build 명령어도 추가하여 터미널에서도 테스트할 수 있게 만들었습니다. 하지만 gulp가 최신 문법을 이해하지 못하는게 문제였습니다.

자 이제 babel을 사용해보겠습니다.  
gulpfile.js의 파일명을 gulpfile.babel.js로 변경하고, 같은 위치에 .babelrc파일을 생성하겠습니다.  

.babelrc파일 내부엔 "@babel/preset-env"이라는 이름은 presets을 생성하겠습니다.

그리고 터미널 창에가서 gulp dev를 실행하겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-8.jpg" alt="">
<figcaption>터미널에서 gulp dev 실행(동영상캡쳐)</figcaption>
</figure>
</center>


그랬더니 외부모듈을 찾을 수 없다는 에러가 여러개 뜰겁니다. 
우리가 아직 babel을 설치하지 않았기 때문입니다.  

강의에서는 yarn add @babel/{register, core} 를 실행하라고 했는데 필자는 자꾸 오류떠서
아래 링크 확인하고 **npm install @babel/register @babel/core @babel/preset-env -D** 로 실행했더니 실행 되었습니다.

> [구글링해서 Stackoverflow 참고](https://stackoverflow.com/questions/29207878/requirebabel-register-doesnt-work)

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-9.jpg" alt="">
<figcaption>package.json의 devDependencies확인</figcaption>
</figure>
</center>

지금까지 총 4개의 모듈을 설치했고, package.json에서 확인 가능합니다.
앞에 붙는 @ 표시는 최신 버전이라는 뜻입니다.

자 다시 터미널 창에서 gulp dev를 실행해보겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_0-10.jpg" alt="">
<figcaption>터미널에서 gulp dev를 실행</figcaption>
</figure>
</center>

결과는 babel을 사용하고 있다고 나오고, 중간의 빨간 글씨는 현재 작업이 없다는 의미이고 오류는 아닙니다. 
이로써 우리가 gulp프로젝트를 시작하는 방법을 알게 되었습니다.
파일 구조를 만들었던 단계가 아니라, .packages.json, bulpfile.babel.js, .babelrc 파일 등이 gulp를 구성하는 단계입니다.
