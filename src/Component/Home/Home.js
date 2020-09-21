import React, { Component } from 'react'
import './Home.css';
import { AiOutlineMail, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import logo from "./logo.png"
import Extra_Info from '../Extra_Info/Extra_Info'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Particles from 'react-particles-js';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Zoom from 'react-reveal/Zoom';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      moreInfo: true,
    }
  }

  onChangeInInfo = ((moreInfo) => {
    this.setState({
      moreInfo: moreInfo
    })
  })




  render() {
    const { onRouteChange } = this.props;
    const { moreInfo } = this.state;

    return (
      <Parallax pages={4} scrolling={true} vertical ref={ref => (this.parallax = ref)} className='APP'>
        <ParallaxLayer offset={0} speed={0} className="HOME" >
          {/* Start nav */}
          <div className='HOME-background-nav'>
            <span>
              <img onClick={() => onRouteChange("Home")} src={logo} alt="" id='HOME-background-nav-logo' />

            </span>
          </div>
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

          <div className='Home-scrolling'>
            <span className='Home-scrolling-shape' onClick={() => this.parallax.scrollTo(1)}>
            </span>
          </div>
        </ParallaxLayer >
        {
          moreInfo === true ? (
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">

              <About onChangeInInfo={this.onChangeInInfo} />
            </div>
          ) : (

              <Extra_Info onChangeInInfo={this.onChangeInInfo} />

            )
        }


        <Skills />


        <Project />


      </Parallax >
    );
  }
}
export default Home 