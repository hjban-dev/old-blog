import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default () => (
  <Layout>
    <SEO title="About" />
    <div className="page">
      <h1 className="page-title">About</h1>
      <p className="message">
        문과생 반혜주
        <br />
        퍼블리싱을 시작으로 개발에 발을 들였고 프론트엔드 개발을 공부중이며 백엔드 영역도 조금씩 공부 중입니다.
        <br />
        주로 책 + 인터넷 강의 + 학원 + 공식 사이트 + W3School + Stack Overflow 의 내용들을 짜집어 포스트 합니다.
        <br />
        <br />
        지식 공유 목적 보다는 혼자 하는 정리 및 내용 습득 목적의 포스트 목적입니다.
        <br />
        서투르고 모자라지만 꾸준히 하나씩 올라가보자는 마음으로 천천히 정리하는 중입니다. ✦‿✦
        <br />
        <span style={{ fontSize: "0.7rem" }}>* 이미 쓴 포스트도 새로 알게 된 내용이나 추가하고 싶은 내용을 자주 수정합니다!</span>
      </p>
      <ul>
        <li style={{ listStyle: "none" }}>- HTML, CSS, JAVASCRIPT, ES6</li>
        <li style={{ listStyle: "none" }}>- EJS, JADE, PUG</li>
        <li style={{ listStyle: "none" }}>- SASS, SCSS</li>
        <li style={{ listStyle: "none" }}>- REACT</li>
        <li style={{ listStyle: "none" }}>- NODE</li>
        <li style={{ listStyle: "none" }}>- MARIA DB, MONGO DB</li>
        <li style={{ listStyle: "none" }}>- GRAPH QL</li>
        <li style={{ listStyle: "none" }}>- GULP, WEBPACK</li>
      </ul>
    </div>
  </Layout>
)
