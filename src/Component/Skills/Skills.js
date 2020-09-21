import React, { Component } from 'react'
import logo from "../Home/logo.png"
import "./Skills.css"
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';

const particles = {
        particles: {
                number: {
                        value: 8000,
                        density: {
                                enable: true,
                                value_area: 3000,
                        }
                },
                color: {
                        value: "#ffffff"
                }

        }
}
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
                const testing = ['Pytest', 'TravisCI', 'Test Cases']
                const sysadmin = ['Git / Github', 'Linux / Mac']
                const software = ['Photoshop', 'Adobe Xd', 'Figma', 'Heroku']

                const { routeSkill } = this.state
                return (

                        <ParallaxLayer offset={2} speed={0} className='SKILL'>
                                <Particles params={{ particles }} className='particles'/>

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

                                                                <ul >
                                                                        <Fade bottom cascade>
                                                                                {
                                                                                        backend.map((value, id) => {
                                                                                                return <li className={id}>{value}</li>
                                                                                        })
                                                                                }
                                                                        </Fade>
                                                                </ul>
                                                        </div>


                                                )
                                                        : routeSkill === 'frontend' ? (
                                                                <div className='SKILL-half-right-content' >

                                                                        <ul>
                                                                                <Fade bottom cascade>
                                                                                        {
                                                                                                frontend.map((value, id) => {
                                                                                                        return <li className={id}>{value}</li>
                                                                                                })
                                                                                        }
                                                                                </Fade>
                                                                        </ul>
                                                                </div>
                                                        )
                                                                : routeSkill === 'others' ? (
                                                                        <div className='SKILL-half-right-content-others'>
                                                                                <Fade bottom cascade ssrFadeout>
                                                                                        <span className='SKILL-half-right-content-item'>

                                                                                                <ul>

                                                                                                        {
                                                                                                                testing.map((value, id) => {
                                                                                                                        return <li className={id}>{value}</li>
                                                                                                                })
                                                                                                        }

                                                                                                </ul>

                                                                                        </span>
                                                                                        <span className='SKILL-half-right-content-item '>
                                                                                                <ul>
                                                                                                        {
                                                                                                                sysadmin.map((value, id) => {
                                                                                                                        return <li className={id}>{value}</li>
                                                                                                                })
                                                                                                        }
                                                                                                </ul>
                                                                                        </span>
                                                                                        <span className='SKILL-half-right-content-item'>

                                                                                                <ul >
                                                                                                        {
                                                                                                                software.map((value, id) => {
                                                                                                                        return <li className={id} >{value}</li>
                                                                                                                })
                                                                                                        }
                                                                                                </ul>
                                                                                        </span>
                                                                                </Fade>
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

                        </ParallaxLayer>

                )
        }
}
export default Skills; 