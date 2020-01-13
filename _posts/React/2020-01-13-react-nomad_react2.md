---
layout: post
title: 노마드코더의 ReactJS 소개
category: React
tags: [React, git]
comments: false
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. (https://academy.nomadcoders.co/)

# 1 Setup

## 1.0 Creating your first React App

create-react-app 설치  
<https://hjban-dev.github.io/react/2019/08/19/react-10-create-react-app/> c-r-a 설치는 이전 포스팅 참고

## 1.1 Creating a Github Repository

github에서 새 Repisitory를 생성

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
