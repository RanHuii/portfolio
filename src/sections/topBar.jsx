import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./topBar.scss"
import {React} from 'react'
import LinkedInIcon from "../images/LinkedInIcon.png"
import GithubIcon from "../images/githubIcon.png"
export const Topbar = () => {
  
    return (
        <Navbar fixed="bottom" className="topBar">
          <div className="wrapper">
            <div className="left">
              <Navbar.Brand className="logo" href="#">Yiming Huang</Navbar.Brand>
              <div className="linkedIniconContainer">
                <a href="https://www.linkedin.com/in/yiming-harry-huang/">
                  <img className="linkedInIcon" src={LinkedInIcon} alt='icon1'/>
                </a>
              </div>
              <div className="githubIconWrapper">
                <a href="https://github.com/yiminghuangg">
                  <img className="githubIcon" src={GithubIcon} alt='icon2'/>
                </a>
              </div>
              <div className='resumeWrapper'>
                <a className='resumeLink' href='https://drive.google.com/file/d/1fxAbRbHncSEiql_TM34u9fYC0E2w8ok0/view?usp=sharing'>Resume</a>
              </div>
            </div>
          <div className="right">
          <Nav className="navTabs">
            <Nav.Link className="homeTab" href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
         </Nav>
          </div>
        
        </div>
      </Navbar>
    );
}


