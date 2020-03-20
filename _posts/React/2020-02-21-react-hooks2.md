---
layout: post
title: 실전형 리액트 Hooks 10가지 - useState
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 1 useState

## 1.0 Introduction to useState

hooks는 react의 state machine에 연결하는 기본적인 방법입니다. hooks를 사용하면 class를 사용하지 않고 함수만 사용하여 프로그래밍이 가능합니다. 알다시피 hooks가 생기기전엔 function Component엔 state를 작성할 수 없었습니다.  

useState는 **항상 2개의 value로 이루어져있는 배열을 반환**합니다. 첫번째는 변경할 만큼의 값, 두번째는 변경되는 값.  
useState는 말 그대로 상태를 변경하는 것 입니다. useState는 state를 초기 값을 세팅할 수 있는 옵션을 제공하고, 우리는 그 값을 1으로 주겠습니다. 

```javascript
const App = () => {
  const [item, setItem] = useState(1);
  const increament = () => setItem(item + 1);
  const decreament = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
    </div>
  );
};
```

기존 react는 state를 사용하기 위해선 반드시 class Component로 변경해야 했고, class는 this나 render등 여러 조건들을 고려해야 했지만 hooks를 사용한다면 그런 것은 신경쓰지 않아도 됩니다.

이번엔 같은 코드를 class를 사용하여 작성해보겠습니다.

```javascript
class AppUgly extends React.Component {
  state = { item: 1 };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.increament}>increament</button>
        <button onClick={this.decreament}>decreament</button>
      </div>
    );
  }
  increament = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };
  decreament = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      };
    });
  };
}
```

위에서 말했지만, class Component의 경우에선 this와 setState, previous state를 고려해야 합니다.
위 코드만 살펴봐도 hooks를 사용해야 하는 이유는 충분합니다. 100줄짜리 Component를 상상하면 아주 끔찍합니다.  

> [React hooks관련 공식 사이트](https://reactjs.org/docs/hooks-reference.html)

위 링크를 참고하면 다른 hooks들의 정보도 찾을 수 있습니다.