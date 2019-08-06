---
layout: post
title: URL을 이용한 정보의 전달 - 주소 문자열 요청 파라미터
category: Nodejs
tags: [Nodejs]
comments: false
---

# 모듈과 NPM - nodejs 모듈
> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.
> URL을 통해서 에플리케이션에 정보를 전달하는 방법에 대해서 알아본다.

## 주소 문자열 요청 파라미터
- 주소문자열은 protocol, host, query string등으로 구분된다.


<center>
<figure>
<img src="/assets/post-img/nodejs/querystring.jpg" alt="" width="438">
<figcaption>URL의 구성요소</figcaption>
</figure>
</center>


## Express의 query 객체의 사용  
> 하나의 path(라우터) 에서 경우에 따라 다른 결과를 보여주기 위해서는 쿼리스트링이 사용된다.

- url 내의 쿼리스트링을 가져오려면 `req.query` 를 사용해야한다.
- express api reference [req.query](http://expressjs.com/en/4x/api.html#req) 참고
- 복수의 쿼리스트링을 가져오는 것도 가능하다.
```javascript
app.get('/topic', function(req, res) {
	// url이 http://test.com/topic?id=neju&name=money 일때
	res.send(req.query.id+' , '+req.query.name); // neju , money 출력
})
```

## query 객체의 활용

```javascript
app.get('/topic', function(req, res){
	var topic = [
		'javascript is...',
		'nodejs is...',
		'express is...'
	];
	var li = `
	<li><a href="/topic?id=0">js</a></li>
	<li><a href="/topic?id=1">nodejs</a></li>
	<li><a href="/topic?id=2">express</a></li>
	`
  // 선택한 링크에 따라서 다른 정보를 출력하는 동적인 애플리케이션의 기본골격
	res.send(li + '<br>' + topic[req.query.id]);
})
```

### 쿼리스트링이 아닌 path 방식의 URL의 사용
```javascript
app.get('/topic/:id/:mode', function(req, res){
// 라우터 경로의 변경 /:id/:mode 를 통해 path 방식 url 값을 가져올 수 있다.
	var topic = [
		'javascript is...',
		'nodejs is...',
		'express is...'
	];
	var li = `
	<li><a href="/topic/0">js</a></li>
	<li><a href="/topic/1">nodejs</a></li>
	<li><a href="/topic/2">express</a></li>
	`
	res.send(li + '<br>' + topic[req.params.id] + req.params.mode);
	//path 방식을 사용하는 url의 경우 params를 통해서 값을 가져올 수 있음
})
```
- Restful api 등을 통해서 시맨틱 URL을 잘 사용하는 방법에 대해서 익힐 수 있다.