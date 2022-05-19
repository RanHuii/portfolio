import React from 'react'
import "./portfolio.scss"
import slacker from '../images/slack_portfolio.png'
import cplusplus from '../images/cplusplus.png'
import docker from '../images/docker.png'
import kubernetes from '../images/kubernetes.png'
import python from '../images/python.png'
// import reactGIF from '../images/react.gif'
import reactIcon from '../images/react.png'
import Button from 'react-bootstrap/Button'
export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='skills'>
        <h1>Skills & Projects</h1>
        <img src={cplusplus} alt=""></img>
        <img src={docker} alt=""></img>
        <img src={kubernetes} alt=""></img>
        <img src={python} alt=""></img>
        {/* <img src={reactGIF}></img> */}
        <img src={reactIcon} alt=""></img>
      </div>
      <div className='slacker-wrapper'>
        <div className='left'>
          <h1>Slacker</h1>
          <p>An Mobile app to connect slackliners using React Native and typescript.</p>
          <p>Check out the product page <a href={'https://sites.google.com/view/csc485a-slacker/home'}>here</a></p>
          <Button variant='dark' className='slacker-repo-button' href="https://github.com/CSC485A-Slacker/slacker">Repository</Button>
        </div>
        <div className='right'>
          <img src={slacker} alt=""></img>
        </div>
      </div>
    </div>
  )
}
