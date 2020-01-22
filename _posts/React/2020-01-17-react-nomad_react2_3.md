---
layout: post
title: Nomadcoder's ReactJS JSX & Props 3
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 JSX & Props

## 2.4 Protection with PropTypes

이번 장에서는 <u>prop-types</u>를 배워봅시다. <u>prop-types</u>는 Father Component가 Children Component사이에서 알맞은 정보전달이 되었는지 확인하는 라이브러리입니다. 다시 말해서 **전달 받은 props가 내가 요청한 props가 맞는지 확인**할 수 있습니다.  
> npm 공식 홈페이지의 prop-types : <https://www.npmjs.com/package/prop-types>

예시로 foodILike에 rating정보를 추가 해보겠습니다. rating의 의미는 없고, 많은 정보 전달을 위해 예시의 값 추가하였습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-23.jpg" alt="">
<figcaption>foodILike에 rating정보 추가</figcaption>
</figure>
</center>

그리고 터미널 창에 가서 <u>prop-types</u>를 설치하겠습니다. 터미널 창에서 `npm i prop-types`로 설치 가능하고, 설치가 잘 되어있는지 확인은 package.json에서 할 수 있습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-21.jpg" alt="">
<figcaption>package.json에서 prop-types설치 확인</figcaption>
</figure>
</center>

설치 확인을 한 후 <u>prop-types</u>을 사용하기 위해선 해당페이지에 **import**해야합니다. 상단에 React를 import한 부분 밑줄에 `import propTypes from 'prop-types'`를 추가하고, propTypes를 사용해봅시다.

이제 우리는 Food Component의 props가 의도대로 전달되고 있는지 확인할 것 입니다. <u>prop-types</u>의 사용법은 아래 이미지와 같습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-24.jpg" alt="">
<figcaption>import propTypes 와 propTypes의 사용</figcaption>
</figure>
</center>

위 코드의 의미는 name prop의 type이 string이고 필수 사항인지 확인한다는 의미입니다. 위 코드로 진행했더니 페이지는 문제없이 나오지만 console창에 Warning이 생겼습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-22.jpg" alt="">
<figcaption>페이지의 시각적 문제는 없지만 Waring이 있는 console</figcaption>
</figure>
</center>

Waring을 해석하자면 rating의 type이 **number**로 제공됐지만, 우리는 **string**을 예상한다고 합니다. 우리가 예상한 자료형과 다르다는 결과를 말해준다. rating의 type확인을 string에서 number로 수정해봅시다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-25.jpg" alt="">
<figcaption>rating의 자료형이 number인지 확인</figcaption>
</figure>
</center>

위 코드대로 진행하면 console창에 아무 문제 없이 페이지가 로드되는 것을 확인할 수 있습니다.

자료형 확인 외에도 여러 다른 방법들과 옵션들을 확인 할 수 있습니다.  
React 공식 홈페이지에서 <u>prop-types</u> 사용법 확인 가능  
> <https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html>

<u>prop-types</u> 사용하면 만약 여러분이 props중 하나를 실수 했을 때 페이지는 망가지겠지만 여러분은 console을 보고 무엇이 실행되지 않는지 알 수 있습니다.

## 2장을 끝내며

이제 여러분은 `jsx`, `props`를 배웠습니다. 다음장에선 마지막으로 남은 특징 `state`에 대해 알아봅시다. 
