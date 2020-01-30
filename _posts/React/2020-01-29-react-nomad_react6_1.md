---
layout: post
title: Nomadcoder's ReactJS Routing Bonus 1
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 6 Routing Bonus

## 6.0 Getting Ready for the Router

이번엔 완성했던 Movie App에 조금 더 인터랙션을 추가하고, 상단에 메뉴를 추가해봅시다.

한번쯤 들어보셨던 얘기겠지만, React는 `SPA`(Single Page Applicatoin)입니다. 페이지가 하나인 어플리케이션이라는 말 입니다. 자, 다시 생각해보면 페이지가 하나이기 때문에 페이지 이동이 불가능 하겠죠? 하지만 이럴 때 **일반 웹 사이트처럼 URL에 따른 페이지 이동을 할 수 있게 하는 것이 Router** 입니다.  

그리고 우리는 react-router-dom 라이브러리를 사용하겠습니다. 참고로 react-router는 공식 라이브러리는 아닙니다. 하지만 React 사용자들에게 가장 많이 사용되고 있습니다. 만약 여러분이 React로 어플리케이션을 만든다면 react-router는 필수 일 것입니다.  

> [react-router의 공식페이지 링크](https://reacttraining.com/react-router/web/guides/quick-start)

설치는 터미널 창에 npm install react-router-dom 입력으로 가능합니다.  

그리고 우리가 만들었던 Movie App의 폴더를 정리하겠습니다. 모든 파일들이 전부 들어가 있던 src폴더를 routes폴더와 components폴더를 생성하여 각각의 기능에 따라 구분하겠습니다.  

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-2.jpg" alt="">
<figcaption>src폴더의 파일 구조(동영상 캡쳐)</figcaption>
</figure>
</center>

우리는 **두 개의 route**를 생성할 것이고, 하나는 현재 노출되고 있는 영화리스트 페이지인 home과 다른 하나는 영화 각각의 about 페이지를 만들겠습니다.  

기존의 App.js에 있는 부분을 전부 Home.js 내부에 옮겨 새 route로 만들고, App.js에서는 react-router-dom을 사용하여 요청에 맞는 컴포넌트를 매칭시키겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-1.jpg" alt="">
<figcaption>기존의 App.js를 전부 Home.js에 옮긴 후 이름 변경</figcaption>
</figure>
</center>

Component의 이름과 import 파일의 경로를 변경했고, 기존의 App.scss를 Home.scss로 파일명을 바꿨습니다.  

그리고 기존의 App.js는 다 지우고, 단순한 function Component 하나만 만들어두겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-3.jpg" alt="">
<figcaption>function Component로 구성된 App.js</figcaption>
</figure>
</center>

자 위에서 말했듯이, 일반 웹 사이트처럼 URL에 따른 페이지 이동을 할 수 있게 하는 것이 Router 라고 했죠? 우린 React에게 Home과 About Component 둘 다 줄 것이고, 페이지 이동 명령을 받아 알맞은 Component를 반환하게 할 것 입니다.  
다음 장에서 Router를 알아봅시다.

---

## 6.1 Building the Router

우리는 App.js에 Router를 반환하게 만들겁니다. 
위 이미지를 참고하면 지금의 React는 선택할 필요 없이 무조건 <div>Something</div>를 Return하고 있습니다.

또 다시 한번 설명하자면, Router가 하는 일은 현재의 url을 확인하고, 그에 맞는 Component를 반환합니다.

> [react-router의 공식페이지 링크](https://reacttraining.com/react-router/web/guides/quick-start)

react-router-dom에는 여러 router가 있는데 우리는 그 중 HashRouter와 Route를 사용할 겁니다. 두 router를 'react-router-dom'에서 import 해오고, HashRouter를 return 해주겠습니다.  
그리고 HashRouter안에 Route를 넣어주겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-4.jpg" alt="">
<figcaption>HashRouter와 Route로 구성된 App.js</figcaption>
</figure>
</center>

그리고 Route안에는 매우 중요한 props가 들어가야 합니다.. 하나는 **렌더링할 경로**이고, 다른 하나는 **prop이 무엇을 불러올지** 정해주면 됩니다.

우리는 <u>사용자가 /about 을 들어온다면 about Component를 return하게 할겁니다</u>.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-5.jpg" alt="">
<figcaption>about Component를 return하는 App.js와 About.js의 구성</figcaption>
</figure>
</center>

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-6.jpg" alt="">
<figcaption>/about 경로에서 About Component를 return하는 결과</figcaption>
</figure>
</center>

위 경로에서 hash(#)는 HashRouter를 사용해서 나오는 결과로 보이니 지금 신경쓰지 않기로 합시다.  

위 결과에서 알 수 있는 것은 우리는 **경로에 따라 나오는 뷰 페이지를 변경할 수 있다**는 뜻입니다. 이번에는 인덱스 페이지에선 Home Component를 return 하게 해봅시다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-7.jpg" alt="">
<figcaption>path를 인덱스로 가지는 Route추가</figcaption>
</figure>
</center>

그런데 위 코드를 보시면 **exact={true}**라는 부분이 추가 되었습니다. 저 속성의 의미는 정확히 인덱스 페이지에서만 작용한다는 뜻입니다. 저 속성이 없으면 사용자가 가는 모든 경로에 Home Component가 return 될 것 입니다.

이제 우리는 

1. http://localhost:3000/#/ 
2. http://localhost:3000/#/about 

두 개의 각각 다른 Compenent를 return하는 두 페이지를 만들었습니다.
