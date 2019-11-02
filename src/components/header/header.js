import React from "react"
import SiteMainMenu from "./menu"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "../link-animations"
import logo from "../../assets/images/alejandra-logo.svg"
import "./assets/styles.scss"

const Header = (props) => {

  return (
    <header className="banner fixed-top" role="banner">
      <Navbar bg="light" expand="lg">
        <div className={'container'}>
          <Link to={"/"} className={"navbar-brand"}>
            <img src={logo} className={"brand-logo"} alt={"Alejandra ToPa Logo"} width={250}/>
          </Link>
          <Navbar.Toggle aria-controls="navbarNav"/>
          <Navbar.Collapse id="navbarNav" className={"justify-content-end"}>
            <Nav className={"menu-main-menu-container"}>
              <SiteMainMenu className={"nav navbar-nav"} id={"main-menu"}/>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header