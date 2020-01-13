---
layout: post
title: 개발자를 위한 구글 애널리틱스[Google Analytics] 이벤트 설정
category: Google
tags: [Google]
comments: false
---
> <https://analyticsmarketing.co.kr/> 참고  
> 간단하고 불친절하게 개념만 설명합니다. (기본적인 부분 설명 생략)

# 구글 애널리틱스 [Google Analytics]

## 자! 이제 GA 이벤트를 설정해볼까나?

우선 사용자가 웹사이트에 반응을 보였다는 것은 사용자가 우리가 제공하는 상품이나 서비스 혹은 컨텐츠에 관심이 있다로 해석할 수 있습니다.
GA는 웹페이지 로드시에 자동으로 전송하지만, 이벤트는 웹페이지 로드와 별개로 설정해야 하기 때문에 이를 추적하기 위한 별도의 설정을 해야한다.

## 맞춤 이벤트 추적 설정 전 알아야 할 부분

```javascript
gtag('event', <action>, {
  'event_category': <category>,
  'event_label': <label>,
  'value': <value>
});
```
위 코드는 이벤트 추적을 하기 위한 가이드 라인이다. 이제 위 가이드에 

1. 아래 있는 이벤트 정보를 활용하여 가이드를 변경하고, 
2. 이벤트를 생성할 코드를 찾아서
3. 코드내에 onclick="" 내장 함수를 삽입해야 한다.

| 이벤트 정보 | 설명 | 예 |
| --------- | --------- | --------- |
| 카테고리(Category) | 이벤트의 유형 | 전화연결, 동영상, 다운로드, 상담신청|
| `액션(Action)` | 카테고리에 대한 설명 | 카테고리가 동영상이라면 재생, 일시중지, 중지, 완료 |
| 라벨(Label) | 추적할 이벤트에 대한 추가 정보 | 동영상 제목, 파일명 |
| 값(Value) | 특정한 이벤트에 대해 그 자치를 부여 | 숫자, 변수 값 등|

**액션만 필수 항목이지만 액션과 카테고리는 기본으로 적어주는 것을 권장한다.**

## 맞춤 이벤트 추적 설정

마지막이다...!  
개념만 세워주기 위한 포스팅으로 생각하고 세부내용은 안적는다.  

<https://developers.google.com/analytics/devguides/collection/gtagjs/events> 참고하여 이벤트 이름을 설정할 수 있다.  

후...머리 깨지겠네;;

```javascript
gtag('event', '동영상', {
  'event_category': '재생',
  'event_label': '사용법.mp4',
});
```
ㄴ가이드 코드를 필자가 예시로 만든 코드

<center>
<figure>
<img src="/assets/post-img/etc/google-analitics-event-onclick.jpg" alt="">
<figcaption>google analitics 클릭 이벤트를 넣을 태그에 가이드 코드 삽입</figcaption>
</figure>
</center>


위 사진처럼 변경하여 html 파일을 열어 이벤트를 넣을 태그 내부에 onclick="" 내장 함수로 넣을 수 있다.  
머리아픔...;

## 확인하기

<center>
<figure>
<img src="/assets/post-img/etc/google-analitics-event.jpg" alt="">
<figcaption>google analitics 클릭 이벤트 확인</figcaption>
</figure>
</center>


구글 애널리틱스 페이지에서 실시간 > 이벤트 를 들어가면 방금 삽입한 부분에 대한 결과를 찾을 수 있다.  

## 결과

지금까지 이벤트가 왜 필요한지, 어떻게 설정하는지 등을 알아보았는데, 이벤트 추적은 매우 중요하지만, 소스 코드를 수정해야 한다는 점에서 사업자나 마케터에게 약간(사실 많이)의 장벽이 있다. 코드를 직접 변경한다는 것은 최소 html에 대한 개념이 어느 정도 있어야 가능하니..  

하지만...!! 그럴때 구글 태그매니저를 사용하면 이벤트 설정 시 좀 더 쉽게 그리고 더 다양한 이벤트를 추적할 수 있다.  
그러니까...이제 구글 태그매니저에 대한 정보를 알아봅시다...! ^^;

<center>
<figure>
<img src="/assets/images/stop.jpg" alt="">
</figure>
</center>
