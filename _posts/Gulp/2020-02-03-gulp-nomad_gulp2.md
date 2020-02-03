---
layout: post
title: Gulp Pug Compilation
category: Gulp
tags: [Gulp]
comments: true
---

> 노마드코더의 Gulp 90분 마스터하기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 1 Pug Compilation

## 1.0 Pug Task part One

자, 이제 Gulp에게 task를 주겠습니다! 아주 간단하게! :)  
그냥 function을 export하거나 const하면 됩니다!

우리는 저번에 package.json에서 "dev"라는 명령어를 만들었죠? 그러니까 dev라는 function을 만들어보겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-1.jpg" alt="">
<figcaption>dev function 생성 후 테스트 결과</figcaption>
</figure>
</center>

yarn dev명령을 했더니 console창에 알람이 뜬게 보이시죠? 작동을 하고 있습니다.  
gulp는 최신 파일들을 구형 브라우저도 작동하도록 compile하는 일을 한다고 했죠? 그러면 이제 gulp에게 일을 만들어주겠습니다.  

> [Gulp 공식사이트 링크](https://gulpjs.com/)

위 링크를 확인하면 Gulp는 수 많은 플러그인을 가지고 있습니다. 20년 2월 기준으로 4105개가 있네요. 우리는 그 중 gulp pug라는 플러그인을 사용하겠습니다.

> [Npm gulp-pug 링크](https://www.npmjs.com/package/gulp-pug)

만약 여러분이 webpack을 안다면 loaders 플러그인을 생각하면 됩니다. (필자는 webpack을 모르지만 뭐 파일들을 build하는 그런 것으로 보인다.)  

설치는 터미널 창에 yarn add gulp-pug -D 입력으로 설치한다. 설치가 완료되면 gulpfile.babel.js로 돌아와서 import 해줍시다.  

우리는 Gulp를 import했으니까 이제 Gulp를 사용가능 합니다.  
다행히 Gulp는 많지 않은 API를 가지는데([Gulp 공식사이트 링크](https://gulpjs.com/docs/en/api/concepts)에서 확인 가능) 그 중 src()와 dest()는 사용하기 위해 꼭 알아야 합니다.  
src()를 먼저 알아봅시다.

gulpfile.babel.js로 돌아가서 우리는 상수 2개를 만들겠습니다. 하나는 routes라는 이름의 상수이고, 그 안에는 compile 할 파일들의 정보를 넣겠습니다.  
다른 하나는 pug라는 이름의 상수이고, 그 안에는 gulp의 src()를 사용할거고 그 안의 매개변수로 routes의 일부를 넣어주겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-2.jpg" alt="">
<figcaption>gulp의 src() 사용</figcaption>
</figure>
</center>

gulpPug의 src()를 사용했고 그 안의 매개변수로는 routes.put.src 그러니까 "src/*.pug"가 들어가 있습니다. `"src/*.pug"`의 뜻은 src폴더 바로 밑의 모든 pug파일이라는 의미이고, src폴더의 하위 폴더까지 compile하려면 `"src/**/*.pug"` 로 바꿔주면 됩니다.  

gulp는 pipe()랑 같이 쓰입니다. gulp는 src()를 통해서 파일의 흐름을 만들고 여러분은 pipe()로 그 흐름이 어디로 나오게 할 지 만드는 것 입니다. 어떤 pipe는 코드를 컴파일하고, 어떤 pipe는 코드를 복사하게 하고, 어떤 pipe는 코드를 최소화하고 등등..  

이제 pipe()를 사용해봅시다. 우리는 이전 코드에 pipe()를 연결하면서 pug를 부르고, 다시 pipe()를 연결하여 gulpPug.dest()를 실행하겠습니다.  
dest()는 destination으로 컴파일한 파일을 어느곳에 저장할지 정해주는 것입니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-3.jpg" alt="">
<figcaption>gulp의 src()와 dest() series() 사용</figcaption>
</figure>
</center>

위에서 부터 차례로 분석해보겠습니다. routes 상수에 put객체를 넣었고, 그 안엔 src와 dest라는 각각 컴파일할 파일, 컴파일 된 파일이 저장될 경로를 지정해주었습니다. 그 밑엔 pug라는 함수를 만들었고 gulp를 사용하여 src()와 pipe()로 코드를 생성했습니다.  
마지막으로 packagae.json에서 만든 명령어와 같게 만든 상수 dev는 export를 사용하여 밖에서도 사용하게 하였고 dev의 기능은 gulp를 series() 메서드로 연결하여 pug 작업을 결합하였습니다.  

결과로는 dev가 시작하고, pug가 시작하고 끝났고, dev가 끝나는 실행 순서를 갖고 있습니다.

그리고 supergulp 폴더에는 build폴더가 생겼고, 내부엔 html5로 작성된 index.html을 확인 할 수 있습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-4.jpg" alt="">
<figcaption>index.pug와 컴파일 된 index.html</figcaption>
</figure>
</center>

----

## 1.1 Pug Task part Two

이번에는 build폴더 내부의 파일을 제거하는 법을 알아봅시다. 만약 여러분이 파일을 컴파일 했는데 수정을 했을 경우에 기존 파일을 지우고 새로 작성해야 하죠? 그럴 때 사용하게 될 부분입니다.  

먼저 터미널에 yarn add del -D로 설치하고, gulpfile.babel.js파일에 import 하겠습니다.  
그리고 claen이라는 함수를 생성하고 그 함수는 del()을 사용하겠습니다. del() 함수 내부에는 우리가 삭제하려는 폴더인 "build/"를 넣어주겠습니다.

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-5.jpg" alt="">
<figcaption>del()으로 만든 clean함수</figcaption>
</figure>
</center>

clean() 함수를 만들고, 마지막 줄에 series에 claen을 추가해주었습니다. 그래서 yarn dev를 실행하면 clean과 pug를 동시에 실행해서 기존 파일을 지우고 새로 작성하는 흐름을 갖습니다.

이로써 끝났지만 우리는 조금 더 코드를 정리해보겠습니다. 마지막 줄의 series는 clean과 pug를 같이 실행하고 있습니다. 하지만 둘이 전혀 다른 일을 하고 있습니다. clean은 build를 위한 준비 과정이고, pug는 실제로 파일을 변형시키는 작업을 하고 있습니다. 

그래서 우리는 prepare와 assets라는 또 다른 series들을 만들어보겠습니다. 

<center>
<figure>
<img src="/assets/post-img/gulp/nomad_gulp_1-6.jpg" alt="">
<figcaption>prepare와 assets생성</figcaption>
</figure>
</center>

이렇게 하는 이유는 dev라는 상수는 명령어 입니다. 지금은 dev하나 이지만 나중에 build나 publish같은 과정도 있을 수 있습니다. 그게 무엇이든간에 여러분은 pug라는 task를 또 사용하게 될 것이기 때문에 상수로 만들었습니다.

자 지금까지의 과정으로 html파일 변환은 했지만, css나 js는 안될겁니다. 나머지는 다음 장에서 알아봅시다.
