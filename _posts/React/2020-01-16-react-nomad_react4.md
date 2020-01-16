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

Food Component는 name, picture 두 개의 props를 가지고 있는 것을 볼 수 있고, 이미지 노출도 잘 되고 있습니다.

----

## 2.3 .map Recap

이번엔 위의 코드의 App 컴포넌트에서 arrow function으로 return하는 부분을 renderFood라는 **function**을 따로 만들어서 진행해보자. 어려워 할 것 없이, 방식은 같습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-18.jpg" alt="">
<figcaption>App()을 App() + renverFood() 로 변경</figcaption>
</figure>
</center>

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-17.jpg" alt="">
<figcaption>결과</figcaption>
</figure>
</center>

텍스트와 이미지가 나오는 결과는 같고 <u>rendering 하는 방식을 function 호출로 변경했을 뿐이다</u>. console창에서 나오는 array가 우리의 눈엔 좀 낯설지만 기본적인 react Component이다

위와 같이 함수를 호출하는 방식도 있다는 예시였고 다시 내부 arrow funciton으로 호출하는 방식으로 돌아가서, 아까부터 계속 console창에서 거슬리는 Warning을 살펴보자.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-19.jpg" alt="">
<figcaption>console warning</figcaption>
</figure>
</center>

**Warning 메세지가 각각의 list안의 child가 unique한 key prop을 가져야 한다고 말하고 있습니다.**  
그 말의 의미는 React의 element들은 유일해야하고 우리가 이것들을 list안으로 집어 넣으면 그것들이 각각 유일성이 사라진다는 것 입니다.  
  
옹?-? 우리는 foodILike의 element들이 서로 다른 name과 다른 image를 가지고 있는 것을 알수 있지만, React는 그것을 인식하지 못합니다. 흐음... =ටᆼට= 뭔가 이상하지만 이제 우리가 할 일은 foodILike의 element에 각각의 ID를 추가해야 한다는 것 입니다.

그래서 우리는 foodILike에 **id**라는 값을 넣어줄거고, 그 id를 활용하여 Food Component에 새 **prop**을 넣어 주겠습니다. 그리고 그 prop은 React가 요청하던 바로 `key`입니다. 

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_3-20.jpg" alt="">
<figcaption>id 값과 prop key 추가</figcaption>
</figure>
</center>

보다시피 key prop은 Food Component로 전달되지 않습니다. 사용되고 있지도 않고.  
key prop을 생성하는 이유는 단지 react내부에서 사용하기 위한 것이고, 어렵게 생각하지 말고 이건 react를 활용하는 방법인 것 뿐입니다.






