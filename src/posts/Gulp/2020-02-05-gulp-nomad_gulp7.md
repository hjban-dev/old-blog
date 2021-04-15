---
layout: post
title: Gulp Deploying to GH Pages
category: Gulp
tags: [Gulp]
comments: true
---

> 노마드코더의 Gulp 90분 마스터하기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 6 Deploying to GH Pages

## 6.0 Deploying to GH Pages

gulp의 작업은 끝났지만 이번엔 github page를 사용해보겠습니다. gulp-gh-pages를 사용할거고 npm i -D gulp-bro로 설치 할 수 있습니다.

> [Npm gulp-gh-pages 링크](https://www.npmjs.com/package/gulp-gh-pages)

[Npm gulp-gh-pages 링크](https://www.npmjs.com/package/gulp-gh-pages)에서 확인할 수 있는 gulp-gh-pages 사용법
```javascript
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
```

설치를 했으니 import 하겠습니다.

```javascript
import ghPages from "gulp-gh-pages";
```

gh task를 생성하겠습니다. 생성법은 위 사용법과 같습니다.

```javascript
// ---gh task---
const gh = () => gulp.src("build/**/*").pipe(ghPages())
```

그리고 처음에 만들어줬던 명령어 dev와 build 밑에 deploy를 만들어주겠습니다.

```javascript
{
...
  "scripts": {
    "dev": "gulp dev",
    "build": "gulp build",
    "deploy": "gulp deploy"
  },
...
} 
```
우리는 지금까지 dev만 export 했었습니다. 이번엔 build를 export 해줄거고, build가 하는 일은 gulp.series([prepare, assets]); 입니다. 그리고 기존의 dev는 build와 live를 series 하겠습니다.

```javascript
// 기존 코드
export const dev = gulp.series([prepare, assets, live]);

// 바뀐 코드
export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
```

방금 만든 명령어인 deploy를 더 추가해야 합니다. deploy는 build, gh, clean을 하겠습니다.

```javascript
export const deploy = gulp.series([build, gh, clean]);
```

즉 build는 서버가 연결되기 전에 코드들을 준비하는 역할인 prepare와 assets을 불러오고, dev는 이것들을 live하여 서버로 보냅니다. 그리고 deploy는 그것들을 배포하고, 필요 없는 코드는 지워줍니다.
