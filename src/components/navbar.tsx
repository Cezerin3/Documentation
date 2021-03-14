import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  MDBCol,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBRow,
} from "mdbreact"
import React, { useState } from "react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <MDBRow>
          <MDBCol>
            <StaticImage
              src="../images/cezerin-icon.png"
              alt="logo"
              className="w-50 p-3"
            />
          </MDBCol>
          <MDBCol>
            <strong className="white-text">
              <Link to="/" style={{ color: "white" }}>
                Cezerin3
              </Link>
            </strong>
          </MDBCol>
        </MDBRow>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <a
              href="https://github.com/Cezerin3/Store"
              className="white-text nav-link"
            >
              GitHub
            </a>
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
