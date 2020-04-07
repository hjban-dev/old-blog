---
layout: post
title: 실전형 리액트 Hooks 10가지 - useEffect_useConfirm & usePreventLeave
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 useEffect

## 2.3 useConfirm & usePreventLeave

이번에 만들 두가지의 hook은 사실 hook이 아닙니다. useEffect와 useState를 사용하지 않는 함수 컴포넌트로 볼 수 있습니다.

### useConfirm

useConfirm은 이벤트를 실행하기 전에 사용자에게 확인을 받는 기능을 하는 함수입니다. 확인을 받는 과정은 브라우저 기능인 confirm기능을 활용하겠습니다.  

useConfirmd은 사용자가 어떤 것을 저장하거나 삭제할 때 유용하게 활용할 수 있습니다.  
실행 순서는 browser가 이벤트를 막고 confirm을 실행한 후, 확인을 하면 onConfirm 이벤트가 진행, 취소를 누르면 onCancel이벤트를 진행하게 할 것 입니다.  

먼저 useConfirm 함수를 선언하고, args로 message와 onConfirm와 onCancel 총 3개를 넣겠습니다.

```javascript
const useConfirm = (message = "", onConfirm, onCancel) => { // message의 기본값은 "" 
  if (!onConfirm || typeof onConfirm !== "function") { 
    return; // 매개변수 onConfirm가 없거나 onConfirm이 함수가 아나라면 return 실행
  }
  if (onCancel && typeof onCancel !== "function") { // onCancle은 필수요소는 아님
    return;
  }
  const confirmAction = () => { // confirm창의 응답에 따른 이벤트 실행 함수
    if (confirm(message)) { // 확인을 눌렀다면
      onConfirm();
    } else { // 취소를 눌렀다면
      onCancel();
    }
  };
  return confirmAction; 
};

const App = () => {
	
  const deleteWorld = () => console.log("delete"); // 확인 눌렀을 때 실행할 함수
  const abortWorld = () => console.log("Aborted"); // 취소 눌렀을 때 실행할 함수

  const conformDelete = useConfirm("r u sure?", deleteWorld, abortWorld);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={conformDelete} >Delete the world</button>
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_7.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

### usePreventLeave

usePreventLeave는 사용자들이 브라우저를 떠나기 전에 confirm창을 띄워 확인 받는 함수입니다.  


```javascript
const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener); // beforeunload 이벤트 리스너로 listener 지정
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener); // beforeunload 이벤트 제거
  return { enablePrevent, disablePrevent }; // 두 함수를 return
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};
```

사용자가 Protect를 클릭하는 순간 window는 beforeunload라는 이벤트를 갖게 되고, EventListner로 listener를 가지고 있습니다. 

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_8.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>
