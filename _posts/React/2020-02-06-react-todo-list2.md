---
layout: post
title: Todo_List ReactJS 상태관리 하기
category: React
tags: [React]
comments: true
---

> React 기초 입문 프로젝트 – 흔하디 흔한 할 일 목록 만들기 by velopert <https://velopert.com/3480>
> [Todo-List 결과물 확인](https://github.com/hjban-dev/todo-react)

# Todo_List

## 2. 상태관리 하기

### 상태관리는 어떻게 해야 할까?

현재 프로젝트에서 상태가 필요한 컴포넌트는 Form 과 TodoItemList 입니다. 컴포넌트들은 부모를 통하여 대화를 해야합니다.  

그래서 `App` 이 **Form 과 TodoItemList** 의 부모 컴포넌트이니, 해당 컴포넌트에 input, todos 상태를 넣어주고 해당 값들과 값들을 업데이트 하는 함수들을 각각 컴포넌트에 `props` 로 전달해주어서 기능을 구현하게됩니다.

### 초기 state 정의하기

```javascript
// --- src/App.js ---
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true }
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }

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

초기 state 에 input 의 값과, todos 배열의 기본 아이템 3개를 넣어줍니다.

### Form 기능 구현하기

1. 텍스트 내용 바뀌면 state 업데이트
1. 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
1. 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기

App 컴포넌트에 handleChange, handleCreate, handleKeyPress 메소드를 구현하고, 이를 상태의 input 값과 함께 Form 컴포넌트로 전달하세요.

```javascript
// --- src/App.js ---
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;
```

인풋에 텍스트를 쓰고 버튼을 누르면 DOM의 변화는 없지만 [React 개발자도구](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)를 사용하면 App컴포넌트에 state가 추가된 것을 확인 할 수 있습니다.

### TodoItemList 에서 배열을 TodoItem 컴포넌트 배열로 변환하기

todos 배열을 컴포넌트 배열로 변환하여 노출시킵시다. 

```javascript
// --- src/App.js의 render함수 ---
  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    );
  }
```
위의 코드에서 TodoItemList 컴포넌트에 props todos를 넘겨주었습니다.

```javascript
// --- src/components/TodoItemList.js ---
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
```
받은 todos를 재배열하여 todoList에 props로 넘기고, todoList를 return하였습니다.

### 체크 하기/체크 풀기

```javascript
// --- src/App.js ---
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {

  (...)

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle
    } = this;

  (...)

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle}/>
      </TodoListTemplate>
    );
  }
}

export default App;
```

nextTodos로 배열의 값을 수정했습니다.

### 아이템 제거하기

```javascript
// --- src/App.js ---
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {
  (...)

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
```

todos를 filter 메소드로 재배열했습니다.
