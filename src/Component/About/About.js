import React from 'react'
import "./About.css"
import ava2 from "./ava2.jpg"
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Fade from 'react-reveal/Fade';

const About = (({ onChangeInInfo }) => {
        return (
                <ParallaxLayer offset={1} speed={0} className='ABOUT' >
                        <Fade right>

                                <div className='ABOUT-border-outside'>
                                        <div className='ABOUT-border-inside'>
                                                <div className='ABOUT-border-inside-left'>

                                                        <h1>ABOUT</h1>
                                                        <h3>Anh Le</h3>
                                                        <p>software engineer/ full-stack developer</p>
                                                        <p>senior student at SJSU</p>
                                                        <p>programming contributor at ZTO</p>


                                                </div>

                                                <div className='ABOUT-border-inside-right'>
                                                        <img src={ava2} onClick={() => onChangeInInfo(false)} id='ABOUT-border-inside-right-ava' />
                                                        <p className='ABOUT-border-inside-right-hi'>Hi, click me!</p>
                                                </div>
                                        </div>
                                </div>
                        </Fade >

                </ParallaxLayer>

        )
})
export default About; 