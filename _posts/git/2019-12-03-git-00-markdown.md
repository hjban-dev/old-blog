---
layout: post
title:  MarkDown 문법 정리
category: Git
tags: [Git]
comments: false
---

>몇번을 보고 또 봐도 헷갈리는 나레기를 위한 문법 정리!^^ [출처](https://heropy.blog/2017/09/30/markdown/)  

# 마크다운(MarkDown) 은?  

파일 확장자가 .md로 된 파일이 마크다운 문법으로 작성된 파일  
사용법이 매우 쉽고, 빠르게 문서를 정리할 수 있음 (문법과 관리 모두 편리)

---

## 마크다운 문법(syntax)

### 제목(Header)

```
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6
```
결과 =  
  
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6


### 강조(Emphasis)

각각 `<em>` , `<strong>` ,`<del>` 태그로 변환됩니다.

*이텔릭체는* 텍스트 양 옆에 `*` 혹은 `_`를 사용하세요.  
**두껍게는** `**` 혹은 `__` 사용하세요.  
**_이텔릭체_와 두껍게** 를 같이 사용할 수 있습니다.  
~~취소선~~ `~~` 를 사용하세요.  
<u>밑줄</u>은 `<u></u>`를 사용하세요.  

### 목록(List)

```
1. 순서가 필요한 목록
1. 순서가 필요한 목록
  - 순서가 필요하지 않은 목록(서브) 
  - 순서가 필요하지 않은 목록(서브) 
1. 순서가 필요한 목록
  1. 순서가 필요한 목록(서브)
  1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)
```
결과 =
  
1. 순서가 필요한 목록
1. 순서가 필요한 목록
  - 순서가 필요하지 않은 목록(서브) 
  - 순서가 필요하지 않은 목록(서브) 
1. 순서가 필요한 목록
  1. 순서가 필요한 목록(서브)
  1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)

### 링크(Links)

`<a>` 로 변환됩니다.

```
[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"
```
결과 =  
  
[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.  
구글 홈페이지: https://google.com  
네이버 홈페이지: <https://naver.com>  

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"


### 이미지(Images)

```
<center>
<figure>
<img src="/assets/images/promise.jpg" alt="">
</figure>
</center>

![대체 텍스트(alternative text)를 입력하세요!](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명(title)을 작성하세요.")
[![Vue](/images/vue.png)](https://kr.vuejs.org/)
```

### 인라인 코드(Code) 강조

```
`마크다운 문법`
```
결과 =  
  
`마크다운 문법`

### 블럭 코드(Code) 강조

`를 3번 이상 입력하고 코드 종류도 적습니다.

```
    ```html
    <a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
    ```
    
    ```css
    .list > li {
      position: absolute;
      top: 40px;
    }
    ```
    
    ```javascript
    function func() {
      var a = 'AAA';
      return a;
    }
    ```
```
결과 =
```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = 'AAA';
  return a;
}
```

### 표(Table)

```
| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |
```

결과 =  
  
| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---|:---
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |

### 인용문(BlockQuote)

```
인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3
```
결과 =  
  
인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3

### 수평선(Horizontal Rule)

```
---
(Hyphens)

***
(Asterisks)

___
(Underscores)
```
결과 =  
  
---
(Hyphens)

***
(Asterisks)

___
(Underscores)

### 줄바꿈(Line Breaks)
‘2번의 띄어쓰기’나 `<br>`를 활용할 수 있습니다.

```
동해물과 백두산이 마르고 닳도록 
하느님이 보우하사 우리나라 만세   <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>  
대한 사람 대한으로 길이 보전하세  
```
결과 =  
  
동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세  
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세  
