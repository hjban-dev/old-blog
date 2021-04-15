import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Tags = () => {
  const categoryData = useStaticQuery(graphql`
    {
      allDirectory(filter: { relativeDirectory: { regex: "/posts$/" } }, sort: { order: ASC, fields: birthtime }) {
        nodes {
          name
          id
        }
      }
    }
  `)

  const Tag = categoryData.allDirectory.nodes.map(category => {

    const scrollFunction = () => {
      var offset = document.querySelector(`.${category.name}`).offsetTop;

      window.scrollTo({top: offset-100, left: 0, behavior: 'smooth' });``
    };

    return (
      <div className="post-tag" key={category.id} onClick={scrollFunction}>
        {category.name}
      </div>
    )
  })

  
  
  return (
    <div>
      <div className="tag_wrap">{Tag}</div>
    </div>
  )
}



export default Tags
