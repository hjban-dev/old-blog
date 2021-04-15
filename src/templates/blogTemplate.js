import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

//export query so gatsby can grab it as a prop
export const markdownuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
      }
      fields {
        slug
      }
      html
      id
    }
  }
`

const blogTemplate = props => {
  const tags = props.data.markdownRemark.frontmatter.tags.map(tag => {
    return (
      <Link className="post-tag" to={`/`} key={tag}>
        {tag}
      </Link>
    )
  })

  return (
    <div className="post">
      <SEO title={props.data.markdownRemark.frontmatter.title} />
      <Layout>
        <div className="title_wrap">
          <h1 className="post-title">{props.data.markdownRemark.frontmatter.title}</h1>
          <span className="post-date">{props.data.markdownRemark.fields.slug.substr(0, 10)}</span>
          {tags}
        </div>

        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      </Layout>
    </div>
  )
}

export default blogTemplate
