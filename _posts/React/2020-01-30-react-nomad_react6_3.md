---
layout: post
title: Nomadcoder's ReactJS Routing Bonus 3
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 6 Routing Bonus

## 6.4 Redirecting

지난 장의 Detail Component에 props를 확인했더니, 4가지의 props가 나왔죠? 우리는 그 중 location 부분만 필요했으니 props를 location으로 수정하겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-14.jpg" alt="">
<figcaption>props를 location으로 변경</figcaption>
</figure>
</center>

페이지에서 movie card를 누르면 이전 장에서 확인했던 것처럼 props 정보를 받을 수 있었지만, 그냥 직접적으로 /movie-detail로 들어오면 여전히 undefined로 뜹니다. 그것을 막기 위해 우리는 직접적으로 링크를 들어온다면 home으로 redirect되게 만들겠습니다.

먼저 기존의 function Component를 class Component로 변경하고, 전 장에서 /movie-detail 링크를 직접적으로 들어오면 location.state이 undefined 인 것을 확인했습니다. 그래서 location.state이 undefined라면 유저를 인덱스 페이지로 redirect 시키겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-15.jpg" alt="">
<figcaption>props를 console창에서 확인</figcaption>
</figure>
</center>

위 이미지는 route에서 props를 console창에서 확인한 것 입니다. 가져온 history안에 있는 go, goBack, goFoward가 url을 변경합니다.  

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-15.jpg" alt="">
<figcaption>Detail을 class Component로 변경</figcaption>
</figure>
</center>

this.props에서 history도 가져와서 history.push('/')로 인덱스 페이지로 돌아가게 합니다. 한번 실행해봅시다!

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-16.jpg" alt="">
<figcaption>movie-detail 페이지로 이동했더니 인덱스로 redirect</figcaption>
</figure>
</center>

직접적으로 movie-detail 페이지에 갈 수 없는게 확인됩니다. 그러면 이제 카드를 클릭해서 이동 했을 때, 해당 카드의 정보를 가져와 페이지에 보이게 해봅시다.

movie 카드 구조와 style을 가져와서 사용하겠습니다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-17.jpg" alt="">
<figcaption>Detail Component return 구조와 결과</figcaption>
</figure>
</center>

인덱스 페이지에서 카드를 클릭하면 detail페이지로 잘 넘어가고 안의 내용도 잘 나옵니다. 그런데 movie-detail 페이지에서 새로고침을 하면 에러가 발생합니다. 왜냐하면 render()가 먼저 작동하고 componentDidMount()가 작동한다는 것 기억할 것 입니다.  

render() 함수가 실행됐을때 넘어오는 location이 없기 때문에 componentDidMount() 함수가 실행되기 전에 오류가 발생하는 것 입니다. 그래서 우리는 render() 함수에서 체크를 한번 해주겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-18.jpg" alt="">
<figcaption>render() 함수에서 location 체크</figcaption>
</figure>
</center>

위 코드를 보면 if(location.state)이면 detail을 return 하고, 아니면 null을 반환한다고 했습니다. 만약 null을 반환한다면 위의 componentDidMount() 함수가 인덱스 페이지로 이동시키겠죠?

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-19.gif" alt="">
<figcaption>movie-detail 페이지에서 새로고침 했을 때 결과</figcaption>
</figure>
</center>

위 영상을 확인해보면 새로 고침을 하니 인덱스 페이지로 이동하는 것을 확인할 수 있습니다.  
우리는 Link와 Router를 통해 주어진 props를 이용하여 정보를 공유하는 방식을 알아보았습니다. 

---

## 6.5 Conclusions

Movie App에서 우리가 about페이지를 갔다가 home으로 이동하면 다시 로딩됩니다. 이 현상은 home에 state가 갇혀 있기 때문입니다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_6-19.jpg" alt="">
<figcaption>Home Component에 state</figcaption>
</figure>
</center>

말 그대로 여러분이 about페이지를 갔다가 home으로 돌아온다면 state는 다시 비어있을것 입니다. 그럼 데이터를 다시 불러와야 합니다.  
이런 현상을 고치고 싶다면 여러분은 Redux를 사용해야 합니다. Redux는 state를 스크린 밖에 있도록 도와줍니다. Redux는 무비리스트를 다른 곳에 저장했다가 여러분이 home으로 돌아와도 좀 더 빠르게 노출시켜 줄 수 있습니다. 다시 로딩창을 볼 필요가 없죠.

