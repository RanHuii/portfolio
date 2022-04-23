import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./topBar.scss"
export const Topbar = () => {
    return (
        <Navbar fixed="bottom" className="topBar" bg="dark" variant="dark">
          <div className="wrapper">
            <div className="left">
              
              <Navbar.Brand className="logo" href="#">Yiming Huang</Navbar.Brand>
              <div className="linkedIniconContainer">
                <a href="https://www.linkedin.com/in/yiming-harry-huang/">
                  <img className="linkedInIcon" src="assets/LinkedInIcon.png"/>
                </a>
              </div>
              <div className="githubIconWrapper">
                <a href="https://github.com/RanHuii">
                  <img className="githubIcon" src="assets/githubIcon.png"/>
                </a>
              </div>
            </div>
          <div className="right">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
         </Nav>
          </div>
        
        </div>
      </Navbar>
    );
}


