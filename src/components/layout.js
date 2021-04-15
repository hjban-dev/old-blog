import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"
import Header from "./header"
import "../components/style/main.scss"
import Sidebar from "../components/Sidebar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.tagline} />
      <Sidebar />
      <div className="container content">
        <div>{children}</div>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
