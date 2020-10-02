import React from 'react'
import { AiFillIdcard, AiOutlineHome, AiOutlineMail, AiFillGithub, AiOutlineLinkedin, AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import ava from "./ava.png"
import './Extra_Info.css'
import Flip from 'react-reveal/Flip';


const Extra_Info = (({ onChangeInInfo }) => {
        return (
                <Flip top>

                        <div className=' EXABOUT'>

                                <div className='EXABOUT-content' >
                                        <span><img id='EXABOUT-info-ava' src={ava} /></span>

                                        <ul className='EXABOUT-info-contact'>
                                                <li> <a href='https://www.google.com/maps/place/San+Jose,+CA/@37.2965315,-122.0975993,10z/data=!3m1!4b1!4m5!3m4!1s0x808fcae48af93ff5:0xb99d8c0aca9f717b!8m2!3d37.3382082!4d-121.8863286' target="_blank" alt='map'><AiOutlineHome viewBox='0 0 1000 600' size={25} /> San Jose, CA</a></li>
                                                <li><a href='mailto:leanh6998@gmail.com' alt='gmail' target="_blank">< AiOutlineMail viewBox='0 0 1000 600' size={25} rel="noopener noreferrer" />  leanh6998</a></li>
                                                <li> <a href='https://github.com/AnhMinhHoangLe' alt='Github' target="_blank"><AiFillGithub viewBox='0 0 1000 600' size={25} /> AnhMinhHoangLe</a></li>
                                                <li><a href='https://www.linkedin.com/in/anh-le-69m98/' alt='Linkedin' target="_blank"><AiOutlineLinkedin viewBox='0 0 1000 600' size={25} /> anh-le-69m98</a></li>
                                                <li><AiFillIdcard viewBox='0 0 1000 600' size={25} />English and Vietnamese</li>
                                        </ul>
                                </div>

                                <div className='EXABOUT-identity'>
                                        <h1>Anh Le <hr /></h1>
                                        <p>software engineer/ full-stack developer position.</p>
                                </div>

                                <ul className='EXABOUT-ability' >
                                        <p className='EXABOUT-title'>ABILITIES</p>
                                        <li>a problem solver</li>
                                        <li>a time-management person</li>
                                        <li>drives technical improvements for different projects</li>
                                        <li>play different roles/positions in a project</li>
                                </ul>

                                <ul className='EXABOUT-experience'>
                                        <p className='EXABOUT-title'>EXPERIENCE</p>
                                        <li>Programming Contributor</li>
                                        <li>Zero To Mastery - ZTO</li>
                                        <li>2020 - Current</li>
                                </ul>
                                <ul className='EXABOUT-education'>
                                        <p className='EXABOUT-title'>EDUCATION</p>
                                        <li>SJSU - BSSE</li>
                                        <li>GPA: 3.7/4</li>
                                        <li>Fall 2019 - Summer 2021</li>
                                </ul>


                                <div className='EXABOUT-button'> <p onClick={() => onChangeInInfo(true)} className='EXABOUT-button-symbol'> BACK </p></div>
                        </div>
                </Flip>

        )
})
export default Extra_Info;