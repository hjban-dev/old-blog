---
layout: post
title: 개발자를 위한 구글 태그매니저[Google Tag Manager]의 개념
category: Google
tags: [Google]
comments: false
---
> <https://analyticsmarketing.co.kr/> 참고  
> 간단하고 불친절하게 설명합니다. (기본적인 부분 설명 생략)

# 구글 태그매니저[Google Tag Manager]

## 후... GA는 대충 알았고 구글 태그매니저는 또 뭐지?-?

홈페이지를 구성하는 요소들을 태그라고 한다. 버튼 하나, 글씨 하나, 이미지 하나하나 태그들로 이루어져 있습니다. 
자 그렇다면 태그매니저는 말 그대로 그 태그를 관리하는 것 입니다! 그 태그를 관리하여 이벤트를 생성, 제어 등을 할 수 있는 시스템입니다!

### ? 무슨소리요! 구글 애널리틱스로 한 것은 무엇이요!!

네네! 비슷한 기능입니다! 하지만 구글 애널리틱스를 사용할땐 가이드 코드를 수정하고 태그를 직접 변경했었죠? 비개발자라면 대부분 포기해버렸을 그 부분... `태그 매니저 시스템을 사용하면 클릭으로 적용`이 가능합니다! 

[구글 애널리틱스 이벤트 설정](https://hjban-dev.github.io/etc/2020/01/02/etc-01-google_analitics/)

## TA 추적코드 설치

이번에도 가입은 <https://analyticsmarketing.co.kr/digital-analytics/google-tag-manager-basics/3165/> 참고하시면 되고, 가입 후엔 아래 사진 처럼 GA와 비슷한 가이드 코드가 나온다. GA코드는 한 곳에만 붙여 넣으면 됐는데 태그 매니저는 < head >와 < body > **두 군데**에 설치해야 한다.

<center>
<figure>
<img src="/assets/post-img/etc/google-tag-code.jpg" alt="">
<figcaption>google tag manager 추적코드 설치</figcaption>
</figure>
</center>

이제 그 후에 밑에 있는 사진처럼 작업공간이 보일텐데 필자는 아래 표시한 오른쪽 상단 부분.
컨테이너가 게시되지 않았다는게 추적코드 설치가 되지 않았다는 줄 알고 몇번이나 업로드를 했었다. 밑에 태그를 추가하라고 써있어서 추적태그를 삽입하라는 줄 알았지ㅠㅠ  

저 부분은 `태그, 그러니까 이벤트를 추가하고자 하는 태그를 생성하지 않았다는 뜻`! 그것도 모르고 이틀을 넘게 잡고 있었다ㅠㅠ

<center>
<figure>
<img src="/assets/post-img/etc/google-tag-join.jpg" alt="">
<figcaption>google tag manager 작업공간</figcaption>
</figure>
</center>

설치가 되었는지 확인하려면 태그를 추가해야 알 수 있다. 다음 포스팅을 참고하여 태그를 추가해보고 되지 않는다면 위치를 잘 넣었는지 다시 한번 살펴보길 바란다.

## 추적코드 설치 관련 FAQ

### 질문1. 기존 GA 태그를 지우지 않아도 되나요?

이론으로는 괜찮다고 하는데 필자의 경우 처음 실행에 오류가 있었다...ㅠㅠ 그것때문에 또 한참걸림ㅠㅠ  
구글링으로 여러 변수를 찾아봤는데 gt를 설치하면 ga를 따로 설치하지 않아도 된다고도 하는 사람도 있었다. 태그가 제대로 실행되지 않는 이유는 워낙 많으니 ga를 먼저 설치하기 보다 기능이 더 많고 편리한 gt를 먼저 설치하는 것을 추천한다.
