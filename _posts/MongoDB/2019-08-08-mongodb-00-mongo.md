---
layout: post
title: MongoDB 설치 및 실행
category: MongoDB
tags: [MongoDB]
comments: false
---

> [생활코딩 Node.js 강의](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#) 와 KOSMO 노드JS 프로그래밍 수업을 듣고 정리합니다.  

# MongoDB 설치 및 실행

## 설치
- [mongodb.com](https://www.mongodb.com) 에서 파일 다운로드 후 설치
- 설치 후 cmd에 mongo 라고 입력 했을 때 찾지 못하면 path환경 변수에 입력필요
  - mongo 다운 경로에 들어가서 bin 폴더 안에 mongo.exe 파일 찾기
  - 경로 복사 (ex - C:\Program Files\MongoDB\Server\4.0\bin)
  - 내 pc 아이콘 위에서 마우스 오른쪽 클릭 - 속성 선택
  - 환경변수 클릭 - 시스템 변수 - path 클릭
  - 새로만들기 - 복사한 경로 붙여 넣고 확인
  - cmd 새로 열어서 mongo 입력하고 확인

## RDBMS와 MongoDB의 개념정리
- 모든 데이터 관련 형식은 모두 JSON 형태

| RDBMS | MongoDB | 
|:--------|:--------|
| TABLE | COLLECTION |
| ROW | DOCUMENT |
| COLUMN | FIELD |
| PRIMARY KEY | OBJECT_ID Field |
| RELATIONSHIP | EMBEDED & LINK |

- RDB와 MongoDB 쿼리 비교

| RDB | MongoDB | 
|:--------|:--------|
| create table emp(no number(3)) | db.createCollection({"emp"}) |

## MongoDB 사용하기 - 명령어 I

설치 확인
- mongo
데이터베이스 지정 (use 명령어를 사용 하면 DB 자동 생성)
- use local
현재 사용중인 db명 출력
- db
db에 users 컬렉션 만들고 데이터 저장 (save({}) 명령어로 자동 생성 및 저장)
- db.users.save({name:'네주', age:25})
users컬렉션에 있는 모든 문서 객체들 반환
- db.users.find().pretty()


### 다양한 find() 사용법
- db.car.find({name:'K7'});  
  db.car.find({name:'K7'},{_id:false});  
- db.car.find({price:{$gte:2000}}, {_id:false});  
  db.car.find({price:{$gt:2000}},{_id:false});  
- db.car.find({price:{$lte:2000}},{_id:false});  
  db.car.find({price:{$lt:2000}},{_id:false});  
- db.car.find({price:{$gte:2000}}, {_id:false}).count(); - 개수
- db.car.findOne();
- db.car.find().sort({name:1});  
  db.car.find().sort({name:-1});

### 데이터 수정하기
- db.car.update({name:'K7'},{$set:{price:1000}},false,false);
  - 첫번째 파라미터 : 검색조건
  - 두번째 파라미터: 변경할 내용
  - 세번째 파라미터: 일치하는 항목 없을 경우 새로 생성 여부
  - 네번째 파라미터: 일치하는 항목이 여러개일 경우 모두 수정할지 여부

## MongoDB 사용하기 - 명령어 II

도큐먼트(데이터) 제거
- db.car.remove({price:{$lte:1000}});
새로운 컬렉션 생성(use 명령에 포함 되었다.)
- db.createCollection('newCar');
모든 컬렉션 목록 보기
- db.getCollectionNames()
현재 DB에서 컬렉션 제거
- db.car.drop()
현재 접속 DB 제거
- db.dropDatabase()
빠져나오기
- exit
