---
layout: post
title: Todo_List ReactJS 컴포넌트 구성
category: React
tags: [React]
comments: true
---

> React 기초 입문 프로젝트 – 흔하디 흔한 할 일 목록 만들기 by velopert <https://velopert.com/3480>
> [Todo-List 결과물 확인](https://github.com/hjban-dev/todo-react)

# Todo_List

## 0. 시작하기

필자는 node, yarn, VS code 사용. 

```
yarn global add create-react-app <!-- create-react-app 설치 -->
create-react-app todo-list <!-- todo-list 프로젝트 생성 -->
yarn start <!-- todo-list 디렉토리에서 명령어를 실행 -->
```

### 프로젝트 구성요소

<center>
<figure>
<img src="/assets/post-img/react/todo-list_1.jpg" alt="">
<figcaption>프로젝트 구성요소</figcaption>
</figure>
</center>

### 프로젝트 초기화

```javascript
// --- src/App.js ---
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

export default App;
```
같은 위치에 App.css, App.test.js, logo.svg 파일도 제거

## 1. 컴포넌트 구성하기

src 내부에 components 디렉토리 생성하여 컴포넌트들을 이곳에 생성

### 첫번째 컴포넌트, TodoTemplate

- src/components/TodoListTemplate.js
- src/css/components/TodoListTemplate.css

TodoListTemplate이라는 이름 그대로 **todo-list를 감싸주는 wrapper**역할을 합니다.

```javascript
// --- src/components/TodoListTemplate.js ---
import React from 'react';
import './css/TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;
```

함수형 컴포넌트이고 form, children 이라는 props를 받습니다.  
css는 생략하겠습니다.  

TodoListTemplate을 App에서 불러오겠습니다.

```javascript
// --- src/App.js ---
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  render() {
    return (
      <TodoListTemplate>
        템플릿 완성
      </TodoListTemplate>
    );
  }
}

export default App;
```
Todo-list의 전체 wrapper 생성

### 두번째 컴포넌트, Form

그 다음은 텍스트를 입력할 수 있는 **input과 button을 구성하는 Form 컴포넌트**를 생성하겠습니다.  
Form은 총 네개의 props를 받아와야 합니다.

- src/components/Form.js
- src/components/css/Form.css

```javascript
// --- src/components/Form.js ---
import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
```
- value: 인풋의 내용
- onCreate: 버튼이 클릭 될 때 실행 될 함수
- onChange: 인풋 내용이 변경 될 때 실행되는 함수
- onKeyPress: 인풋에서 키를 입력 할 때 실행되는 함수. 이 함수는 나중에 **Enter** 가 눌렸을 때 onCreate 를 한 것과 동일한 작업을 하기 위해서 사용합니다.

css는 생략하겠습니다.  
Form 컴포넌트를 생성했으니, App.js에 렌더링하겠습니다.

```javascript
// --- src/App.js ---
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        템플릿 완성
      </TodoListTemplate>
    );
  }
}

export default App;
```
TodoListTemplate의 props form으로 Form 컴포넌트를 넘겨주었습니다. 그리고 TodoListTemplate는 받은 props form을 form-wrapper안에 넣어서 return 합니다.

### 세번째 컴포넌트, TodoItemList

TodoItemList 컴포넌트는 TodoItem 컴포넌트 여러개를 렌더링해주는 역할을 합니다.  
‘리스트’ 를 렌더링하게 될 때는, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화할 수 있습니다.

- src/components/TodoItemList.js

```javascript
// --- src/components/TodoItemList.js ---
import React, { Component } from 'react';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>

      </div>
    );
  }
}

export default TodoItemList;
```

- todos: todo 객체들이 들어있는 배열
- onToggle: 체크박스를 키고 끄는 함수
- onRemove: 아이템을 삭제시키는 함수

### 네번째 컴포넌트, TodoItem 

이 컴포넌트는, 체크 값이 활성화되어있으면 우측에 체크마크 (✓) 를 보여주고, 마우스가 위에 있을때는 좌측에 엑스마크 (×) 를 보여줍니다.

- src/components/TodoItem.js
- src/components/css/TodoItem.css

```javascript
// --- src/components/TodoItem.js ---
import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
```

- text: todo 내용
- checked: 체크박스 상태
- id: todo 의 고유 아이디
- onToggle: 체크박스를 키고 끄는 함수
- onRemove: 아이템을 삭제시키는 함수

그러면 TodoItemList에서 TodoItem컴포넌트를 불러오겠습니다.

```javascript
// --- src/components/TodoItemList.js ---
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="안녕"/>
        <TodoItem text="리액트"/>
        <TodoItem text="반가워"/>
      </div>
    );
  }
}

export default TodoItemList;
```

App 에서도 TodoItemList를 불러와야 합니다.

```javascript
// --- src/App.js ---
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;
```
