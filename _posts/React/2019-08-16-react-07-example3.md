---
layout: post
title: scoreboard(클릭으로 점수 +, - 기능) 예제 만들기 3
category: React
tags: [React]
comments: false
---
> ReactJS 이 정도는 알아야지 - 이효범 교재와 KOSMO React 프로그래밍 수업을 듣고 정리합니다.  
> [w3school](https://www.w3schools.com) 참고

# scoreboard(클릭으로 점수 +, - 기능) 예제 만들기 3

## state 사용하여 Counter 컴포넌트 재구성

### Counter function 컴포넌트를 class 컴포넌트로 변경

Counter 컴포넌트에서 사용되는 score를 앞에서는 부모로 부터 props 형태로 받았다. 이렇게 부모로부터 물려받게 되면 – + 버튼을 눌러서 score 값을 변경할 수 없다. ( **다시 한번 말하지만 props는 변경 불가** )  
– + 버튼을 눌렀을 때 score 값이 변경이 되어야 하므로 **props를 state로 관리**해야 한다.  
  
Counter 컴포넌트와 같이 특정 컴포넌트에서만 관리되는 state는 local state 라고 하고 다른 컴포넌트와 공유되어야 하는 컴포넌트는 부모에 state를 두고 공유해야 하는데 이와 같은 컴포넌트는 `application 컴포넌트`라고 한다.

function으로 만든 컴포넌트는 props를 parameter로 받아들여서 JSX or React Element를 리턴하는 단순한 컴포넌트로 static한 컴포넌트다.  
입력된 값을읽을 수는 있지만 동적인 상태를 유지할 수는 없다. 그래서 function component를 **stateless function component**라고 하고, 상태유지를 하기 위해서는 먼저 `function component를 class component`로 변경해야 한다.

```javascript
// class component로 변경
class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}
```

### Counter 컴포넌트의 props를 state로 변경

score를 동적인 값으로 만들기 위해서 state로 바꿔야 한다. constructor()를 추가하고 this.state에 score를 추가한다.

```javascript
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }
  
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}
```

constructor() 없이 class의 속성으로 선언해도 동일한 결과를 얻는다. constructor()에서 this로 속성을 추가하는것은 <u>es5의 생성자함수와 동일</u>하다. 
클래스 바로 아래에 속성으로 추가하는 것은 es6의 퍼블릭 속성인데, 초기 es6 문법에 없다가 stage4 에서 추가된 문법이다. 클래스 바로 아래에 var, let, const 같은 것이 없이 선언되면 클래스의 퍼블릭 속성이라고 기억하자.

```javascript
class Counter extends React.Component {
  state = {
    score: 0
  };
  
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}
```

React devtools에서 Counter 컴포넌트에 props 이외에 state가 추가된것을 확인하고 임의의 값으로 변경을 해보자.

<center>
<figure>
<img src="/assets/post-img/react/state-check.jpg" alt="" width="255">
<figcaption>React devtools에서 Counter 컴포넌트에 props와 state 확인</figcaption>
</figure>
</center>
