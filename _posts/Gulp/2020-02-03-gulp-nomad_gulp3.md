---
layout: post
title: Gulp Webserver and Watching Files
category: Gulp
tags: [Gulp]
comments: true
---

> 노마드코더의 Gulp 90분 마스터하기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 2 Webserver and Watching Files

## 2.0 Dev Server

개발 흐름을 파악했으니 이제 우리가 해야할 일은 개발 서버를 만들어보겠습니다. 우리는 gulp-webserver라는 플러그인을 사용하겠습니다.

> [Npm gulp-webserver 링크](https://www.npmjs.com/package/gulp-webserver)

<u>yarn add gulp-webserver -D</u>로 설치하고 import해주겠습니다.

```javascript
import ws from "gulp-webserver"
```

webserver라는 상수를 만들어주겠습니다. gulp는 처음에 src()로 서버에서 보여주고 싶은 폴더를 넣어주고, pipe로 ws(webserver)를 실행하겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-7.jpg" alt="">
<figcaption>상수 webserver의 구성</figcaption>
</figure>
</center>

위 이미지의 ws의 옵션 부분은 [Npm gulp-webserver 링크](https://www.npmjs.com/package/gulp-webserver)를 참고하여 추가하였습니다.  

그리고 dev 상수에 webserver를 추가하여 실행할 수 있지만 이번에도 다른 series를 만들겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-8.jpg" alt="">
<figcaption>상수 postDev의 생성과 사용</figcaption>
</figure>
</center>

이제 터미널에 yarn dev를 실행하면 localhost의 8000번 포트에 build 폴더 내부 내용이 노출됩니다. 하지만 index.pug나 footer.pug를 수정해도 반영되지 않습니다. gulp가 우리의 명령에 따라 우리의 파일들을 컴파일을 한걸로 task가 끝난 것입니다.  
다음장에선 gulp가 우리의 파일들을 계속 지켜보고 있게 만들어봅시다.

----

## 2.1 Watching Files

Gulp의 API중 하나인 watch()를 사용해봅시다. 

> [Gulp의 공식 사이트의 watch() 관련 내용 링크](https://gulpjs.com/docs/en/api/watch)

watch()는 무엇을 해주는 기능이냐면, 첫번째 인자로 있는 부분을 계속 지켜보는 기능을 합니다. 그러니까 watch()는 지켜봐야 하는 파일이랑 몇 옵션을 인자로 받아주는 task를 만들어주면 됩니다.  

watch라는 함수를 만들고 내부엔 gulp의 watch를 실행하게 하겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-9.jpg" alt="">
<figcaption>상수 postDev의 생성과 사용</figcaption>
</figure>
</center>

최상단의 routes.put.watch 부분은 src폴더의 모든 pug파일을 지정해두었습니다. 그리고 모든 파일을 watch한 후에는 pug를 실행한다고 써있습니다.  
이제 그러면 내가 partials의 footer.pug를 바꿔도 실시간으로 반영된다는 말입니다.

그리고 postDev 상수에 watch를 추가해줍니다.

```javascript
const postDev = gulp.series([webserver, watch]);
```

서버를 실행하면 조금 느리지만 제대로 실행되고 있습니다. 위 postDev에서 ([webserver, watch])부분을 동시에 실행하게 하려면 series를 parallel로 변경해주면 됩니다. parallel은 gulp의 API중 하나입니다.

> [Gulp의 공식 사이트의 parallels() 관련 내용 링크](https://gulpjs.com/docs/en/api/parallel)

```javascript
const postDev = gulp.parallel([webserver, watch]);
```

코드 실행의 변화는 없지만 gulp는 두 가지의 task를 동시 진행하고 있습니다.  

다음장에서는 watch해야 하는 파일과 compile해야 하는 파일을 구분해보겠습니다.
