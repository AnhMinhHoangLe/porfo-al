import React, { Component } from 'react'
import logo from "../Nav/logo.png"
import "./Skills.css"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Skills extends Component {
        constructor() {
                super();
                this.state = {
                        routeSkill: '',
                }
        }

        onChange = ((routeSkill) => {
                this.setState({
                        routeSkill: routeSkill
                })
        })
        render() {
                const backend = ['Python', 'Java', 'SQL', 'JSON', 'Express JS']
                const frontend = ['HTML', 'CSS', 'JavaScripts', 'Django', 'Flask', 'React JS']
                const testing = ['Pytest', 'Unit Test', 'Test Cases']
                const sysadmin = ['Git / Github', 'Linux / Mac']
                const software = ['Photoshop', 'Adobe Xd', 'Figma', 'Heroku']

                const { routeSkill } = this.state
                return (

                        <div className='SKILL'>
                                <Fade bottom>

                                        {/* Start Skill page */}
                                        <div div className='SKILL-half-left' >
                                                <span className='SKILL-half-left-title' onMouseEnter={() => this.onChange('')} ><p>SKILLS</p></span>
                                                <span className='SKILL-half-left-nav'>

                                                        <ul>


                                                                <li onMouseEnter={() => this.onChange('backend')} >backend</li>
                                                                <li onMouseEnter={() => this.onChange('frontend')} >frontend</li>
                                                                <li onMouseEnter={() => this.onChange('others')} >others</li>
                                                        </ul>
                                                </span>

                                        </div >

                                        <div className='SKILL-half-right'>
                                                {
                                                        routeSkill === 'backend' ? (
                                                                <div className='SKILL-half-right-content'>

                                                                        <Zoom cascade>
                                                                                {
                                                                                        backend.map((value, id) => {
                                                                                                return <p className={id}>{value}</p>
                                                                                        })
                                                                                }
                                                                        </Zoom>
                                                                </div>


                                                        )
                                                                : routeSkill === 'frontend' ? (
                                                                        <div className='SKILL-half-right-content' >
                                                                                <Zoom cascade>
                                                                                        {
                                                                                                frontend.map((value, id) => {
                                                                                                        return <p className={id}>{value}</p>
                                                                                                })
                                                                                        }
                                                                                </Zoom>
                                                                        </div>
                                                                )
                                                                        : routeSkill === 'others' ? (
                                                                                <div className='SKILL-half-right-content-others'>
                                                                                        <Zoom cascade>
                                                                                                <span className='SKILL-half-right-content-item'>
                                                                                                        {
                                                                                                                testing.map((value, id) => {
                                                                                                                        return <p className={id}>{value}</p>
                                                                                                                })
                                                                                                        }


                                                                                                </span>
                                                                                                <span className='SKILL-half-right-content-item '>
                                                                                                        {
                                                                                                                sysadmin.map((value, id) => {
                                                                                                                        return <p className={id}>{value}</p>
                                                                                                                })
                                                                                                        }
                                                                                                </span>
                                                                                                <span className='SKILL-half-right-content-item'>

                                                                                                        {
                                                                                                                software.map((value, id) => {
                                                                                                                        return <p className={id} >{value}</p>
                                                                                                                })
                                                                                                        }
                                                                                                </span>
                                                                                        </Zoom>
                                                                                </div>
                                                                        )
                                                                                : (
                                                                                        <div>
                                                                                                <img src={logo} alt="" id='SKILL-half-right-logo' />
                                                                                                <h1>OTPSENSEI</h1>
                                                                                        </div>

                                                                                )
                                                }
                                        </div>
                                </Fade>
                        </div>


                )
        }
}
export default Skills; 