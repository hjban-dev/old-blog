---
layout: post
title: scoreboard(클릭으로 점수 +, - 기능) 예제 만들기 4
category: React
tags: [React, Exercise]
comments: false
---
> ReactJS 이 정도는 알아야지 - 이효범 교재와 KOSMO React 프로그래밍 수업을 듣고 정리합니다.  
> [w3school](https://www.w3schools.com) 참고

# scoreboard(클릭으로 점수 +, - 기능) 예제 만들기 4

## 클릭시 score 증가하는 이벤트

incrementScore 함수를 추가하고 JSX에서 클릭 이벤트를 추가한다. onClick에 JSX expression을 추가하는데 함수를 호출하는게 아니라 함수 레퍼런스를 넣어야 한다.  
  
리액트는 명령행 프로그래밍이 아니라 선언형 프로그래밍이다.  
클릭을 하면 클릭시 실행할 function을 정해둔다.
  
여기서 주의할 점은 function을 정의해 놓기 때문에 이 function이 객체에 바인딩되지 않고 따로 떨어져 나오게 된다.  
그래서 function에 this를 사용하게 되면 <u>this가 객체를 가르키니 않고 글로벌 this</u>가 되어 버리기 때문에 이것을 해결하기 위해서 bind() 문법을 사용하거나 es6에서온 arrow 펑션을 사용한다. arrow 펑션안에 사용된 this는 lexical this가 되기 때문에 bind 없이 사용가능하게 된다.

### 버튼을 클릭시 score 증가하는 이벤트 생성

```javascript
class Counter extends React.Component {
  state = {
    score: 0
  };
  
  incrementScore() {
    console.log('increment');
  }
  
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}
```

incrementScrore 함수안에는 this.state.score = this.state.score + 1 과 같이 상태를 업데이트를 해서는 안된다.  
상태를 업데이트할때는 반드시 **setState 함수로 업데이트**해야 UI가 re-render된다는것을 기억하자.

```javascript
incrementScore = () => {
  console.log(this);
  this.setState(
    {score: this.state.score + 1}
  );
}
```

### 이벤트의 this에서 에러 발생

하지만, this에서 에러가 발생한다. 함수가 당장 실행되는게 아니라 클릭시 실행되므로 이 함수가 객체에 바인딩되지 않고 분리가 일어나서 bind가 안된 상태가 되었다.

#### arrow function 사용하여 this 에러 해결하기

arrow function 내에 사용된 this는 lexical this라고 하여 자동적으로 원래 가르키고자하는 scope의 this를 참조하게 된다. 아래와 같이 arrow function을 사용하여 increment 함수표현식을 사용하면된다.  

```javascript
incrementScore = () => {
  console.log(this);
  this.setState(
    {score: this.state.score + 1}
  );
}
```

decrementScore 함수도 동일하게 작성하여 보자  

```javascript
decrementScore = () => {
  this.setState(
    {score: this.state.score - 1}
  );
}
```

### state를 prev state로 변경

this.state.score + 1 로 상태를 업데이트하는 것은 `비동기적`으로 렌더링 된다. 즉, 여러번의 이벤트가 일어나면 이 상태가 순서대로 실행되는것을 보장할 수 없는 불일치성 문제를 일으킬 수 있다. 그래서 일치성을 보장하기 위해서는 이전 상태에 기반하여 상태를 업데이트하여야 한다. setState는 이전상태 값에 기반한 콜백 펑션을 제공해준다.  
  
setState에 지정된 state는 merge 된다. 만일 state에 a, b, c, d 여러개의 상태가 정의되어있다면 setState에 c만 상태를 갱신했다면 c만 merge가 일어나고 나머지 상태 a, b, d 는 그대로 있는다.  

```javascript
incrementScore = () => {
  this.setState(prevState => {
    return {score: prevState.score + 1}
  });
}

decrementScore = () => {
  this.setState(prevState => {
    return {score: prevState.score - 1}
  });
}
```

### Player 상태 관리

player 삭제 로직을 추가하기 위해서는 자식인 player 컴포넌트가 삭제 요청을 부모에게 보내고 자식이 삭제를 처리해야한다. player 데이터를 최상위 부모인 App 컴포넌트에 위치시켜서 state 컴포넌트로 만들어야 한다.  
  
App 컴포넌트를 먼저 function 컴포넌트에서 class 컴포넌트로 변경하고 players 라는 state 를 추가한다.

```javascript
// 클래스 컴포넌트로 변경
class App extends React.Component {
  state = {
    players: [
      {name: 'NEJU', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />
      
        {/*Players List*/}
        { this.state.players.map(item => 
          <Player name={item.name} key={item.id.toString()} />) }
      </div>
    );
  }
}
 
ReactDOM.render(<App />, document.getElementById('root'))
```

players 와 같이 SPA 전체에서 공유되어야 할 필요성이 있는 state는 이와같이 `App 컴포넌트에 공유`하여 모든 컴포넌트에서 공유되도록 한다. 이와 같은 state를 application state라고 하고 score와 같이 특정한 컴포넌트에서만 사용되는 state는 local state라고 한다.

### Player 삭제

App 컴포넌트에 삭제 함수 handleRemovePlayer를 추가한다. Player 컴포넌트에 **삭제 함수handleRemovePlayer를 props로 넘긴다**. Player 컴포넌트에서 해당 함수가 넘어왔는지 devtools에서 확인한다.

```javascript
handleRemovePlayer = (id) => {
  this.setState(prevState => {
    return {
      players: prevState.players.filter(item => item.id !== id)
    }
  })
}
render() {
  return (
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={this.state.players.length} />
    
      {/*Players List*/}
      { this.state.players.map(item => 
        <Player 
        name={item.name}
        key={item.id.toString()} 
        removePlayer={this.handleRemovePlayer}
        id={item.id} />)
      }
    </div>
  );
}
```

Player 컴포넌트에서는 props 로 넘어온 함수를 이용하여 player를 삭제하는 클릭 이벤트를 추가한다.


```javascript
const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" 
          onClick={() => props.removePlayer(props.id)}>x</button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
}
```

props 로 넘어온 players 는 read only 이므로 수정할 수 없다. 그러므로 players를 소유하고 있는 부모에게 삭제요청을 이벤트로 한다. 데이터의 흐름은 트리의 `상단에서부터 아래로 단방향`으로 흐르고 자식은 수정요청을 이벤트로 하게 된다.  
