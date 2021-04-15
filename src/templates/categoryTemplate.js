import React from "react"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import { Link, graphql } from "gatsby"

export const Postdata = graphql`
  #   query($slug: String!) {
  query {
    allMarkdownRemark(sort: { fields: fields___slug, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            category
          }
          fields {
            slug
          }
          excerpt(pruneLength: 230, format: PLAIN)
          id
        }
      }
    }
  }
`

const categoryTemplate = props => {
  return (
    <div className="category">
      <Layout>
        <div className="title_wrap">
          <div className={"category_box " + props.pageContext.slug}>
            <div className="category_tit">{props.pageContext.slug}</div>
            <Posts category={props.pageContext.slug} disc={true} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default categoryTemplate
