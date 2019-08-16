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

## props 사용하여 scoreboard 제작

### App 컴포넌트 재구성
Header 컴포넌트를 html attribute처럼 설정한다.  
title은 스트링으로 넘어갈 것이고 totalPlayers는 JSX expression으로 설정했으므로 number 타입으로 넘어간다.
JSX에서 주석은 자바스크립트와 같으나 {}로 묶어준다 > {/* 주석 내용 */}

```javascript
const App = () => {
  return (
    // 이전 코드는 <Header />로 구성되어 있었음
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={1 + 10} />
      
      {/*Players List*/}
      <Player />
    </div>
  );
}
```

### Header 컴포넌트 재구성

```javascript
const Header = (props) => {
  console.log(props); 
  // props가 객체로 넘어온다는것을 확인
  // 결과 > {title: "My scoreboard!", totalPlayers: 11}
  return (
    <header className="header">
      <h1 className="h1">{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  )
}
```

다시 한번 짚어야 할 것은 pros는 read only (or immutable) 이라는것 이다.  
읽기만 가능. 그 `값을 변경하면 안된다`.  
컴포넌트 트리에서 높은쪽에 있는 부모 컴포넌트가 property 값을 소유하고 있고 또한 수정 등의 컨트롤을 할 수 있지만 **자식이 그 값을 변경하게 되면 리액트는 에러**를 던진다.

---

## Player가 한명이 아니라 아래와 같이 여러명이 있을 경우

### Player의 name 과 score props를 App 컴포넌트에서 전달

```javascript
const App = () => {
  return (
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={1 + 10} />
      
      {/*Players List 반복*/}
      <Player name="LDK" score={50} />
      <Player name="HONG" score={60} />
      <Player name="KIM" score={70} />
      <Player name="PARK" score={80} />
    </div>
  );
}
```

Player 컴포넌트에서 name 을 표시하고 score는 Player 컴포넌트에서 처리하는게 아니라 하위 컴포넌트인 Counter 컴포넌트로 다시 넘겨야 한다.  

```javascript
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
		{/* 반복 */}
		{props.name} 
      </span>
	  {/* props 전달 */}
	  <Counter score={props.score} /> 
    </div>
  );
}
 
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}
```

Player 컴포넌트를 여러번 쓰는 방법 대신 정보를 가지고 있는 json Array 데이터를 만들자.  
React는 자바스크립트 언어만 사용해서 반복문 구현 가능  

```javascript
const players = [
  {name: 'LDK', score: 30},
  {name: 'HONG', score: 40},
  {name: 'KIM', score: 50},
  {name: 'PARK', score: 60},
];
```

이 json Array를 렌더링할 때 top-level 엘리먼트인 `App`에 `props`로 입력한 후에 다시 App 컴포넌트에서 props로 받은 후에 player에게 전달  
props 최상단 엘리먼트가 모든 props를 다 가지고 있다가 그걸 자식에게 넘겨주는 형태가 바람직  

```javascript
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={props.initialPlayers.length} />
      
      {/*2. initialPlayers 새로운 배열을 리턴 */}
      { 
		props.initialPlayers.map(item => 
		  <Player name={item.name} score={item.score} />) 
	  }
    </div>
  );
}

// 1. initialPlayers 를 JSX 문법 사용히야 {players} 전달
ReactDOM.render(<App initialPlayers={players} />, document.getElementById('root'));
```
map은 새로운 배열을 리턴한다.  
JSX expression은 모두 { } 안에 포함되어져야 한다.  
실행은 잘되지만 콘솔창을 보면 warning이 발생한다.  
player Array를 특정한 key로 구분해야 한다.  
상수 players 객체안에 id값을 추가하여 player 각각 key값을 넣어준다.  

```javascript
const players = [
  {name: 'LDK', score: 30, id: 1},
  {name: 'HONG', score: 40, id: 2},
  {name: 'KIM', score: 50, id: 3},
  {name: 'PARK', score: 60, id: 4},
];
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={props.initialPlayers.length} />
      
      {/*Players List*/}
	  { 
		props.initialPlayers.map(item => <Player 
		name={item.name} 
		score={item.score} 
		key={item.id.toString()} />) 
	  }
    </div>
  );
}
```
