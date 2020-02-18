---
layout: post
title: Movie Web App - Apollo GraphQL
category: GraphQL
tags: [GraphQL, React, Apollo]
comments: false
---

> 노마드코더의 GraphQL로 영화 웹 앱 만들기를 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 1 Apollo GraphQL

## 1.0 Apollo Client

> [apollo 공식 사이트의 설치 방법](https://www.apollographql.com/docs/react/get-started/)

apollo-boost는 GraphQL Yoga처럼 모든 것을 다 설정이 되어있는 package입니다. GraphQL Yoga의 경우는 준비가 된 server이고, apollo-boost는 client 입니다.  
위 링크를 참고하여 apollo.js를 생성하여 내부에 apollo-boost로 client를 생성하겠습니다.

```javascript
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

export default client;
```
GraphQl의 경우 우리는 URL을 갖지 않습니다. 그래서 apollo client에 하나의 URL만 넣어도 됩니다. 들어가는 URL은 GraphQL로 만들었던 로컬호스트를 연결해주었습니다..
이제 index.js에 가서 방금 만든 client를 연결시킵니다. 

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
```
ApolloProvider는 client가 필수입니다.  
그리고 yarn start를 실행했을때 localhost의 개발자 도구에서 아무 문제 없다면 apollo가 잘 작동하고 있는 것입니다.

## 1.1 GET_MOVIES Query

Javascript는 GraphQL의 query를 이해하지 못합니다. 그러니 GraphQL을 import하여 query를 작성해주겠습니다.  
Home.js에 아래 코드를 작성하겠습니다.

```javascript
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  return <h1>Home</h1>;
};
```

GET_MOVIES로 query를 작성하였고, useQuery로 query를 사용하였습니다. useQuery는 react hook입니다. apollo는 hook과 사용하기 좋습니다. 

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-1.jpg" alt="">
<figcaption>Console창으로 확인 할 수 있는 GraphQl의 data</figcaption>
</figure>
</center>

fetch나 POST같은 건 하지 않았지만 data를 얻을 수 있습니다.  
우리는 GET_MOVIES를 만들어서 data를 불러왔고, 다음 강의에선 불러온 data를 링크를 통해 View 페이지에 뿌리고, 링크를 연결하겠습니다.

---

## 1.2 GET_MOVIE Query

우리는 가져온 data를 링크 형태로 페이지에 노출시키고, 링크를 연결하면 각각 영화의 세부 내용이 노출되게 만들겠습니다.  
먼저 components폴더에 Movie.js를 생성한 후 Movie Component를 만들겠니다. 링크를 연결해야 하니 Link를 사용하여 작성하겠습니다.

```javascript
import React from "react";
import { Link } from "react-router-dom";

export default ({ id }) => (
  <div>
    <Link to={`/${id}`}>{id}</Link>
  </div>
);
```

그리고 Home.js에서 가져온 data를 map()메소드를 사용하여 각각 Movie Compoenent로 생성하겠습니다. 
div로 구성된 간단한 Component와 style부분은 생략하겠습니다. 

```javascript
(...)
import Movie from "../components/Movie";
(...)
export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>apollo_movie</Title>
        <Subtitle>with GrpahQL!</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading &&
        data.movies &&
        data.movies.map(m => <Movie key={m.id} id={m.id} />)}
    </Container>
  );
};
```

loading 상태이면 <Loading>Loading...</Loading>을 return.  
loading 상태이지 않고, data에 movies정보가 있으면 data.movies.map()을 실행합니다.  

이전 장의 App.js에서 경로가 /:id 이라면 Detail Component를 보여주게 했었습니다. 이제 Detail.js를 수정하겠습니다.  
 링크를 클릭 했을 때 정보를 잘 가져오는지 확인해봅시다.

```javascript
import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { id } = useParams();
  console.log(id);
  return "Detail";
};
```

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-2.jpg" alt="">
<figcaption>Console창으로 확인되는 id정보</figcaption>
</figure>
</center>

이동된 링크에서 현재의 id값을 확인 할 수 있습니다.  
data가 연동된 것을 확인했으니 GET_MOVIE라는 이름의 변수 query를 작성하겠습니다. 이번에 필요한 query는 argument가 필요한 query입니다. 그럴 땐 작성할 때 query의 이름을 적어야 합니다.

```javascript
(...)

import { gql } from "apollo-boost";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;
```
query getMovie라는 이름을 정해주었고, argument에 대한 정보도 적어주었습니다. id라는 변수가 들어간다는 의미로 $id라고 작성하였습니다.  

useQuery라는 hook을 사용하여 GET_MOVIE를 연결하겠습니다.

```javascript
(...)
import { useQuery } from "@apollo/react-hooks";
(...)
export default () => {
  let { id } = useParams();
  id = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });

  if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};
```

GET_MOVIE query를 사용할 때 $id값을 필수로 정해주었습니다. 그래서 useQuery를 사용할 때도 variables를 지정해주어야 합니다.  
Home.js에서 사용했던 그대로 loading 중이면 "loading", data가 있고, data.movie의 정보도 있다면 data.movie.title을 return 하게 하였습니다. 

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-3.jpg" alt="">
<figcaption>클릭한 id의 title을 노출</figcaption>
</figure>
</center>
