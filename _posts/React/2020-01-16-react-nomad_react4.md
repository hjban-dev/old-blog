---
layout: post
title: Nomadcoder's ReactJS JSX & Props 2
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 JSX & Props

## 2.2 Dynamic Component Generation

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-11.jpg" alt="">
<figcaption>Component를 통해서 정보 전달</figcaption>
</figure>
</center>

위 이미지는 전 장에서 만들었던 코드이고, 당연하게 효율적이지 않습니다. 보다시피 새로운 음식을 추가할 때 마다 복사 + 붙여넣기로 수정하고 있습니다. 그 이유는 새로운 음식에 대한 데이터가 우리가 갖고 있던 데이터가 아니기 때문입니다.  
다시 말하면 위 코드는 <u>정적 데이터</u>를 추가 하는 방법이였습니다.

이번엔 <u>동적 데이터</u>를 추가하는 방법을 알아봅시다!
자, 우리는 이미 API에서 가져온 **food**라는 데이터가 있다고 가정합시다.

우리는 가져온 **food**로 리스트를 뽑는 함수를 만들겁니다. 먼저 foodILike로 부르는 array를 만들고 foodILike는 **food** object의 배열이 될 것입니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-14.jpg" alt="">
<figcaption>상수 foodILike 배열안에 food 데이터</figcaption>
</figure>
</center>


필자가 가정하여 생성한 **food**를 foodILike에 넣은 코드입니다.  

React는 Javascript기반으로 만들어진 프레임워크입니다. 그 말은 Javascript를 사용할 수 있다는 점!   
우리는 Array 메소드인 `map()`을 활용하여 foodILike라는 긴 코드의 리스트를 뽑아 볼 겁니다!

* array.map( function ( **currentValue** [, index] [, arr] ), thisValue ) : map 내부의 콜백함수의 결과로 array를 만들어 반환

----

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-15.jpg" alt="">
<figcaption>foodILike를 map()으로 Food Component로 name props정보 전달</figcaption>
</figure>
</center>

Component 내부에서 `{}` 중괄호를 사용하면 Javascript코드를 사용할 수 있습니다.

위 이미지의 결과를 보면 foodILike의 name으로 들어가있던 chiken, kimbap, pizza가 잘 들어가 있습니다. 이번엔 imgae 리스트도 나올수 있게 만들어봅시다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-16.jpg" alt="">
<figcaption>Food Component로 picture props추가</figcaption>
</figure>
</center>

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-13.jpg" alt="">
<figcaption>결과</figcaption>
</figure>
</center>

Food Component는 name, picture 두 개의 props를 가지고 있는 것을 볼 수 있고, 이미지 노출도 잘 되고 있다.
