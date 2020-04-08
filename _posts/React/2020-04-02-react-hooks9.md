---
layout: post
title: 실전형 리액트 Hooks 10가지 - useBeforeLeave(useEffect)
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 useEffect

## 2.4 useBeforeLeave

useBeforeLeave는 tab을 닫으려 할 때 실행하는 함수입니다. 이전 장의 useConfirm는 창을 닫기 전에 confirm창을 띄웠습니다. useBeforeLeave는 사용자의 마우스가 브라우저를 벗어나 위쪽으로 가면 실행하는 함수입니다.  

이번에는 useEffect를 사용하겠습니다.  

```javascript
const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event; // event : MouseEvent의 객체
    if (clientY <= 0) { // clientY(마우스의 좌표값)가 0 이하
      onBefore();
    }
  };
  useEffect(() => { 
    document.addEventListener("mouseleave", handle); // 컴포넌트가 mount 되면, mouseleave 이벤트 생성
    return () => document.removeEventListener("mouseleave", handle); // 컴포넌트가 unmount 되면, mouseleave 이벤트 제거
  }, []); // 이벤트가 document에 추가 되는 것을 막음(한번만 실행)
};

const App = () => {
  const dontLeave = () => console.log("Pls dont leave");
  useBeforeLeave(dontLeave);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_9.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>
