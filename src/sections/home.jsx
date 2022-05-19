import "./home.scss"
import { init } from 'ityped'
import { React, useEffect, useRef } from "react";
import introImage from "../images/ProfileImage.jpg"
export default function Home() {
    const textRef = useRef()
    const nameRef = useRef()
    useEffect(() => {
        init(nameRef.current, {
          showCursor: false,
          placeholder: false,
          loop: false,
          strings: ["Yiming Huang"],
        });
        init(textRef.current, {
            showCursor: false,
            startDelay: 2000,
            loop: false,
            strings: ["A Software Engineer:D"],
          });
      }, []);
    return (
        <div className='home' id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src={introImage} alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="titleWrapper">
                    <h1 className="title">HELLO, I AM </h1>
                </div>
                <div className="nameWrapper" >
                    <span className="name" ref={nameRef}></span>
                    </div>
                
                <div className="intro" >
                    <h3>
                        <span ref={textRef}></span>
                    </h3>

                    {/* <p>Currently, I am studying Computer Science at the University of Victoria. </p>
                    <p> In this Fall, I will join Amazon as a Software engineer.</p>
                    <p> To Be Continue:)</p> */}
                </div>

            </div>

        </div>
    )
}
