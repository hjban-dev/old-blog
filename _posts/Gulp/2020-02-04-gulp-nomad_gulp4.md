---
layout: post
title: Gulp Image Optimization
category: Gulp
tags: [Gulp]
comments: true
---

> 노마드코더의 Gulp 90분 마스터하기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 3 Image Optimization

## 3.0 Image Optimization

이제 이미지를 최적화 해봅시다. 이번에도 gulp-image 라이브러리를 설치하여 사용해야합니다. 설치는 npm install -D gulp-image로 가능합니다.

> [Npm gulp-image 링크](https://www.npmjs.com/package/gulp-image)

설치가 되었으면 import한 후 routes를 만들겠습니다. 우리는 src/img 폴더의 모든 파일을 선택하려고 하니 전 장과 마찬가지로 *부호로 선택해주겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-10.jpg" alt="">
<figcaption>gulp-image를 import하고 routes 생성</figcaption>
</figure>
</center>

이미 알겠지만 img의 **src**는 가져오려는 이미지의 정보, **dest**는 최적화 한 이미지를 보낼 경로의 정보 입니다. 우리는 모든 파일을 가져와서 `"src/img/*`를 사용했다고 했습니다. 만약 폴더 내부의 모든 png파일을 가져오고 싶다면 `"src/img/*.png"` 라고 작성하면 됩니다.  

자, 이제 img함수를 만들어보겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-11.jpg" alt="">
<figcaption>img()의 구성 코드</figcaption>
</figure>
</center>

pug()를 만들었던 그대로 만들겠습니다. gulp.src()를 return하고 image()를 실행하는 pipe와 gulp.dest()를 실행하는 pipe를 만들었습니다.  

그리고 assets 단계가 아니라 prepare 단계에 img를 추가 하겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-12.jpg" alt="">
<figcaption>img()의 구성 코드</figcaption>
</figure>
</center>

위 이미지를 보시면 터미널 창에 logo.svg의 이미지 용량을 줄였다고 말해줍니다. 기존 대비 용량이 0.5%라고 말합니다. 이미지의 용량을 훌륭하게 줄였습니다!  
그리고 build폴더를 확인해보면 logo.svg파일이 생성되어 있는 것을 확인할 수 있습니다.  

gulp-image에는 여러 옵션들이 있으니 [Npm gulp-image 링크](https://www.npmjs.com/package/gulp-image)에서 확인해보시기 바랍니다.

문제는 우리가 위에서 만든 img()가 시간이 많이 걸릴 수도 있다는 것 입니다. 만약 여러분이 큰 용량의 jpg파일이나 img폴더에 img들이 많이 존재한다면 그것을 처리하는데 시간이 오래 걸릴 것입니다.  
그래서 우리는 img를 save할 때 마다 매번 돌리지 않고, 변화가 있을 때만 처리하도록 watch()에 넣어줍시다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-13.jpg" alt="">
<figcaption>watch()에서 img()를 사용한 코드</figcaption>
</figure>
</center>

이로써 우리는 gulp에서 html을 compile하고 img를 최적화하는 방법까지 알아보았습니다. 이제 css와 javascript만 남았습니다. 다음 장에서 계속 알아봅시다.
