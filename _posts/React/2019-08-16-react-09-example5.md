---
layout: post
title: scoreboard(클릭으로 점수 +, - 기능) 예제 전체 소스
category: React
tags: [React]
comments: false
---
> ReactJS 이 정도는 알아야지 - 이효범 교재와 KOSMO React 프로그래밍 수업을 듣고 정리합니다.  
> [w3school](https://www.w3schools.com) 참고

# scoreboard(클릭으로 점수 +, - 기능) 전체 소스

<center>
<figure>
<img src="/assets/post-img/react/scoreboard-result.jpg" alt="" width="700">
<figcaption>scoreboard preview</figcaption>
</figure>
</center>

```javascript
const Header = (props) => {
  // 객체 상태인 props를 상수 title, totalPlayers로 변환
  const {title, totalPlayers} = props;
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className='stats'>Players: {totalPlayers}</span>
    </header>
  );
}
 
const Player = (props) => (
  <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
        onClick={() => props.removePlayer(props.id)}>x</button>
    </span>
    <span className='player-name'>{props.name}</span>
    <Counter/>
  </div>
);
 
class Counter extends React.Component {
  state = {
    score: 0,
  }
 
  constructor(props) {
    super(props);
  }
  // 기존 incrementScore, decrementScore 함수 changeScore로 변경
  changeScore = (delta) => {
    // 1. state를 변경하는 방법
    // this.state.score += 1;
    // this.setState({score: this.state.score + 1});
    // 2. merge 된다. : 기존 속성 그대로 유지
    // 3. 비동기로 처리
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
  }
 
  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement'
          onClick={() => this.changeScore(-1)}> - </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-action increment'
          onClick={() => this.changeScore(1)}> + </button>
      </div>
    );
  }
}
 
class App extends React.Component {
  state = {
    players: [
      {name: 'NEJU', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);
 
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }
 
  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={this.state.players.length} />
 
        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id}
              removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}
 
ReactDOM.render(<App></App>, document.getElementById('root'))
```
