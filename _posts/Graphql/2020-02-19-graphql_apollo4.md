---
layout: post
title: Movie Web App - Local State
category: GraphQL
tags: [GraphQL, React, Apollo]
comments: false
---

> 노마드코더의 GraphQL로 영화 웹 앱 만들기를 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 Local State

## 2.0 Local State part One

Apollo의 큰 장점 하나는 cache를 갖는다고 했습니다. 그래서 이번에는 각각의 Movie에 cache를 활용하여 기능하는 좋아요 버튼을 만들겠습니다.  

apollo.js파일에 isLiked 라는 data를 만들고, isLiked는 true와 false를 값으로 갖는 boolean형태로 만들겠습니다. 

apollo client는 많은 설정들을 갖는데 그 중 하나는 resolvers 입니다. resolvers는 기본적으로 백엔드 부분의 resolver와 비슷합니다. Resolver는 함수 형태로 작성해줍니다.  

- resolver : 데이터를 가져오는 과정으로 함수로 작성. 프로그래머가 직접 구현 해야 하는 부분

```javascript
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false
    }
  }
});

export default client;
```

resolvers의 type은 Movie로 만들었고, Movie라는 이름은 GraphQL API의 type의 이름에서 온 것입니다.  
로컬호스트 페이지에서 Apollo 확장프로그램을 통해 type을 확인할 수 있습니다.

> [구글 확장프로그램 - Apollo Client Developer Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-10.jpg" alt="">
<figcaption>Apollo 확장프로그램을 통해 type을 확인</figcaption>
</figure>
</center>

그리고 Home.js 파일에서 GET_MOVIES gql에 isLiked를 추가해줍니다.

```javascript
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;
```
isLiked가 API에선 찾을 수 없는 부분입니다. 그래서 우리가 만든 부분이라 client에만 존재한다는 의미로 @client를 적어줍니다. 

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-11.jpg" alt="">
<figcaption>Apollo 확장프로그램을 통해 isLiked 확인</figcaption>
</figure>
</center>

isLiked라는 data는 프론트에서 만든 data입니다. 아주 쉽고 놀랍습니다!  
그리고 Home.js 파일에 Movie Component를 return하는 부분에 isLiked에 대한 정보를 props로 추가해주겠습니다.  
이제 우리는 API로 부터 오는 data와 front에서 만든 data를 결합시킬 수 있습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-12.jpg" alt="">
<figcaption>back의 data와 front의 data를 결합하여 사용</figcaption>
</figure>
</center>

Movie.js파일에 넘어오는 isLiked를 추가하여 button부분을 수정해주겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-13.jpg" alt="">
<figcaption>back의 data와 front의 data를 결합하여 사용</figcaption>
</figure>
</center>

isLiked가 true이면 "Unlike", false이면 "Like"를 return 하게 하였습니다.  
처음에 apollo.js의 resolvers에 default값을 false로 주었기에 지금은 전부 "Like"로 보여집니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-14.jpg" alt="">
<figcaption>default값 false에 맞게 전부 "Like"가 Return 됨</figcaption>
</figure>
</center>

---

## 2.1 Local State part Two

> [Apollo 공식 Documnets 사이트 링크](https://www.apollographql.com/docs/react/data/local-state/#managing-the-cache)

위 링크의 Apollo Docs에서 로컬 상태 관리에 대한 정보도 얻을 수 있는데 그 중 캐시를 손쉽게 업데이트하는 writeData를 사용하겠습니다.  

현재 경우의 apollo의 mutation은 백엔드의 mutation과 완벽히 작동이 같습니다. arguments를 가져오는 것도, 내용을 가져오는 것도 같습니다.  
apollo.js파일에 mutation을 만들겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-15.jpg" alt="">
<figcaption>likeMovie 함수를 가진 mutation 코드 생성</figcaption>
</figure>
</center>

boolean 함수인 Movie라고 부르는 type을 만들었고, 지금은 전 강의에서 이미 백엔드를 통해 활용했던 mutation을 만들었습니다. 그리고 likeMovie라고 부르는 새 함수를 만들었습니다. mutation은 완전히 graphQL server와 완전히 같습니다.  

이제 Movie로 가서 likeMovie라는 이름을 가진 mutation query를 작성해봅시다. 

```javascript
(...)
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;
```

Mutation은 apollo.js에 client부분에서 삽입한 것이기 때문에 위 코드에서 likeMovie에 반드시 **@client**를 작성해주어야 합니다. 또한 우리가 하는 작업이 mutation을 굳이 백엔드로 보내지 않아도 됩니다.  

이제 react hooks중 useMutation을 사용하면서 mutation을 활용하겠습니다. 중요한건 변수 likeMovie는 mutation의 likeMovie를 칭하는 것입니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-16.jpg" alt="">
<figcaption>useMutation으로 LIKE_MOVIE쿼리 연결</figcaption>
</figure>
</center>

변수 생성 후, button의 onClick속성에 삼항연산자로 isLiked가 false일 때, likeMovie를 실행하도록 했습니다. 그리고 서버를 실행한 후 결과를 살펴봅시다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-15.gif" alt="">
<figcaption>console로 movie에 대한 id값 확인 가능</figcaption>
</figure>
</center>

Like버튼을 클릭하면 각각의 movie에 대한 id가 console창에 찍히는 것을 확인할 수 있습니다. 이것은 백엔드 정보를 수정하지 않아도 손쉽게 data를 가져올 수 있다는 것입니다!  

정보를 가져오는 것을 확인했으니, 가져온 id의 isLiked의 값을 수정해주겠습니다. 아까 말했던 writeData를 사용하겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-17.jpg" alt="">
<figcaption>writeData을 사용하여 가져온 id값의 data변경</figcaption>
</figure>
</center>

cache를 사용하는 likeMovie를 만들었고, writeData를 사용하여 likeMovie가 실행될 때 apollo client의 data인 isLiked 값 변경되게 만들었습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-16.gif" alt="">
<figcaption>isLiked의 data가 변경되어 Like버튼 텍스트 변경</figcaption>
</figure>
</center>

data로 isLiked외에 다른 정보도 바꿀수도 있습니다. API로부터 오는 정보도 수정할 수 있으면서 local에서 만든 data도 수정할 수 있습니다.
