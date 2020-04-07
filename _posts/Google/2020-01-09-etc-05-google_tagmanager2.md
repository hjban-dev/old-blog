---
layout: post
title: 개발자를 위한 구글 태그매니저[Google Tag Manager]의 설치
category: Google
tags: [Google]
comments: false
---
> <https://analyticsmarketing.co.kr/> 참고  
> 간단하고 불친절하게 설명합니다. (기본적인 부분 설명 생략)

# 구글 태그매니저[Google Tag Manager]

## '구글 태그매니저' 태그 설치 과정

1. 태그생성 : 추가하고자 하는 태그(이벤트) 생성 
2. 트리거 지정 : 태그를 실행시키는 트리거 작성 ex) 배너를 클릭
3. 테스트 : 미리보기로 테스트
4. 게시 : 컨테이너 버전 생성 및 게시

## '구글 태그매니저' 태그 설치

왼쪽 메뉴 태그 > 새로만들기 클릭

<center>
<figure>
<img src="/assets/post-img/etc/google-tag-new-tag.jpg" alt="">
<figcaption>google tag manager 태그 새로 만들기</figcaption>
</figure>
</center>

1. 태그 이름 지정
2. 태그 구성
3. 트리거 지정

으로 태그를 생성할 수 있다.  

태그 구성할때 태그 유형, 추적 유형 등을 선택하여 원하는 방향으로 생성 가능하고 트리거도 기본으로 페이지뷰 트리거 하나가 생성되어 있지만, 왼쪽 메뉴 **트리거 > 새로만들기** 를 클릭하여 다른 유형의 트리거를 생성한 후 지정 가능하다.

<center>
<figure>
<img src="/assets/post-img/etc/google-tag-new-tag2.jpg" alt="">
<figcaption>필자가 만든 태그</figcaption>
</figure>
</center>

필자의 경우 트리거는 클릭 요소를 넣었고 추적유형, 카테고리, 작업 은 직접 입력하였다. 
생성하였다면 오른쪽 상단에 미리보기 버튼있다. 미리보기 버튼 클릭 후 연결해 둔 사이트로 이동한다.  

발생한 이벤트를 ‘GA’를 통해 보고 싶다면 `GA의 유니버셜코드와 GTM을 연결`시켜야된다. 한번 연결 후엔 재연결 필요 X

<center>
<figure>
<img src="/assets/post-img/etc/google-tag-new-tag3.jpg" alt="">
<figcaption>미리보기 버전의 필자 사이트</figcaption>
</figure>
</center>

필자는 '최근 글 바로가기'에 클릭 요소를 넣어서 클릭을 하면 하단 창에 클릭 이벤트가 발생한다. 이벤트 발생이 된다면 태그가 정상 작동하는 것!  
클릭하면 페이지 이동이 되기 때문에 클릭할때 `'Ctrl'`을 누르고 클릭하면 페이지 이동을 막아준다. Variables 탭에서 클릭 이벤트로 인한 변수를 확인 할 수 있다.  

정상 작동을 확인했으니, 제출하여 버전을 생성하면 GA에서 실시간으로 확인이 가능하다. 
**이 과정에서 처음 세팅할 때 24시간이라는 시간이 필요하다.**

<center>
<figure>
<img src="/assets/post-img/etc/google-tag-view.jpg" alt="">
<figcaption>미리보기 버전의 필자 사이트</figcaption>
</figure>
</center>

확인해보니 동일 아이피 재접속은 카운팅 되지 않는 것 같고, 크롬 시크릿 모드로 들어갈땐 카운팅이 된다.
너무 어려워...!!

<center>
<figure>
<img src="/assets/images/stop2.JPG" alt="">
<figcaption>살려주쇼...</figcaption>
</figure>
</center>
