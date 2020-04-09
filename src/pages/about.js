import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
