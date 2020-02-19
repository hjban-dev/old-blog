---
layout: post
title: Movie Web App - Apollo GraphQL2
category: GraphQL
tags: [GraphQL, React, Apollo]
comments: false
---

> 노마드코더의 GraphQL로 영화 웹 앱 만들기를 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 1 Apollo GraphQL

## 1.3 Apollo Cache and Styles

Component와 style부분은 생략하였습니다.
React Apollo의 큰 장점중 하나는 cache를 갖고 있다는 것입니다. 한번 영화를 클릭하면 다음에 클릭할때는 loading이 뜨지 않습니다.  

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-5.gif" alt="">
<figcaption>cache로 인해 두번째 클릭에선 loading이 뜨지 않음</figcaption>
</figure>
</center>

---

## 1.4 Data & Apollo Dev Tools

전 장에서 확인했었지만 서버를 시작하고 query를 불러오기 전 그러니까 loading중에는 data가 없었습니다.  
data.movie.title으로 작성하고 view 페이지를 확인해보겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-5.jpg" alt="">
<figcaption>loading중에는 data를 찾을수 없기에 undefined error가 발생</figcaption>
</figure>
</center>

undefined error가 발생합니다.  
그래서 우리는 data.movie.title의 형식으로 작성하지만 반드시 삼항연산자를 사용하여 작성해주어야 합니다. 

```javascript
export default () => {
  let { id } = useParams();
  id = parseInt(id);

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });

  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        <Subtitle>English · 4.5</Subtitle>
        <Description>lorem ipsum lalalla </Description>
      </Column>
      <Poster
        bg={data && data.movie ? data.movie.medium_cover_image : ""}
      ></Poster>
    </Container>
  );
};
```

loading 중이라면 Loading... 텍스트를 return, loading이 끝나면 data도 확인할 수 있기 때문에 data.movie.title을 return해도 오류가 발생하지 않습니다.  

Subtitle과 Description부분은 loading중 일땐 보이지 않고 loading이 끝난 후 노출시켜주겠습니다.

```javascript
    (...)
        {!loading && data.movie && (
          <>
            <Subtitle>
              {data.movie.language} · {data.movie.rating}
            </Subtitle>
            <Description>
              {data.movie.description_intro}
            </Description>
          </>
        )}
    (...)
```

loading이 끝나고, data.movie에 정보가 있다면 Subtitle과 Description을 반환시켰습니다.  

---

## 1.5 Suggestions & Optional Chaining

Suggestions이라는 query를 추가하겠습니다. Suggestions은 GraphQL API 에서 작성해두었던 query입니다. 

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-6.jpg" alt="">
<figcaption>GraphQL playground에서 확인 한 sugegestion query</figcaption>
</figure>
</center>

Detail.js의 전에 작성했었던 GET_MOVIE gql에 suggestions을 추가로 작성하겠습니다. 

```javascript
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;
```

2019.12.28일에 Js에 새로 추가된 기능인 Optional Chaining의 사용으로 반복하여 사용하던 data.movie를 `?`를 사용함으로써 생략가능합니다.

```javascript
(...)
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        <Subtitle>
         {data?.movie?.language} · {data?.movie?.rating}
        </Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
(...)
```

Home.js의 return 부분도 변경해주겠습니다.

```javascript
(...)
export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map(m => (
        	<Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
        ))}
      </Movies>
    </Container>
  );
};
```

코드가 훨씬 간단해지고 보기 편해졌습니다.




