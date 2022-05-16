import React from 'react'
import "./about.scss"
import coffeeImg from '../images/Coffee.png'
export default function About() {
  return (
    <div className='about' id='about'>
        <div className='left'>
            <div className='background'>
              <p>I was born in China and I've been in Canada since I graduated from high school. </p>
              <p>
                Currently, I am wrapping up my last semester at the University of Victoria.
                In this Fall, I will join Amazon as a full-time Software Engineer.</p>
                {/* <a href='https://www.amazon.jobs/en/job_categories/software-development'> Amazon </a> */}
                  
              <p>When I am not coding, I like to workout and go feel the nature.</p>
            </div>
            <div className='education'>
              <h1 className='eduHeader'>Education</h1>
              <p className='year'>2019-2022</p>
              <h3 className='school'>University of Victoria</h3>
              <p>Bachelor of Science (BSc), Major Computer Science</p>
            </div>
          </div>
          <div className='right'>
            <div className='imageContainer'>
              <img className="profileImg" src={coffeeImg} alt='coffee'></img>
            </div>
          </div>
    </div>
  )
}
