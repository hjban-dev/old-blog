---
layout: post
title: 실전형 리액트 Hooks 10가지 - useTabs(useState)
category: React
tags: [React]
comments: true
---

> 노마드코더의 실전형 리액트 Hooks 10가지 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 1 useState

## 1.3 useTabs

이번에는 계속해서 useState를 사용하여 커스텀 Hooks인 useTabs를 만들어보겠습니다.  
useTabs는 버튼에 따라 노출되는 내용을 변화시키겠습니다.  
  
useInput은 args로 initialValue를 받고, initialValue를 초기값으로 갖는 useState를 작성해주었습니다.

배열 객체를 사용하여 button과 내용을 나타나게 하겠습니다.  
dummy로 content를 만들어줍니다.

```javascript
const content = [
  {
    tab: "Section 1",
    content: "This is the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "This is the content of the Section 2"
  }
];
```

위의 배열을 map()메소드를 사용하여 Section1, Section2 버튼을 만들겠습니다.

```javascript
const App = () => {
  return (
    <div className="App">
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
};

export default App;
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_3.jpg" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

버튼을 노출시키는 것은 간단했습니다.  
이제 useTabs hook을 만들어봅시다. useTabs는 initialTab, allTabs 두개의 매개변수를 갖고,
currentItem, changeItem 두 값을 return 하게 만들겠습니다.  

매개변수 initialTab에는 초기에 노출할 값, allTabs에는 모든 tab의 정보를 주도록 만들겠습니다.

```javascript
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab); // useState에 initialTab을 초기값으로 세팅 
  return {
    currentItem: allTabs[currentIndex], // allTabs의 인덱스 값으로 찾은 현재 탭의 정보
    changeItem: setCurrentIndex // 활성화 된 tab
  };
};
```

button에 onClick기능을 넣어 changeItem 실행하겠습니다.  
changeItem은 useTabs에서 setCurrentIndex을 실행하는 부분입니다.

```javascript
const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
```

<center>
<figure>
<img src="/assets/post-img/react/hooks/nomad_react_hooks_2.gif" alt="">
<figcaption>코드 실행 결과</figcaption>
</figure>
</center>

더 나은 코드를 만들기 위해 error부분을 잡겠습니다.

```javascript
const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) { 
    return; // useTabs를 사용할 때 두번째 매개변수를 주지 않거나, 두번째 매개변수가 매열이 아니라면 return(에러 페이지 뜨지 않게)
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
```
