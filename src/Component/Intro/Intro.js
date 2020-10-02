import React from 'react'
import { AiOutlineMail, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Zoom from 'react-reveal/Zoom';
import './Intro.css'
const Intro = (() => {
        return (

                <div className="HOME" >
                        {/* Start nav */}
                        {/* End nav */}
                        <Zoom>
                                {/* Start HOME-background */}
                                <div className='HOME-background'>

                                        <span className='HOME-background-job-brand'>
                                                <p>SE||FS</p>
                                        </span>

                                        <span className='HOME-background-content-title'>
                                                <p>PORTFOLIO</p>
                                        </span>

                                        <span className='HOME-background-content-nameOwner'>
                                                <span>
                                                        ANH LE
                                                </span>

                                                <span className='HOME-background-content-info' >
                                                        <a className='HOME-background-content-info-info-list' href='mailto:leanh6998@gmail.com' alt='gmail' target="_blank">< AiOutlineMail viewBox='0 0 1000 600' size={25} style={{ fill: 'white' }} /></a>
                                                        <a className='HOME-background-content-info-info-list' href='https://github.com/AnhMinhHoangLe' alt='Github' target="_blank"><AiFillGithub viewBox='0 0 1000 600' size={25} style={{ fill: 'white' }} /> </a>
                                                        <a className='HOME-background-content-info-info-list' href='https://www.linkedin.com/in/anh-le-69m98/' alt='Linkedin' target="_blank"><AiOutlineLinkedin viewBox='0 0 1000 600' size={25} style={{ fill: 'white' }} /></a>
                                                </span>

                                                <span className='HOME-background-content-year'>2020</span>
                                        </span>
                                </div>
                        </Zoom>

                        {/* END HOME-background */}
                </div >

        )
})
export default Intro; 