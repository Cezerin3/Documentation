import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from "mdbreact"
import React, { useState } from "react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "cezerin-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <Img fluid={data.logo.childImageSharp.fluid} />
        <strong className="white-text">
          <Link to="/" style={{ color: "white" }}>
            Cezerin3
          </Link>
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link to="/docs" className="white-text nav-link">
              GitHub
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/docs" className="white-text nav-link">
              Docs
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/docs/faq" className="white-text nav-link">
              FAQ
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <a href="https://www.cezerin.net" className="white-text nav-link">
              Demo
            </a>
          </MDBNavItem>
          <MDBNavItem>
            <a
              href="https://www.cezerin.net/admin"
              className="white-text nav-link"
            >
              Demo Dashboard
            </a>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavBar
