---
layout: post
title: Gulp Babel Support
category: Gulp
tags: [Gulp]
comments: true
---

> 노마드코더의 Gulp 90분 마스터하기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 5 Babel Support

## 5.0 Babelify + Browserify

마지막 남은 js를 실행해보겠습니다. gulp-bro를 사용하여 import, export등 브라우저가 알지 못하는 문법을 정리해줍시다. yarn add gulp-bro로 설치합니다.

> [Npm gulp-bro 링크](https://www.npmjs.com/package/gulp-bro)

[Npm gulp-bro 링크](https://www.npmjs.com/package/gulp-bro)에서 확인할 수 있는 gulp-bro 사용법
```javascript
gulp.task('build', () =>
  gulp.src('app.js')
    .pipe(bro({
      transform: [
        babelify.configure({ presets: ['es2015'] }),
        [ 'uglifyify', { global: true } ]
      ]
    }))
    .pipe(gulp.dest('dist')
)
```

위 사용법을 확인해보면 babelify 사용한게 보입니다. babelify도 같이 설치해주고 두 가지 모두 import 해주겠습니다.

```javascript
import bro from "gulp-bro";
import babelify from "babelify";
```

이제 js관련 rotues와 js task를 생성하겠습니다. 생성법은 이전 코드들과 비슷합니다.

```javascript
// ---js routes---
const routes = {
	.
	.
	.
	js:{
		watch :"src/js/**/*.js",
		src: "src/js/main.js",
		dest: "build/js"
	}
};

// ---js task---
const js = () => 
	gulp
		.src(routes.js.src)
		.pipe(bro({
			transform:[
				babelify.configure({ presets: ['@babel/preset-env'] }),
				[ 'uglifyify', { global: true } ]
			]
		})).pipe(gulp.dest(routes.js.dest));
```

위의 js task에 보면 uglifyify가 사용되었는데 저것도 모듈이라 따로 설치 필요합니다.

```javascript
// ---watch에 js추가---
const watch = () => {
	gulp.watch(routes.pug.watch, pug);
	gulp.watch(routes.img.src, img);
	gulp.watch(routes.scss.watch, styles);
	gulp.watch(routes.js.watch, js);
};

// ---assets 부분에 js 추가---
const assets = gulp.series([pug, styles, js]);
```

위 코드를 진행하고 서버를 실행 했을 때, 처음에 만들었던 random() 함수가 실행된다면 정상 작동하는 것 입니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_5-7.jpg" alt="">
<figcaption>console창에서 random()함수 실행 확인</figcaption>
</figure>
</center>
