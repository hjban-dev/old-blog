---
layout: post
title: Nomadcoder's ReactJS Making the Movie App 2
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 4 Making the Movie App

## 4.2 Styling the Movies

전 장에서 Component를 불러와 노출시키는 것까지 진행했으니, 이번엔 불러온 Component에 스타일을 적용해봅시다. 

style을 적용하기 전에 각각의 태그에 클래스를 넣어주겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-10.jpg" alt="">
<figcaption>태그와 클래스로 정리한 App Component</figcaption>
</figure>
</center>

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-11.jpg" alt="">
<figcaption>태그와 클래스로 정리한 Movie.js</figcaption>
</figure>
</center>

이전 장에 있던 id값은 사용하지 않아서 지워줬습니다. 필자가 **class="container"**속성을 줬는데 사실 **className="container"**으로 사용해야 합니다.  
React의 Component안에 class속성을 줄 땐 `className`이라고 지정해주어야 합니다.  
왜냐하면 React가 선언하는 class인지 속성의 class인지 확인하지 못하기 때문입니다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-12.jpg" alt="">
<figcaption>실행되는 화면</figcaption>
</figure>
</center>

아름다운 구조와 멋진 클래스로 구성이 되었다면 이번엔 SCSS를 사용해서 style속성을 지정해봅시다. SCSS를 사용하기 위해선 윈도우에 SCSS가 설치되어 있어야 하고, 설치가 되어 있다면 터미널 창에서 npm install node-sass로 node-sass까지 설치해주어야 합니다.

js파일이 있는 동일 경로 src에 Movie.scss를 생성하고 내부 스타일을 지정해주겠습니다.
scss파일도 import는 동일합니다. 확장자만 scss로 선택해주면 됩니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-12.jpg" alt="">
<figcaption>실행되는 화면</figcaption>
</figure>
</center>

또한 html처럼 React도 내부에서 인라인으로 스타일을 지정해줄수도 있습니다. 그럴땐 중괄호를 두번 묶어주고, 속성을 Camelcase로 사용해주면 됩니다. 하지만 이 방법은 안쓰는게 좋습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-14.jpg" alt="">
<figcaption>React에서 인라인으로 스타일 지정</figcaption>
</figure>
</center>










