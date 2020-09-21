import React, { Component } from 'react'
import aircart1 from "./air-cart1.png"
import aircart2 from "./air-cart2.png"
import todolist1 from "./2do1.png"
import todolist2 from "./2do2.png"
import detectface1 from "./detectFace1.png"
import detectface2 from "./detectFace2.png"
import colorgenerator from "./gradient.png"
import "./Project.css"
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Fade from 'react-reveal/Fade';


class Project extends Component {
        constructor() {
                super();
                this.state = {
                        pictureProject: ''
                }
        }
        onChangePictureProject = ((pictureProject) => {
                this.setState({
                        pictureProject: pictureProject
                })
        })

        render() {
                const { pictureProject } = this.state;
                return (
                        <ParallaxLayer offset={3} speed={0} className="PROJECT">
                                <div className='PROJECT-content'>
                                        <span className='PROJECT-title'>PROJECTS</span>
                                        <span className='PROJECT-list'>
                                                <ul>
                                                        <li className='PROJECT-subtitle'>TEAMWORK</li>
                                                        <li className='PROJECT-list-item' onMouseOver={() => this.onChangePictureProject('todolist')} onMouseLeave={() => this.onChangePictureProject('')}><a href='https://two2do.herokuapp.com/login'>TodoList</a></li>
                                                        <li className='PROJECT-list-item' onMouseOver={() => this.onChangePictureProject('ecommerce')} onMouseLeave={() => this.onChangePictureProject('')}><a href='https://aircart-gs.herokuapp.com/'>E-commerce</a></li>
                                                        <li className='PROJECT-subtitle'>INDIVIDUAL</li>
                                                        <li className='PROJECT-list-item' onMouseOver={() => this.onChangePictureProject('colorgenerator')} onMouseLeave={() => this.onChangePictureProject('')}><a>Gradient</a></li>
                                                        <li className='PROJECT-list-item' onMouseOver={() => this.onChangePictureProject('detectface')} onMouseLeave={() => this.onChangePictureProject('')}><a href='https://detectionface-otp.herokuapp.com/#0'>DetectFace</a></li>
                                                </ul>
                                        </span>
                                        <span className='PROJECT-brand1'>
                                                <Fade left ssrFadeout >
                                                        {
                                                                pictureProject === 'todolist' ? (
                                                                        <img className='PROJECT-picture' src={todolist1} alt='' />
                                                                ) : pictureProject === 'ecommerce' ? (
                                                                        <img className='PROJECT-picture' src={aircart1} alt='' />
                                                                ) : pictureProject === 'detectface' ? (
                                                                        <img className='PROJECT-picture' src={detectface1} alt='' />
                                                                ) : pictureProject === 'colorgenerator' ? (
                                                                        <img className='PROJECT-picture' src={colorgenerator} alt='' />
                                                                ) : (<span></span>)
                                                        }
                                                </Fade>
                                        </span>
                                        <span className='PROJECT-brand2'>
                                                <Fade right ssrFadeout>

                                                        {
                                                                pictureProject === 'todolist' ? (
                                                                        <img className='PROJECT-picture' src={todolist2} alt='' />
                                                                ) : pictureProject === 'ecommerce' ? (
                                                                        <img className='PROJECT-picture' src={aircart2} alt='' />
                                                                ) : pictureProject === 'detectface' ? (
                                                                        <img className='PROJECT-picture' src={detectface2} alt='' />
                                                                ) : pictureProject === 'colorgenerator' ? (
                                                                        <img className='PROJECT-picture' src={colorgenerator} alt='' />
                                                                ) : (<span></span>)
                                                        }
                                                </Fade>

                                        </span>
                                </div>



                        </ParallaxLayer>
                )
        }
}
export default Project; 