---
layout: post
title: scoreboard(클릭으로 점수 +, - 기능) 예제 만들기 2
category: React
tags: [React]
comments: false
---
> ReactJS 이 정도는 알아야지 - 이효범 교재와 KOSMO React 프로그래밍 수업을 듣고 정리합니다.  
> [w3school](https://www.w3schools.com) 참고

# scoreboard(클릭으로 점수 +, - 기능) 예제 만들기 2

## 구성
1. Header 컴포넌트와 Player 컴포넌트로 구성
  - Header 안에는 title과 플레이어 수로 구성
  - Player 안에는 선수 이름과 점수로 구성 

<center>
<figure>
<img src="/assets/post-img/react/scoreboard.jpg" alt="" width="563">
<figcaption>scoreboard preview</figcaption>
</figure>
</center>

### Header 컴포넌트
- function 컴포넌트로 제작

```javascript
function Header() {
  return (
    <header className="header">
      <h1 className="h1">Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}
 
ReactDOM.render(<Header />, document.getElementById('root'));
```

- ECMAScript6 화살표 함수 사용

```javascript
const Header = () => (
  <header>
    <h1>Scoreboard</h1>
    <span className="stats">Players: 1</span>
  </header>
);
 
ReactDOM.render(<Header />, document.getElementById('root'));
```

### Player 컴포넌트

- 이름 부분과 점수 부분 제작

```javascript
const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Neju
      </span>
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
}
 
ReactDOM.render(<Player />, document.getElementById('root'));
```

- 점수 부분을 counter 컴포넌트로 분리

```javascript
const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        LDK
      </span>
      <Counter />
    </div>
  );
}
 
const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}
 
ReactDOM.render(<Player />, document.getElementById('root'));
```

### Player 컴포넌트
- 전체를 감싸는 App 컴포넌트 생성 후 렌더링

```javascript
const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      
      {/*Players List*/}
      <Player />
    </div>
  );
}
 
ReactDOM.render(<App />, document.getElementById('root'));
```
