---
layout: post
title: MongoDB 설치 및 실행
category: MongoDB
tags: [MongoDB]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  

# MongoDB 설치 및 실행

## MongoDB?

- NoSQL 데이터베이스
- 데이터 관련 형식은 JSON 과 유사
- 데이터베이스 및 객체 컬렉션 을 만드는데 사용할 수 있는 JavaScript API를 제공

## 설치

[mongodb.com](https://www.mongodb.com) 에서 파일 다운로드 후 설치  
설치 후 cmd에 mongo 라고 입력 했을 때 찾지 못하면 path환경 변수에 입력필요  

<center>
<figure>
<img src="/assets/post-img/mongodb/mongo-strart.jpg" alt="" width="700">
<figcaption>cmd에 mongo 라고 입력한 후의 결과</figcaption>
</figure>
</center>

[path환경 변수 입력방법]
1. mongo 다운 받은 경로에서 bin 폴더 안에 mongo.exe 파일 찾기
1. 경로 복사 (ex - C:\Program Files\MongoDB\Server\4.0\bin)
1. 내 pc 아이콘 위에서 마우스 오른쪽 클릭 - 속성 선택
1. 환경변수 클릭 - 시스템 변수 - path 클릭
1. 새로만들기 - 복사한 경로 붙여 넣고 확인
1. cmd 새로 열어서 mongo 입력하고 확인

<center>
<figure>
<img src="/assets/post-img/mongodb/how-to-path1.jpg">
<figcaption>3. 내 pc 아이콘 위에서 마우스 오른쪽 클릭</figcaption>
</figure>
</center>

<center>
<figure>
<img src="/assets/post-img/mongodb/how-to-path1.jpg" alt="" width="800">
<figcaption>4. 환경변수 - 시스템 변수 - path 클릭</figcaption>
</figure>
</center>

## RDBMS와 MongoDB의 명칭 비교

| RDBMS | MongoDB | 
|:--------|:--------|
| TABLE | COLLECTION |
| ROW | DOCUMENT |
| COLUMN | FIELD |
| PRIMARY KEY | OBJECT_ID Field |
| RELATIONSHIP | EMBEDED & LINK |

### RDB와 MongoDB 쿼리 비교

| RDB | MongoDB | 
|:--------|:--------|
| create table emp(no number(3)) | db.createCollection({"emp"}) |

## MongoDB 사용하기 - 명령어 I

설치 확인
- mongo 
데이터베이스 지정 또는 생성 (use 명령어를 사용 하면 DB 자동 생성)
- use local > (local 데이터베이스 사용한다는 의미)
현재 사용중인 db명 출력
- db > (local 데이터베이스 사용하고 있다는 의미)
db에 users 컬렉션 만들고 데이터 저장 (save({}) 명령어로 자동 생성 및 저장)
- db.users.save({name:'네주', age:25}) > (결과 : WriteResult({ "nInserted" : 1 }))
users컬렉션에 있는 모든 문서 객체들 반환
- db.users.find() 
users컬렉션에 있는 모든 문서 객체들 <u>정렬하여</u> 반환
- db.users.find().pretty()

<center>
<figure>
<img src="/assets/post-img/mongodb/mongo-use-local.png" alt="">
<figcaption>명령어 실행 결과</figcaption>
</figure>
</center>

## MongoDB 사용하기 - 명령어 II

### 다양한 find() 사용법

db.collection.find(query, projection)  

| query | 필더 선택 | 
|:--------|:--------|
| projection| 일치하는 필더에서 반환 할 필드 지정 |

- db.car.find({name:'K7'}); (name:'K7' 반환)
- db.car.find({name:'K7'},{_id:false}); (name:'K7'의 _id필드 제외 반환)
- db.car.find({price:{$gte:2000}}, {_id:false});
- db.car.find({price:{$gt:2000}},{_id:false});
- db.car.find({price:{$lte:2000}},{_id:false});
- db.car.find({price:{$lt:2000}},{_id:false});
- db.car.find({price:{$gte:2000}}, {_id:false}).count(); (조건의 필더 개수)
- db.car.findOne();
- db.car.find().sort({name:1});
- db.car.find().sort({name:-1});

### 데이터 수정

db.car.update({name:'K7'},{$set:{price:1000}},false,false);
- 첫번째 파라미터 : 검색조건
- 두번째 파라미터: 변경할 내용
- 세번째 파라미터: 일치하는 항목 없을 경우 새로 생성 여부
- 네번째 파라미터: 일치하는 항목이 여러개일 경우 모두 수정할지 여부

## MongoDB 사용하기 - 명령어 III

도큐먼트(데이터) 제거
- db.car.remove({price:{$lte:1000}});
새로운 컬렉션 생성 (use 명령에 포함 되어 있음)
- db.createCollection('newCar');
모든 컬렉션 목록 보기
- db.getCollectionNames()
현재 DB에서 컬렉션 제거
- db.car.drop()
현재 접속 DB 제거
- db.dropDatabase()
빠져나오기
- exit
