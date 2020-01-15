---
layout: post
title: Nomadcoder's ReactJS JSX & Props 1
category: React
tags: [React, git]
comments: false
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 JSX & Props

## 2.0 Creating your first React Component

`Component` 의 사전적 의미 : (구성) 요소, 부품  

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-2.jpg" alt="">
<figcaption>App Component</figcaption>
</figure>
</center>

이전 장에서 살펴봤던 코드이긴 한데... Component가 뭐지...?  
자, 어렵게 생각하지 말고 위 코드를 살펴보자. App function이 HTML 코드를 return 하고 있다.  
그걸로 끝이다.  
`HTML을 반환하는 함수` 그게 바로 `Component`이다. 우리는 React에서 가장 중요한 개념인 Component를 이해했다. **React는 Component와 함께 동작한다.**

### 2.0.1 What is 'JSX'?

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-3.jpg" alt="">
<figcaption>index.js의 구성요소</figcaption>
</figure>
</center>

당신은 이미 React를 시작 했을 때부터 <App /> 라는 형식을 보았을 것이다. HTML의 닫는 태그 같지만 안에 있는 App이라는 태그명은 본적이 없다. 낯설지만 익숙한 저 형식이 JSX 이다.  
  
**Javascript와 HTML의 조합** 다르게 말하면 **Javascript 안의 HTML**...새로운 개념이다. JSX는 React에서 아주 특별하게 사용된고, 만약 당신이 프론트개발자가 아니라면 JSX가 당신에게 썩 도움이 되지 않을 수도 있다. (하지만 vue, angular 등에는 유용)

### 2.0.1 How to Create a Component?

src 폴더(App.js가 있는 폴더)에 Potato.js 라는 파일을 생성합니다. 보통 Component명의 첫글자는 대문자를 쓰기 때문에 헷갈리지 않게 파일명도 동일하게 작성하였습니다.  

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-4.jpg" alt="">
<figcaption>Pototo.js의 구성요소</figcaption>
</figure>
</center>

위에서 배웠듯이 h3을 return하는 function Potato를 만들었습니다.  
하지만 App.js에는 Component를 기준으로 위 아래에 import, export 명령문이 있었습니다.  
각각의 사전적 의미를 살펴보자면 import 와 export 는 서로 반의어입니다. 

|        |                      |
| ------ | -------------------- |
| import | 1. 수입품 2. 수입 3. 수입하다 |
| export | 1. 수출 2. 수출하다        |

`import React from "react"` : Potato Component를 React에서 사용하겠다는 의미.  
`export default Potato` : 다른 페이지에서 Potato Component를 사용하게 한다는 의미.

비슷한 듯 다른 두 명령어는 외워둡니다.  
export된 무언가를 import하여 사용합니다. export를 하지 않으면 선언만 했을 뿐 사용할 수 없습니다.

### 2.0.2 Importing a Component

index.js에서 `import App from './App'` App 컴포넌트를 가져와서 
```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```
로 실행하는 걸 확인했었습니다. 우리도 Potato Component를 만들었으니 삽입해봅시다!

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-5.jpg" alt="">
<figcaption>index.js에 Potato Component 삽입</figcaption>
</figure>
</center>

App Component를 불러온 방식 그대로 Potato를 불러옵니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-6.jpg" alt="">
<figcaption>index.js에 Potato Component 삽입 했을때 결과</figcaption>
</figure>
</center>

흠...작동하지 않네요? 같은 명령어로 같은 위치에 삽입했는데...  
  
여기서 알 수 있는 것은 React application은 하나의 Component만 rendering가능하다는 것 입니다. 지금은 그 유일한 Component가 App Component 입니다.  
  
그렇다면 App Component와 동일한 위치 말고, App Component안에 넣어봅시다!

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-7.jpg" alt="">
<figcaption>App.js 에서 Potato 불러오기</figcaption>
</figure>
</center>

index.js 에서 확인했듯이 `import`로 Potato Component 불러오고, `JSX`형식으로 App() Component 내부에 불러왔다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-8.jpg" alt="">
<figcaption>App.js에 Potato Component 삽입한 후 결과</figcaption>
</figure>
</center>

그러면...!! h1태그와 h3태그가 구성되어 있는 것을 확인할 수 있다.
  

이 포스팅에서 꼭 확인해야 할 부분은 **react application은 하나의 component만 rendering 가능!**
