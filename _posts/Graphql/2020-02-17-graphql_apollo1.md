---
layout: post
title: Movie Web App - Introduction
category: GraphQL
tags: [GraphQL, React, Apollo]
comments: false
---

> 노마드코더의 GraphQL로 영화 웹 앱 만들기를 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 0 Introduction

## 0.1 Introduction

이 강의는 React Apollo Movie입니다. GraphQL API를 위한 React Client를 만들겠습니다.  
강의를 듣기 위해선 React, React Hooks, GraphQL API를 알아야 합니다.

---

## 0.2 Set Up

create-react-app으로 프로젝트를 생성, git repository생성 후 연동

```
$ create-react-app apollo-movie
```

create-react-app으로 생성된 폴더의 src폴더 내부는 App.js와 index.js만 남기고 모두 삭제  
components폴더 생성 후 App.js파일을 이동시킵니다.  

styled-components, react-router-dom, apollo-boost, @apollo/react-hooks, graphql 설치

```
$ yarn add styled-components react-router-dom apollo-boost @apollo/react-hooks graphql
```

---

## 0.3 Router and Styles

routes폴더 생성 후 Home.js와 Detail.js 생성  
App.js에 router를 만들어봅시다.

```javascript
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
```
yarn start로 http://localhost:3000/를 확인해보고 정상 작동한다면 router가 잘 생성된 것이다.

