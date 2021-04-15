---
layout: post
title: Todo_List ReactJS 컴포넌트 최적화
category: React
tags: [React]
comments: true
---

> React 기초 입문 프로젝트 – 흔하디 흔한 할 일 목록 만들기 by velopert <https://velopert.com/3480>
> [Todo-List 결과물 확인](https://github.com/hjban-dev/todo-react)

# Todo_List

## 3. 컴포넌트 최적화

### TodoItemList 최적화

지금 TodoItem는 input창에 텍스트를 입력할 때 마다 render함수가 실행되고 있습니다. React에서는 가상 DOM을 사용하기 때문에 변화는 없지만, 미세하게 자원이 낭비되고 있습니다.

```javascript
// --- src/components/TodoItemList.js ---
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

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
컴포넌트 라이프 사이클 메소드중 shouldComponentUpdate 는 컴포넌트가 리렌더링을 할 지 말지 정해줍니다.  

todos 값이 바뀔 때 리렌더링 하면 되니까 this.props.todos 와 nextProps.todos 를 비교해서 이 값이 다를때만 리렌더링하게 설정하였습니다.

### TodoItem 컴포넌트 최적화

그리고 TodoItem에서도 선택한 TodoItem만 업데이트 되는게 아니라 모든 TodoItem들이 렌더링 되고 있습니다.

```javascript
// --- src/components/TodoItem.js ---
import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    (...)
  }
}

export default TodoItem;
```
this.props.checked와 nextProps.checked 가 다를 때만 return합니다.
