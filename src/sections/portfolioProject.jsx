import React from 'react'
import './portfolioProject.scss'
import portfolioImg from '../images/portfolioScreen.png'
import Button from 'react-bootstrap/Button'
export default function PortfolioProject() {
  return (
    <div className='portfolioProject' id='portfolioProject'>
        <div className='left'>
            <h1>Personal Portoflio</h1>
            <p>My personal portfolio website</p>
            <Button variant='dark' href='https://github.com/RanHuii/portfolio'>Repository</Button>
        </div>

        <div className='right'>
            <img src={portfolioImg}></img>
        </div>
    </div>
  )
}
