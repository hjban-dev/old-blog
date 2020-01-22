---
layout: post
title: Nomadcoder's ReactJS Making the Movie App 1
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 4 Making the Movie App

## 4.0 Fetching Movies from API

**fetch**의 사전적 의미 : 가지고 오다, 불러오다  
위 단어를 프로그래밍에서 사용할 땐 데이터를 가져온다는 의미로 사용할 수 있겠죠?  
Javascript에서 data를 fetch하는 방법 중 하나는 fetch 입니다. 짧게 알아보고 가겠습니다.

**fetch**  
  : Fetch API로 부르고 javascript의 서버와의 **비동기 요청 방식**입니다. Ajax의 방식 중 하나이고, promise 방식의 기반으로 구성되어 있습니다.   
  <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>

대충 무슨 개념인지만 이해하고 넘어갑시다. 우리는 이번에 fetch가 아닌 axios를 사용할겁니다. fetch의 의미 자체와 Fetch API는 다르다는 것을 알려주려고 설명한 부분입니다.

**axios**  
   : 클라이언트 라이브러리로써, anxios 역시 **비동기 요청 방식**이고, promise 방식의 기반으로 구성되어 있습니다. GET을 사용해 데이터를 받아오는 것 뿐만 아니라 직접 POST, PUT 메소드를 써가며 데이터를 저장, 변경하는 것 까지 직접 가능합니다.  

터미널에서 npm install axios로 외부 라이브러리인 anxiox를 설치합니다. 
설치 후에 `import axios from 'axios';`로 import해오면 이제 우리는 anxios를 사용할 수 있습니다.

그전에 우리는 토렌트를 사용하여 영화를 다운 받을 수 있게 만든 YTS라는 사이트의 API를 활용하여 List Movies를 가져올겁니다. 하지만 YTS의 API 링크가 계속 변경되기 때문에 노마드코더가 복사해 둔 이전 버전의 API를 사용합시다!  
사용하는 파일 : https://yts-proxy.now.sh/list_movies.json

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-1.jpg" alt="">
<figcaption>JSON view를 사용한 https://yts-proxy.now.sh/list_movies.json</figcaption>
</figure>
</center>

위 이미지는 https://yts-proxy.now.sh/list_movies.json 페이지이고 크롬 확장 프로그램 중 JSON view를 사용하면 json형식의 파일을 보기 좋게 정렬하여 보여줍니다.

우리는 Mounting 순서에서 render함수 실행 후 componentDidMount함수가 실행되는 것을 배웠죠? componentDidMount함수 안에 axios를 사용해서 list_movies.json페이지를 가져오겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-2.jpg" alt="">
<figcaption>componentDidMount함수 안에 axios사용 코드</figcaption>
</figure>
</center>

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-3.jpg" alt="">
<figcaption>위 코드 실행 결과</figcaption>
</figure>
</center>

개발자 도구의 Network창에서 axios를 사용해 list_movies.json을 확인할 수 있습니다.  

이제 우리는 componentDidMount함수 안에 코드를 작성하지 않고 getMovies라는 이름의 함수를 만들고 그 안에 axios.get으로 구성해줄겁니다. 그리고 componentDidMount가 실행될 때 getMovies를 실행하게 해봅시다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-4.jpg" alt="">
<figcaption>componentDidMount가 실행될 때 getMovies를 실행</figcaption>
</figure>
</center>

하지만 axios.get()이 항상 빠르지는 않습니다. 그말은 어쩌면 인터넷 속도가 아주 느려서 가져오지 못하거나, json파일안에 텍스트가 너무 많아 문제가 생길 수도 있다는 말입니다.  
그래서 우리는 javascript에게 componentDidMount함수가 끝날 때까지 약간 시간이 걸릴 수도 있고 시간이 걸린다면 천천히 실행해도 된다고 말하려고 합니다.

**ASYNC**의 사전적 의미 : 비동기 통신；정보를 일정한 속도로 보낼 것을 요구하지 않는 데이터 전송 방법  

함수 안에 <u>비동기통신</u>이라는 의미를 갖고 있는 단어 async를 붙여주고 axios.get() 앞에 await 키워드를 붙여주면 해당 함수와 실행 명령을 비동기로 실행하라는 명령입니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-5.jpg" alt="">
<figcaption>getMovies를 async(비동기)로 실행</figcaption>
</figure>
</center>

---

## 4.1 Rendering the Movies

도대체 우리가 axios.get()으로 어떤걸 가져왔는지 확인해봅시다. console로 movies를 노출시켜 봅시다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-6.jpg" alt="">
<figcaption>console.log(movies) 실행</figcaption>
</figure>
</center>

위 형식은 우리가 자주 보던 객체 형식이죠? 그 말은 우리는 data안의 data안에 movies를 뽑을 수 있다는 말입니다.

<i>console.log(movies.data.data.movies)</i>로 확인 할 수 있겠지만 이 코드는 너무 깁니다. Javascript es6문법을 사용해서 짧게 만들어봅시다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-7.jpg" alt="">
<figcaption>es6문법을 사용하여 변수 선언</figcaption>
</figure>
</center>

이제 우리는 list_movies.json의 movie list를 가져왔습니다. 이제 가져온 리스트로 무엇을 할 수 있을까요? 우리는 이 리스트를 state에 넣어서, isLoading이 false라면 이 리스트들을 페이지에 뿌려주겠습니다...!
어려워 할 필요 없습니다!  
**우리는 API로 movie list를 가져왔고, React가 그 리스트를 가져오면 setState()로 isLoading을 변경하면서 페이지에 리스트를 뿌려준다는 말입니다 :)**

기존의 render 함수에서 isLoading이 false일 때, "We are ready!"를 반환 시켰었죠?  
그 부분에 movies.map() 을 활용하여 리스트 각각에 Movie Component를 반환 시켜봅시다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-8.jpg" alt="">
<figcaption>배열 movies 각각에서 반환하는 Movie Component</figcaption>
</figure>
</center>

movies.map() 안의 코드를 살펴보면 들어오는 movie의 id, year, title, summary, medium_cover_image를 porps로 Movie Component에 전달하고 있습니다. 이미지에 써있듯이, Component에 props를 보낼 때 key prop을 가져야 한다고 해서 우리는 id값을 활용하여 key값으로 지정해주었습니다.  

이제 Movie Component는 App.js와 같은 폴더인 src에 만들어줍니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-9.jpg" alt="">
<figcaption>src폴더의 Movie Component 코드 구성</figcaption>
</figure>
</center>

먼저 React를 import해주고, Movie Component에는 state가 필요하지 않기 때문에 function Component로 만들어 주겠습니다.
가져온 list_movies.json의 type을 확인해야하니 2장에서 배웠던 propTypes를 검사하도록 하겠습니다. 우리는 id, year, title, summary, poster로 구성을 할 것이고, 지금은 title만 return 하도록 하겠습니다.
Component 구성 후 export로 App.js에서 사용할 수 있게 했습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-10.gif" alt="">
<figcaption>Movie Component가 정상적으로 노출되는 모습</figcaption>
</figure>
</center>

저장하면 처음엔 Loading 텍스트가 뜨고 잠시 후에 movie list의 title이 노출된다.
