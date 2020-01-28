---
layout: post
title: Nomadcoder's ReactJS Conclusions 1
category: React
tags: [React]
comments: true
---

> 노마드코더의 ReactJS로 웹 서비스 만들기 수업을 듣고 정리합니다. <https://academy.nomadcoders.co/>

# 5 Conclusions

## 5.0 Deploying to Github Pages

자, 이제 우리가 만든 코드를 cloud에 올려봅시다. 먼저 gh-pages를 설치해야 합니다. 

gh-pages 모듈은 만든 코드를 github page 도메인에 파일을 게시해줍니다. 쉽게 말하면 github로 구성된 웹 사이트입니다. 여러분들이 html, css, javascript 등으로 **올린 파일로 구성된 웹 사이트를 제공**해줍니다!!✦‿✦  

> [gh-pages 공식 사이트 링크](https://www.npmjs.com/package/gh-pages)  

실행 방법은 진행중인 폴더의 터미널 창에서 `npm i gh-pages`를 실행하고 package.json에서 설치가 되었는지 확인합니다.  

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-18.jpg" alt="">
<figcaption>package.json에서 gh-pages 설치 확인</figcaption>
</figure>
</center>

설치 확인을 했으면 우리는 homepage 속성을 추가해야 합니다.  

gh-pages는 일반적으로 **github**에서 여러분의 **project이름**을 가져오는 식으로 실행됩니다. 우리 첫 장에서 craete-reate-app을 설치하면서 github에 repository를 생성했었죠? 필자의 경우는 해당 repository이름을 nomad_movie_app로 만들었습니다.  

> [필자의 nomad_movie_app repository](https://github.com/hjban-dev/nomad_movie_app)  

homepage 속성은 gh-pages가 동작하기 위한 필수 동작이고, 값은  
`https://{your github username}.github.io/{the name of your project}`   
입니다. 또한 조건으로 **무조건 소문자**만 가능하고, **띄어쓰기는 할 수 없습니다**.  
필자의 경우는 <u>"homepage"</u> : <u>"https://hjban-dev.github.io/nomad_movie_app/"</u> 입니다.  

그 다음 단계는 명령어 2개를 추가해야 합니다.  
package.json의 script부분에 deploy라는 명령어를 추가하여 주겠습니다. deploy 명령어가 하는 일은 gh-pages를 호출하는 일입니다.  

따라서 script내부에 **"deploy" : "gh-pages"**로 명령어 생성 후 터미널에서 npm run build를 실행해보겠습니다. 그런데 갑자기 왜 npm run build라는 명령어를 사용할까요?

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-20.jpg" alt="">
<figcaption>gh-pages를 설치한 후에 터미널 결과</figcaption>
</figure>
</center>

좀 전에 gh-pages를 설치한 후에 결과 입니다. 제일 아래에 있는 문장을 읽어보면, develoment build가 만들어있지 않습니다. production build를 하고 싶으면 npm run build를 하라고 합니다.  

npm run build 명령의 의미는 **build폴더에 프로덕션 용 앱을 컴파일하는 것** 입니다. 쉽게 말해 우리가 지금껏 만든 코드로 압축한 build라는 폴더를 생성합니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-19.jpg" alt="">
<figcaption>npm run build 명령 후 터미널 결과</figcaption>
</figure>
</center>

Compile이 성공적으로 되었다고 합니다. 실제로 movie_app 폴더 내부에 build라는 폴더가 생성된 것을 확인 할 수 있습니다. 내부엔 맨 처음에 설치했던 create-react-app의 정보와 우리가 만들었던 Movie Component정보들이 압축되어 생성되었습니다.

우리는 이 폴더를 gh-pages에 업로드 할 것 입니다. 기존의 **"deploy" : "gh-pages"**명령을 **"deploy" : "gh-pages -d build"**로 변경해줍니다.   
-d 뒤에 build 부분은 생성된 폴더 명과 같게 해주어야 합니다.

그리고 위의 터미널 결과 이미지를 살펴보면 중간쯤에 <u>Add the following script in your package.json</u>이라고 쓰여있습니다. npm이 하라는대로 script내부에 **"predeploy": "npm run build"**를 작성해주겠습니다.  

predeloy은 'deploy 실행 전' 이라는 의미입니다. 우리가 deploy를 실행할 때 마다 똑똑한 npm은 predeploy를 먼저 실행할 것 입니다. predeploy는 npm run build을 실행 할 것이고, build는 build script를 실행합니다. script는 build라는 폴더를 여러분에게 줄 것이고, 그렇게 되면 predeploy는 끝이 납니다. 그 후엔 deploy가 실행될 것이고, deploy는 gh-pages를 호출하고 build폴더를 업로드 할 것 입니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-21.jpg" alt="">
<figcaption>package.json의 script 부분</figcaption>
</figure>
</center>

자 위의 터미널 결과의 하단에 쓰여있는 npm run deploy를 실행하겠습니다.

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-22.jpg" alt="">
<figcaption>npm run deploy 명령 후 터미널 결과</figcaption>
</figure>
</center>

위에서 말했듯이 deploy는 기본적으로 predeploy를 호출하고, run build로 모든 파일이 컴파일됩니다. 그리고 https://hjban-dev.github.io/nomad_movie_app/ 에 build폴더가 publish 되었습니다.


> [필자의 movie_app 링크](https://hjban-dev.github.io/nomad_movie_app/)

<center>
<figure>
<img src="/assets/post-img/react/nomad_react_5-23.jpg" alt="">
<figcaption>링크확인</figcaption>
</figure>
</center>

이제 위 링크에서 Movie App이 잘 실행되는 것을 확인할 수 있습니다!  
너무나도 싱기방기...
