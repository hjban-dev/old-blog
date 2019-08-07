---
layout: post
title: 내부 모듈 File system
category: Nodejs
tags: [Nodejs]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  
> File system 모듈을 이용해서 파일을 제어하는 법을 알아본다.  

# File System 모듈

- 노드의 파일시스템은 동기식 IO와 비동기식 IO를 함께 제공
- Node.js 사이트의 [File System](https://nodejs.org/api/fs.html) 참고

## fs모듈의 readFile() 메서드

- readFileSync(path[, options]) : 동기식 IO파일을 읽어 들입니다.
- readFile(path[, options], callback) : 비동기식 IO파일을 읽어 들입니다.

### readFile() 메서드로 알아보는 동기 방식과 비동식 방식의 차이

#### 동기 방식의 코드 진행

- 위에서 아래로 `순차적` 진행

```javascript
var fs = require('fs'); // fs모듈 추출

// 파일을 동기식 IO로 읽어 들입니다.
var data = fs.readFileSync('./package.json', 'utf8');

// 읽어 들인 데이터를 출력합니다.
console.log(data);
```

#### 비동기 방식의 코드 진행

- 실행 코드 `동시` 진행

```javascript
var fs = require('fs'); // fs모듈 추출

// 파일을 비동기식 IO로 읽어 들입니다.
fs.readFile('./package.json', 'utf8', function(err, data) {
  // 읽어 들인 데이터를 출력합니다.
  console.log(data);
});

// 위 readFile() 메서드가 실행 되면서 동시 시작
console.log('package.json 파일이 노출 되기 전에 실행');
```

## fs모듈의 writeFile() 메서드

- writeFileSync(file, data[, options]) : 동기식 IO파일을 씁니다.
- writeFile(file, data[, options], callback) : 비동기식 IO파일을 씁니다.

### writeFile() 메서드 사용 예시 코드

```javascript
var fs = require('fs'); // fs모듈 추출

var message = 'Hello World!';

//파일에 데이터를 쓴다.
fs.writeFile('./output.txt', message, function(err) {
  if(err) {
    console.log('Error : ' + err);
  }
  console.log('output.txt 파일에 데이터 쓰기 완료!');
});
```
- message를 내용이 삽입된 output.txt 확인

## Stream 방식으로 파일 읽고 쓰기

- 위에서의 방식들은 파일을 통째로 읽음
- 데이터를 Stream 방식으로 읽는것이 메모리, 속도 등에서 효율적
- fs.createReadStream(path[, options]) : 파일을 읽기 위한 스트림 객체를 만든다.
- fs.createWriteStream(path[, options]) : 파일을 쓰기 위한 스트림 객체를 만든다.

```javascript
var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists) {
  // fs.exists(path, callback) 사용하여 outname이 존재하는지 확인	
  if(exists) {
	  fs.unlink(outname, function(err) {
      // 존재하면 fs.unlink(path, callback)사용하여 삭제
      if(err) throw err;
    });
    console.log('파일이 삭제됨.');
  }
  
  var infile = fs.createReadStream(inname, {flags:'r'});
  var outfile = fs.createWriteStream(outname, {flags: 'w'});

  infile.pipe(outfile);
  //복제할 내용.pipe() 메소드로 연결하면 파일의 내용이 복사
  console.log('스트리밍 방식으로 복제 완료');
});
```

### 파일을 열 때 사용하는 대표적인 플래그

- 'r' : 읽기에 사용하는 플래그. 파일 없으면 예외 발생
- 'w' : 쓰기에 사용하는 플래그. 파일 없으면 만들어지고 있으면 덮어씀.
- 'w+' : 읽기와 쓰기 모두 사용 가능. 파일 없으면 만들어 짐. 덮어쓰기.
- 'a+' : 읽기와 추가에 모두 사용가능. 파일이 없으면 만들어 짐. 내용 추가.

#### pipe() 와 http 모듈

- 읽은 파일은 서버에 노출도 가능

```javascript
var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
  var instream = fs.createReadStream('./output.txt');
  //응답 스트림과 pipe() 연결하여 노출
  instream.pipe(res);
});

server.listen(3000, function() {
  console.log('서버실행 >>> http://localhost:3000');
})
```
