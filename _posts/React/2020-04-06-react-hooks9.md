---
layout: post
title: 실전형 리액트 Hooks 10가지 - useEffect_useFadeIn & useNetwork
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 useEffect

## 2.5 useFadeIn & useNetwork

### useFadeIn 

useFadeIn은 말 그대로 서서히 나타나게 만드는 hook입니다. 이번 장에선 animation을 hook에 포함 시키는 법을 알아보겠습니다.  
useFadeIn hook은 기본적으로 useRef를 사용하여 하나의 element를 갖고 하나의 element만 return하게 하겠습니다.

```javascript
const useFadeIn = () => {
	const element = useRef(); // useRef를 사용하여 요소 선택
	return element;
}

const App = () => {
  const fadeInH1 = usefadeIn();
  return (
    <div className="App">
      <h1 {...fadeInH1}> Hello </h1> 
    </div>
  );
};
```

useFadeIn에 opacity style과 transition style을 넣어주겠습니다.

```javascript
const usefadeIn = () => {
  const element = useRef();
  useEffect(() => {
    // element 안으로 들어가기 위해서 useEffect 사용
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity 1s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } }; 
};

const App = () => {
  const fadeInH1 = usefadeIn();
  return (
    <div className="App">
      <h1 {...fadeInH1}> Hello </h1>
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_10.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

fadein 효과가 정상 작동하는 것을 확인했습니다. 조금 더 나아가서 duration과 delay옵션을 추가하겠습니다.

```javascript
const usefadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => { // element 안으로 들어가기 위해서 useEffect 사용
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = usefadeIn(1);
  const fadeInP = usefadeIn(1, 0.5); // delay 옵션 추가
  return (
    <div className="App">
      <h1 {...fadeInH1}> Hello </h1>
      <p {...fadeInP}>Welcome</p>
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_11.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

usefadeIn을 활용하여 fadein, fadeout 뿐만 아니라 다른 애니메이션으로도 활용 가능합니다.

----

### useNetwork

useNetwork는 navigator가 online또는 offline일 때 작동하게 하겠습니다.  
예를 들어 인터넷이 중간에 끊겼을 때 '인터넷이 끊겼습니다.' 라는 팝업을 띄어줄 수 있겠죠?

```javascript
const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine); // true 또는 false 값
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => { //componentWillUnMount 일 때 remove 실행
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const hanldeNetworkChange = online => { // 실행하는 change 함수
    console.log(online ? "It's Online state" : "It's Offline state");
  };
  const online = useNetwork(hanldeNetworkChange);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"} </h1>
      <p>Welcome</p>
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_12.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>
