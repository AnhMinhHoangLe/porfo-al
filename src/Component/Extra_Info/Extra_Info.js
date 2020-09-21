import React from 'react'
import { AiFillIdcard, AiOutlineHome, AiOutlineMail, AiFillGithub, AiOutlineLinkedin, AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import ava from "./ava.png"
import './Extra_Info.css'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Fade from 'react-reveal/Fade';


const Extra_Info = (({ onChangeInInfo }) => {
        return (
                <ParallaxLayer offset={1} speed={0} >
                        <Fade left>
                                <div className=' EXABOUT'>


                                        <div className='EXABOUT-content' >
                                                <img id='EXABOUT-info-ava' src={ava} />
                                                <ul className='EXABOUT-info-contact'>
                                                        <li><AiOutlineHome viewBox='0 0 1000 600' size={25} style={{ fill: 'black' }} /> <a href='https://www.google.com/maps/place/San+Jose,+CA/@37.2965315,-122.0975993,10z/data=!3m1!4b1!4m5!3m4!1s0x808fcae48af93ff5:0xb99d8c0aca9f717b!8m2!3d37.3382082!4d-121.8863286' target="_blank" alt='map'> San Jose, CA</a></li>
                                                        <li>< AiOutlineMail viewBox='0 0 1000 600' size={25} style={{ fill: 'black' }} /> <a href='mailto:leanh6998@gmail.com' alt='gmail' target="_blank"> leanh6998</a></li>
                                                        <li><AiFillGithub viewBox='0 0 1000 600' size={25} style={{ fill: 'black' }} /> <a href='https://github.com/AnhMinhHoangLe' alt='Github' target="_blank"> AnhMinhHoangLe</a></li>
                                                        <li><AiOutlineLinkedin viewBox='0 0 1000 600' size={25} style={{ fill: 'black' }} /><a href='https://www.linkedin.com/in/anh-le-69m98/' alt='Linkedin' target="_blank"> anh-le-69m98</a></li>
                                                        <li><AiFillIdcard viewBox='0 0 1000 600' size={25} style={{ fill: 'black' }} />English and Vietnamese</li>
                                                </ul>
                                        </div>

                                        <div className='EXABOUT-identity'>
                                                <h1>Anh Le <hr /></h1>
                                                <p>software engineer/ full-stack developer position.</p>
                                        </div>

                                        <div className='EXABOUT-ability' >
                                                <p className='EXABOUT-title'>ABILITIES</p>
                                                <p>a problem solver</p>
                                                <p>a time-management person</p>
                                                <p>drives technical improvements for different projects</p>
                                                <p>play different roles/positions in a project</p>

                                        </div>

                                        <div className='EXABOUT-experience'>
                                                <p className='EXABOUT-title'>EXPERIENCE</p>
                                                <p>Programming Contributor</p>
                                                <p>Zero To Mastery - ZTO</p>
                                                <p>2020 - Current</p>
                                        </div>
                                        <div className='EXABOUT-education'>
                                                <p className='EXABOUT-title'>EDUCATION</p>
                                                <p>SJSU - BSSE</p>
                                                <p>GPA: 3.7/4</p>
                                                <p>Fall 2019 - Summer 2021</p>
                                        </div>

                                        <div className='EXABOUT-button'> <p onClick={() => onChangeInInfo(true)} className='EXABOUT-button-symbol'> <AiOutlineDoubleLeft viewBox='0 0 1000 600' size={30} />back <AiOutlineDoubleRight viewBox='0 0 1000 600' size={30} /> </p></div>
                                </div>
                        </Fade>
                </ParallaxLayer>
        )
})
export default Extra_Info;