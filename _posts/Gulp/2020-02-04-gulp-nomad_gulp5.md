---
layout: post
title: Gulp SCSS Compilation
category: Gulp
tags: [Gulp]
comments: true
---

> 노마드코더의 Gulp 90분 마스터하기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 4 SCSS Compilation

## 4.0 Gulp SASS

이번엔 SASS파일을 compile하겠습니다. 이번에도 gulp-sass라는 플러그인을 사용할거고, npm i node-sass gulp-sass -D 로 설치할 수 있습니다. 명령어가 조금 다른 이유는 gulp-sass는 node-sass와 같이 설치해야 합니다.

> [Npm gulp-sass 링크](https://www.npmjs.com/package/gulp-sass)

gulp-sass가 node-sass로 sass파일을 전달해주는 흐름입니다.  
위 링크를 확인하시면 먼저 gulp-sass를 import해야 하고, 그 다음 gulp-sass를 compiler로 보내고 있습니다. 우리도 같은 방법으로 import 해오고, routes를 작성해봅시다.  

scss는 src와 dest 뿐만 아니라 watch도 작성해주어야 합니다. 왜냐햐면 compile할 파일은 style.scss 하나이지만, 변경을 감지해야 하는건 scss폴더 내부 모든 scss 파일이기 때문입니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_5-1.jpg" alt="">
<figcaption>gulp-sass import와 routes의 scss작성</figcaption>
</figure>
</center>

설치와 import가 끝났으니 task를 만들어줍시다. task의 이름은 styles 이고, 이전에 만든 task img와 같습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_5-2.jpg" alt="">
<figcaption>styles 작성</figcaption>
</figure>
</center>

pipe의 on()부분의 error는 [Npm gulp-sass 링크](https://www.npmjs.com/package/gulp-sass)에 있는 부분을 그대로 가져왔습니다. 가져오려는 scss가 없다면 그에 관련된 오류를 반환하라는 의미의 error입니다.  
브라우저의 console창에 단순히 'css파일이 없습니다.' 같은 error가 아니라 어떤 부분이 다르다고 알려줍니다.  

_variabels 의 변수 $red를 $red2로 변경한 후 터미널 창을 살펴봅시다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_5-4.jpg" alt="">
<figcaption>styles 작성</figcaption>
</figure>
</center>

'Undefined variable: "$red"'라고 정확히 알려줍니다.

다시 코드로 돌아가서 watch부분에도 styles를 추가하여 주었습니다. 위에서 말했듯이 모든 파일 정보를 넣은 routes.scss.watch를 첫번째 인자로 넣었습니다.  

assets부분에 styles를 추가하면 끝입니다. yarn dev로 실행 해보겠습니다. 

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_5-3.jpg" alt="">
<figcaption>실행결과</figcaption>
</figure>
</center>

정상 작동하고 있습니다. style.scss에서 _reset.scss나 _variables.scss를 import해오는건 scss가 하는 일이고 scss를 css로 변경하는 것을 gulp가 한 것 입니다.  

사실 style.scss를 살펴보면 display: flex나 flex-direction: column와 같이 최신 css 문법을 사용하고 있습니다. 이건 모든 브라우저가 이해할 수는 없을 것입니다. 다음장에선 우리의 css를 좀 더 호환성 좋게 만들어봅시다! 

----

## 4.1 Minify + Autoprefixer

전 장에서 설명했듯이, css의 호환성을 향상시키기 위해 gulp-autoprefixer를 설치하겠습니다. npm i gulp-autoprefixer -D로 설치하고 import 해주겠습니다.

> [Npm gulp-autoprefixer 링크](https://www.npmjs.com/package/gulp-autoprefixer)

```javascript
import autoprefixer from "gulp-autoprefixer";
```

우리가 보통 task를 작성할 때 작업하는 순서는 src, pipe, dest 세 단계였지만 styles에게는 pipe를 하나 더 넣어주겠습니다.  

gulp-autoprefixer에게는 많은 옵션들이 있습니다. 그 중 하나인 browsers는 여러분의 코드를 얼마나 호환 가능하게 할지 정하는 것입니다. (20.2월 browsers옵션이 development로 바뀐걸로 보입니다. 사용할 때 [Npm gulp-autoprefixer 링크](https://www.npmjs.com/package/gulp-autoprefixer)를 참고하길 바랍니다.)

```javascript
const styles = () => 
  gulp
    .src(routes.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      "development": [
        "last 2 chrome version",
        "last 2 firefox version",
        "last 2 safari version",
        "last 2 ie version"
      ]
    }))
    .pipe(gulp.dest(routes.scss.dest))
```

이제 서버를 다시 실행시키면 내가 작성한 css외에 코드들이 들어간것을 볼 수 있습니다!

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_5-5.jpg" alt="">
<figcaption>작성했던 style.scss와 컴파일 된 style.css</figcaption>
</figure>
</center>

컴파일은 완료 됐으나 css를 보니 공백이 많이 있습니다. 공백 하나당 1바이트이니 길이가 긴 css는 gulp가 느려질 위험이 있습니다. 그래서 우리는 gulp-csso를 사용하여 css파일을 최소화 하겠습니다. 

> [Npm gulp-csso 링크](https://www.npmjs.com/package/gulp-csso)

npm i gulp-csso -D로 설치하고, import하겠습니다. gulp-csso도 사용가능한 몇 옵션들이 있는데 옵션은 사용하지 않고 styles()에 하나의 pipe만 더 추가해주겠습니다.

```javascript
const styles = () => 
	gulp
		.src(routes.scss.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			"development": [
				"last 2 chrome version",
				"last 2 firefox version",
				"last 2 safari version",
				"last 2 ie version"
			]
		}))
		.pipe(miniCSS())
		.pipe(gulp.dest(routes.scss.dest))
```

이렇게 여러분이 원하는 모든것을 설치할 수 있습니다.  
다음 장에서는 js를 배워봅시다!
