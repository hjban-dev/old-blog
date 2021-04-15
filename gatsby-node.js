/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allDirectory(filter: { absolutePath: { regex: "/posts//" } }) {
        edges {
          node {
            absolutePath
            id
            name
          }
        }
      }
    }
  `)

  const blogTemplate = path.resolve("./src/templates/blogTemplate.js")
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const categoryTemplate = path.resolve("./src/templates/categoryTemplate.js")

  res.data.allDirectory.edges.forEach(edge => {
    createPage({
      component: categoryTemplate,
      path: `/${edge.node.name}`,
      context: {
        slug: edge.node.name,
      },
    })
  })
}
