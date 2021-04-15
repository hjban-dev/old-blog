import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Posts from "./Posts"

const CategoryList = () => {
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

  const category = categoryData.allDirectory.nodes.map(category => {
    return (
      <div className={"category_box " + category.name} key={category.id} id={category.name}>
        <div className="category_tit">{category.name}</div>
        <Posts category={category.name} />
      </div>
    )
  })

  return <div>{category}</div>
}

export default CategoryList
