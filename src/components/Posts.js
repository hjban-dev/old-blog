import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Posts = category => {
  const Postdata = useStaticQuery(graphql`
    {
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
  `)

  const post = Postdata.allMarkdownRemark.edges.map(post => {
    if (category.category === post.node.frontmatter.category) {
      if (category.disc) {
        return (
          <li className="post_tit" key={post.node.id}>
            <Link to={`/${post.node.fields.slug}`}>
              <span className="tit">{post.node.frontmatter.title}</span>
              <span className="date">{post.node.fields.slug.substring(0, 10)} </span>
              <div className="disc">{post.node.excerpt} </div>
            </Link>
          </li>
        )
      } else {
        return (
          <li className="post_tit" key={post.node.id}>
            <Link to={`/${post.node.fields.slug}`}>
              <span className="tit">{post.node.frontmatter.title}</span>
              <span className="date">{post.node.fields.slug.substring(0, 10)} </span>
            </Link>
          </li>
        )
      }
    }
  })

  return <ul className="post_list"> {post} </ul>
}

export default Posts

//  const HomePage = () => {
// 	 const HomePage = ({data}) => {
// 	  return (
// 		<div>
// 	     Hello!
// 	     {data.site.siteMetadata.description}
// 		</div>
// 	  )
// 	}

// 	export const query = graphql`
// 	  query HomePageQuery {
// 		site {
// 		  siteMetadata {
// 			description
// 		  }
// 		}
// 	  }
// 	`

// 	export default Posts
