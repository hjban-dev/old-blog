---
layout: post
title: Movie Web App - Local State 2
category: GraphQL
tags: [GraphQL, React, Apollo]
comments: false
---

> 노마드코더의 GraphQL로 영화 웹 앱 만들기를 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 Local State

## 2.2 Connecting Detail and Home

apollo.js파일에서 Mutation의 LikeMovie를 toggleLikeMovie로 변경하겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-18.jpg" alt="">
<figcaption>LikeMovie를 toggleLikeMovie로 변경</figcaption>
</figure>
</center>

Movie.js에 LIKE_MOVIE로 만들었던 gql부분의 likeMovie를 toggleLikeMovie로 변경하고, isLiked를 추가하겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-19.jpg" alt="">
<figcaption>toggleLikeMovie로 변경, isLiked 추가</figcaption>
</figure>
</center>

그리고 Movie.js파일의 하단에 return하는 부분을 toggleMovie로 수정하겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-20.jpg" alt="">
<figcaption>return코드에서 likeMovie를 toggleMovie로 수정</figcaption>
</figure>
</center>

기존의 button의 onClick부분이 likeMovie일 때는 삼항연산자로 null값을 정해주었었는데, toggleMovie로 변경되면서 삼항연산자는 지워주고 toggleMovie만 지정해두었습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-20.gif" alt="">
<figcaption>toggleMovie작동</figcaption>
</figure>
</center>

like버튼이 정상작동하니 isLiked를 detail page에서도 노출될 수 있게 수정하겠습니다.  
Detail.js의 GET_MOVIE gql에 client에서 만든 isLiked를 추가하고, return하는 부분에서 loading에 따른 삼항연산자에 title옆에 isLikde에 따른 OK와 NO를 추가하겠습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-21.jpg" alt="">
<figcaption>detail page에서 isLiked활용</figcaption>
</figure>
</center>

Detail페이지에 각각의 Movie id를 가져와서 그 id에 따른 return값을 주었습니다.

<center>
<figure>
<img src="/assets/post-img/graphql/movie_graphql_apollo_1-22.gif" alt="">
<figcaption>detail page에서 isLiked에 따른 결과값 확인</figcaption>
</figure>
</center>






