import React from 'react'
import "./About.css"
import ava2 from "./ava2.jpg"
import Flip from 'react-reveal/Flip';

const About = (({ onChangeInInfo }) => {
        return (
                <Flip bottom>

                        <div className='ABOUT'>
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

                        </div>
                </Flip >


        )
})
export default About; 