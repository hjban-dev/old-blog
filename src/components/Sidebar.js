import React from "react"
//import { Link, graphql, useStaticQuery } from "gatsby"
import { Link, graphql, useStaticQuery } from "gatsby"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          tagline
          author
        }
      }
      allDirectory(filter: { relativeDirectory: { regex: "/posts$/" } }, sort: { order: ASC, fields: birthtime }) {
        nodes {
          name
          id
        }
      }
    }
  `)

  const categorys = data.allDirectory.nodes.map(category => {
    return (
      <li className="sidebar-nav-item-list" key={category.id}>
        <Link to={`/${category.name}`}>{category.name}</Link>
      </li>
    )
  })

  return (
    <div className="sidebar_wrap">
      <input type="checkbox" id="menu_toggle" name="menu_toggle" />
      <label htmlFor="menu_toggle"> </label>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-personal-info">
          <div className="sidebar-personal-img-wrap">
            <a href="https://www.github.com/hjban-dev" target="_blank">
              <img src="/common/profile.png" alt="profile picture" />
            </a>
          </div>
          <div className="sidebar-personal-info-section">
            <p className="author">{data.site.siteMetadata.author}</p>
            <div className="contact">
              Contact Me
              <div className="link_wrap">
                <a href="https://github.com/hjban-dev" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                |
                <a href="mailto:baneju212@naver.com" target="_blank">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <p className="notice">
              잘못된 내용이 있다면 부담없이 댓글 남겨주세요! 지난 포스트도 새로 알게 된 내용이나 추가하고 싶은 내용을 자주 수정합니다! <br />
              ╰( ･ ᗜ ･ )╯
            </p>
          </div>
        </div>
        <div className="sidebar-nav">
          <Link to={`/`} className="sidebar-nav-item">
            Home
          </Link>
          <Link to={`/about/`} className="sidebar-nav-item">
            About
          </Link>
          <div>
            <span className="sidebar-nav-item">Categories</span>
            <ul>{categorys}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
