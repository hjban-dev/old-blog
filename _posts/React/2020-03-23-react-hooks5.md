---
layout: post
title: 실전형 리액트 Hooks 10가지 - useEffect
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 useEffect

## 2.0 Introduction to useEffect

useEffect Hook은 **componentDidMount와 componentDidUpdate, componentWillUnmount라고 생각**하면 됩니다.  

아래코드를 살펴봅시다.
sayHello라는 함수를 선언했고, useEffect의 매개변수로 sayHello()를 실행하겠습니다.

```javascript
const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [anumber, setaNumber] = useState(0);

  useEffect( ()=> sayHello() );

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(anumber - 1)}>{anumber}</button>
    </div>
  );
};

export default App;
```

아까 useEffect Hook은 componentDidMount와 componentDidUpdate, componentWillUnmount라고 했죠?  
**componentDidMount**는 컴포넌트가 마운트된 직후,  
**componentDidUpdate**는 갱신이 일어난 직후  
**componentWillUnmount**는 컴포넌트가 마운트 해제되어 제거되기 직전에 실행 되는 컴포넌트 입니다.  

위 코드에서 useEffect Hook 때문에 App 컴포넌트가 마운트된 직후와, 갱신이 일어날 때 마다 sayHello()가 실행됩니다.

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_3.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

브라우저 새로고침 후에 hello가 보이시죠? 그리고 버튼을 누를때 마다도 실행되고 있습니다.  

useEffect는 사실 2개의 인자를 받습니다. 첫번째는 function으로의 effect이고, 두번째 인자는 deps로 만약 deps가 있다면 deps의 리스트에 있는 값일 때만 첫번째 인자인 effect가 실행되도록 합니다.  

두번째 args에 number를 넣어봅시다.

```javascript
const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [anumber, setaNumber] = useState(0);

  useEffect(sayHello, [number]);

  (...)
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_3.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

두번째 args에 number를 넣었기 때문에 증가 버튼을 누를때만 sayHello함수가 실행됩니다.  
만약 컴포넌트가 마운트 되었을 때만 실행 시키고 싶다면 두번째 매개변수를 `[]` 형태인 빈 배열로 두면 됩니다.
