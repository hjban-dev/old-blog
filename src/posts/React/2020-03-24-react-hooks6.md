---
layout: post
title: 실전형 리액트 Hooks 10가지 - useTitle(useState, useEffect)
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 useEffect

## 2.1 useTitle

useEffect를 이용하여 title을 바꾸는 useTitle hook을 만들어 보겠습니다.

```javascript
const useTitle = iniitialTitle => {
  const [title, setTitle] = useState(iniitialTitle); // useTitle의 매개변수 iniitialTitle를 초기값으로 설정
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]); // 컴포넌트가 마운트 될 때와 title이 업데이트 될 때, updateTitle 실행
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("My React App..."); // App 컴포넌트에서 useTitle 함수 사용
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
```
일단 App 컴포넌트가 실행되면서 titleUpdater 선언됨.  
args로 "My React App..."를 넘겼기 때문에 useTitle함수의 useState가 할당된 title은 "My React App..."  
App 컴포넌트가 마운트 되면 useEffect가 updateTitle을 실행  
updateTitle 함수의 실행으로 title태그 내부 텍스트가 "My React App..."로 변경  
 
아직 useEffect의 두번째 args인 title이 변경되지 않았기 때문에 재실행은 되지 않고 "My React App..."로 끝납니다.  
이번엔 setTimeout함수를 사용하여 title을 변경해보겠습니다.

```javascript
const useTitle = iniitialTitle => {
  const [title, setTitle] = useState(iniitialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("My React App...");
  setTimeout(() => { // 3초후 titleUpdater 실행
    titleUpdater("home");
  }, 3000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
```

titleUpdater("home")을 실행하면 useTitle을 실행하고, useState()로 인한 title이 변경됩니다.  
title이 변경되면 useEffect가 실행되고, title태그 내부 텍스트는 "home"으로 변경

