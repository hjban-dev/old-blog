---
layout: post
title: Nomadcoder's ReactJS Introduction, Setup
category: React
tags: [React]
comments: false
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 0 Introduction

## 0.0 Introduction

2019.07 버전 강의입니다.  
이 강좌에서 리액트를 사용하는 이유, 방법, API에서 데이터를 가져오는 방법 등을 배웁니다.

## 0.1 Requirements

node js, npm, npx, git 필요  
설치되어 있는지는 cmd 창에서 확인 가능 ex) node -v, git -v 등

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_1.jpg" alt="">
<figcaption>설치가 되어 있다면 결과 값으로 버전이 나옴</figcaption>
</figure>
</center>

## 0.2 Theory Requirements

React를 시작하기 전에 html, css와 기본적인 js 지식을 알아야 합니다.

## 0.3 Why React

왜 React 인가?

1. React는 페이스북이 만들었다. 그리고 회사들이 점점 React를 활용하여 사이트를 운영하고 있다.(페이스북, 에어비앤비, 넷플릭스, 슬랙... 등)
2. 2020년 1월 기준 react의 주간 다운로드 수는 약 600만명 : 페이스북은 React에 많은 시간, 돈, 자원을 지원 하고 있고, React는 점점 더 많은 자원, 커뮤니티, 서포트를 얻을 수 있음.
3. React는 현재 프론트엔드 사용 언어 중 압도적으로 많은 사용자
4. 프레임워크와 달리, React는 Javascript로 이루어져 있어 만약 React가 사라지더라도 사용자의 Javascript 지식은 사라지지 않음.

많은 회사들은 React를 사용하고 있고, React를 사용하는 더 많은 사용자들이 있습니다. 또한 너를 더 멋진 Javascript 개발자로 만들어 줄 수 있습니다.

------

# 1 Setup

## 1.0 Creating your first React App

create-react-app 설치를 했다는 가정하에 시작합니다.  
* c-r-a 설치는 이전 포스팅 참고  
  <https://hjban-dev.github.io/react/2019/08/19/react-10-create-react-app/> 

## 1.1 Creating a Github Repository

github에서 새 Repisitory를 생성  
(React 코드를 git에 업로드 하기 위해 생성하는 과정이고, React와 git은 사실상 무관하니 생략해도 됩니다.)

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_1-1.jpg" alt="">
<figcaption>github에서 새 repisitory 생성</figcaption>
</figure>
</center>

생성 후 movie_app 작업하던 터미널 창에서

1. git init
2. git remote add origin 새 Repisitory url (ex) git remote add origin https://github.com/hjban-dev/nomad_movie_app
3. git add .
4. git commit -m "커밋메세지" (ex) git commit -m "#1.0 Creating your first React App"
5. git push origin master

잠시 후에 github Repisitory 창 새로 고침 하면 movie_app 폴더 업로드 되어 있음.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_2.jpg" alt="">
<figcaption>push가 완료된 git repository</figcaption>
</figure>
</center>

## 1.2 How does React work?

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4.jpg" alt="">
<figcaption>왼쪽은 public>index.html, 오른쪽은 src>index.js 와 src>app.js</figcaption>
</figure>
</center>

Movie_App 폴더에 필요하지 않은 파일은 전부 지우고, app.js의 app 컴포넌트에 <strong><div>hello!!!</div></strong>를 추가하였다.  
오른쪽 창을 보면 `index.js`가 `app.js`를 **import**하여 가져왔고, <strong>ReactDOM.render(<App />, document.getElementById('root'));</strong>으로 `#root`안에 넣어주는 것을 확인할 수 있다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3_1.jpg" alt="">
<figcaption>페이지 소스보기 했을 때 결과. 빈 #root만 보인다.</figcaption>
</figure>
</center>

페이지 소스에서는 보이지 않는 이유는 hello가 없는 빈 index.html 파일을 보고 있기 때문이다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3.jpg" alt="">
<figcaption>react가 app.js의 컴포넌트를 #root 안에 넣어서 보여준다.</figcaption>
</figure>
</center>

React는 load 할 때, html을 `Virtual Dom React`을 사용하여 보여준다. 가상 돔은 React가 빠른 이유이기도 하다.
