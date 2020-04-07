---
layout: post
title: Todo_List ReactJS Palette 컴포넌트 추가
category: React
tags: [React]
comments: true
---

> React 기초 입문 프로젝트 – 흔하디 흔한 할 일 목록 만들기 by velopert <https://velopert.com/3480>
> [Todo-List 결과물 확인](https://github.com/hjban-dev/todo-react)

# Todo_List

여기서부터는 필자가 만든 정리...

## 4. Palette 컴포넌트 추가

### 다섯번째 컴포넌트, Palette 

- src/components/Palette.js
- src/components/css/Palette.css

```javascript
// --- src/components/Palette.js ---
import React from "react";
import "./css/Palette.css";

const Color = ({ color, active, onClick }) => {
  return (
    <div
      className={`color ${active && active}`}
      style={{ background: color }}
      onClick={onClick}
    ></div>
  );
};

const Palette = ({ colors, selected, onSelect }) => {
  const colorList = colors.map(color => (
    <Color
      color={color}
      active={selected === color}
      onClick={() => onSelect(color)}
      key={color}
    />
  ));
  return <div className="palette">{colorList}</div>;
};

export default Palette;
```


```javascript
// --- src/App.js ---
(...)
import Palette from "./components/Palette";

const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];
(...)
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }
(...)
  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }
(...)
    return (
      <TodoListTemplate 
        form={
          <Form 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
        palette={
          <Palette colors={colors} />
        }>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
```


```javascript
import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
```

TodoListTemplate.js, TodoItemList.js, TodoItem.js는 생략하겠습니다.  

> [Todo-List 결과물 확인](https://github.com/hjban-dev/todo-react)
