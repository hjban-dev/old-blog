---
layout: post
title: 실전형 리액트 Hooks 10가지 - useEffect_useClick
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 useEffect

## 2.2 useClick

### useRef

useClick을 사용하기 전에 useRef() hook을 알아봅시다.  
컴포넌트를 작성하다 보면 태그를 직접 다뤄야 할 때가 있습니다. js의 경우에는 document.getElementById 메서드로 선택했었죠.  

React의 경우 특정 엘리먼트의 크기나 위치 등을 가져와 설정할 때 ref를 사용합니다.  
일단 기본적으로 `react useRef() 를 사용하여 Ref 객체를 만들고`, 이 객체를 우리가 선택하고 싶은 **DOM** 에 **ref** 값으로 설정해주어야 합니다. 

```javascript
const App = () => {
  const inputElement = useRef(); // useRef()를 사용하여 ref객체 생성
  console.log(inputElement); 
  // Object {current: HTMLInputElement} 객체로 구성되어 있고, 내부에 current라는 속성이 있음
  // current: <input placeholder="hi"></input> current는 태그 그 자체

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={inputElement} placeholder="hi" /> {/* ref 값으로 inputElement 지정 */}
    </div>
  );
};
```

위 코드의 inputElement의 객체를 살펴보면 ref속성으로 지정한 태그를 확인할 수 있습니다.  
이번엔 3초 뒤에 input 태그에 focus되도록 해봅시다.

```javascript
const App = () => {
  const inputElement = useRef();
  setTimeout(() => inputElement.current.focus(), 3000);

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={inputElement} placeholder="hi" /> 
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_5.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

### useClick

reference에 대해 이해했다면 useClick hook을 만들어봅시다.  
일단 useRef()를 사용하여 h1태그를 선택합니다.

```javascript
const useClick = onClick => {
  const element = useRef();
  return element; // { current: <h1>Hi</h1> }
};

const App = () => {
  const h1Element = useClick();
  return (
    <div className="App">
      <h1 ref={h1Element}>Hi</h1>
    </div>
  );
};
```

그리고 useEffect를 사용하여 만약 element.current가 있다면 click 하면 매개변수로 들어온 onClick 함수를 실행하는 event를 지정하겠습니다.

```javascript
const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick); // element.current에 args 함수 실행하는 이벤트 지정
    }
  });
  return element;
};

const App = () => {
  const sayHello = () => console.log("sayHello");
  const h1Element = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={h1Element}>Hi</h1>
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_6.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

보시다시피, Hi를 클릭하면 sayHello가 실행합니다.  
하지만 여기서 끝이 아닙니다. 지난 장에서 useEffect는 **componentDidMount**와 **componentDidUpdate**, **componentWillUnmount**의 구성이라고 했습니다.  
방금 한 부분은 componentDidMount의 상황에서 생기는 이벤트이고 이벤트가 발생 한 후 componentWillUnmount의 상황에서 정리를 해줘야 합니다.

```javascript
const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick === "function") { // componentDidMount, componentDidUpdate 일 때 실행하는 부분
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
    }
    return () => { // componentWillUnmount 일 때 실행하는 부분
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
```
