---
layout: post
title: Nomadcoder's ReactJS State 2
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 3 State

## 3.2 Component Life Cycle

우리는 Component가 생성된 후 render가 실행된다고 했는데 사실 render가 실행되기 전,후로 호출되는 몇 가지 function이 있습니다. 이번 장에서는 React가 Component를 생성하고 없앨 때 진행되는 Cycle에 대해 알아봅시다.

React class Component는 render말고 더 많은 걸 갖고 있습니다. 모든 Component들은 여러종류의 Life Cycle(생명주기) method를 가집니다.  

우리는 자주 쓰는 **Mounting**, **Updating**, **Unmounting** 세가지만 알아봅시다.

### Life Cycle : Mounting

> React 공식 홈페이지  
><https://reactjs.org/docs/react-component.html#mounting> - 원글  
><https://ko.reactjs.org/docs/react-component.html#mounting> - 한국어 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-7.jpg" alt="">
<figcaption>공식 사이트의 Mounting 캡쳐</figcaption>
</figure>
</center>

Life Cycle 중 Mounting은 처음 DOM상에 삽입될 때 위 메서드의 순서대로 호출됩니다. 처음 페이지를 로드 했을 때라고 생각하면 됩니다. 확인해봅시다.

우리는 굵은 글씨로 쓰여 있는 메서드만 알아볼겁니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-6.jpg" alt="">
<figcaption>App Component의 Component Life Cycle 테스트</figcaption>
</figure>
</center>

위의 순서대로 constructor, render, componentDidMount 순으로 실행되는 것을 확인 할 수 있습니다.

* constructor()는 자바스크립트에서 class 내에서 작성된 오브젝트를 작성하고 초기화하기위한 특수 메소드입니다. React에서 나온 것이 아니기에 constructor, super 부분은 Javascript를 참고 하시면 됩니다.  
  W3School - <https://www.w3schools.com/jsref/jsref_constructor_class.asp>

### Life Cycle : Updating

> React 공식 홈페이지  
><https://reactjs.org/docs/react-component.html#updating> - 원글  
><https://ko.reactjs.org/docs/react-component.html#updating> - 한국어 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-8.jpg" alt="">
<figcaption>공식 사이트의 Updating 캡쳐</figcaption>
</figure>
</center>

Updating은 업데이트 되었을 때 실행됩니다. Add나 Minus버튼을 클릭해서 state를 변경할 때 실행된다는 것 입니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-9.jpg" alt="">
<figcaption>Updating 실행결과</figcaption>
</figure>
</center>

constructor, render, componentDidMount 실행 후 Add button을 누르니  
render, componentDidUpdate가 실행되었습니다.

### Life Cycle : Unmounting

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-10.jpg" alt="">
<figcaption>공식 사이트의 Unmounting 캡쳐</figcaption>
</figure>
</center>

마지막 Unmounting은 Component가 DOM에서 제거될 때 호출됩니다. 다른 작업을 하거나 페이지를 이동하거나 할 때 호출되지만 현재 코드에선 확인 할 수 없으니 그렇다고 생각합시다.

---

## 3.3 Planning the Movie Component

우리는 Component Life Cycle을 알게 되었습니다! 이를 활용해서 간단한 예제를 작성 해보겠습니다!

전 강의에서 했던 예제는 모두 지우고, App Component의 state에 isLoading 이라는 값을 넣어주겠습니다. 그리고 javascript의 삼항연산자(ternary operator)로 isLoading이 true 이면 "Loading"을 반환, 그렇지 않다면 "We are ready!"를 반환하게 만들겠습니다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-11.jpg" alt="">
<figcaption>isLoading을 활용하여 텍스트를 반환하는 코드와 결과</figcaption>
</figure>
</center>

잘 노출되고 있지만, 우리는 this.state를 자꾸 쓰고 싶지 않으니 javascript의 es6문법을 활용하여 this.state를 하나의 상수로 만들어 주겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-13.jpg" alt="">
<figcaption>this.state를 상수로 만든 코드</figcaption>
</figure>
</center>

자, 이제 우리 이전 강의에서 React Component가 Mounting 할 때, render method 다음에 componentDidMount method가 실행된다고 배웠습니다?  
이번엔 render 함수가 실행 되고 나서 3초 후에 isLoading을 false로 바꾸는 코드를 작성해봅시다.

우리는 componentDidMount() method를 실행 할 것이고, componentDidMount() method 안에는 Javascript 코드인 setTimeout함수를 실행하겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_4-14.jpg" alt="">
<figcaption>componentDidMount()의 실행과 결과</figcaption>
</figure>
</center>

setTimeout으로 3초후에 setState() method가 실행되고, 브라우저에서도 확인 할 수 있습니다.  
우리는 위의 방법과 비슷하게 Movie App을 실행할겁니다!
