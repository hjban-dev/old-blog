import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Tags from "../components/Tags"
import CategoryList from "../components/CategoryList"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="네주머니의 나만보는 개발로그" />
      <Tags />
      <CategoryList />
    </Layout>
  )
}

export default IndexPage
