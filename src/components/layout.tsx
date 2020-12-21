import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navbar"

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      {/*©*/} {new Date().getFullYear()}, Built with
      <a href="https://cezerin3.web.app">Gatsby</a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
