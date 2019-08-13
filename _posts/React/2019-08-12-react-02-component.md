---
layout: post
title: 컴포넌트(Component)
category: React
tags: [React]
comments: false
---
> ReactJS 이 정도는 알아야지 - 이효범 교재와 KOSMO React 프로그래밍 수업을 듣고 정리합니다.  
> [w3school](https://www.w3schools.com) 참고

# 컴포넌트(Component)

## Component?

- UI를 독립적이고 재사용 가능한 조각
- 컴포넌트에는 function component 와 class component 두가지가 있다
  - 되도록이면 function 컴포넌트 사용 권장
  - class 컴포넌트는 React.Component라는 부모 클래스를 상속받았기 때문에 더 많은 기능을 가지고 있지만 그것은 그만큼 메모리와 리소스를 더 사용
- 컴포넌트를 생성할 때 `첫 글자는 대문자`
  - 소문자는 html 태그이고 대문자는 리액트 컴포넌트를 의미

## 함수형 컴포넌트 - Functional Component

- state나 컴포넌트 생명주기(Lifecycle) 메서드를 사용하지 않는다면 함수형 컴포넌트 권장
- 가벼워서 첫 마운팅(화면에 처음 컴포넌트를 그려 주는 것)이 빠르다

```javascript
function Welcome(props){
	return(
		<h1>Hello! {props.name}</h1>
	)
}
```

- ECMAScript6 화살표 함수 사용

```javascript
const Welcome = (props) => {
	return(
		<h1>Hello! {props.name}</h1>
	)
}
```

## 클래스형 컴포넌트 - Class Component

- 컴포넌트 생명주기 메서드를 사용해야 하는 경우나 state를 사용해야 할 경우 반드시 class 컴포넌트 사용

```javascript
class Welcome extends React.Component{
	render(){
		return <h1>Hello! {this.props.name}</h1>
	}
}
```

### 함수형 컴포넌트와 클래스 컴포넌트의 차이점

1. render 함수에서 React element 리턴
2. this.props 사용

## 컴포넌트 렌더링 하기

- 앞 장에서 element를 렌더링할때 DOM 태그를 랜더링 했다

```javascript
const element = <Welcome name="neju" />;
```

- DOM 태그뿐만 아니라 사용자가 정의한 태그(컴포넌트)도 렌더링할 수 있습니다 

```javascript
function Welcome(props){
  return(
    <h1>Hello! {props.name}</h1>
  )
}

const element = <Welcome name="neju" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
