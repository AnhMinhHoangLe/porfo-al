import React, { Component } from 'react'
import './Home.css';

import Extra_Info from '../Extra_Info/Extra_Info'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Intro from '../Intro/Intro'
import Nav from '../Nav/Nav'


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
      <div className='APP'>
        <div className='pll pll-1 '>
          <Nav onRouteChange={onRouteChange} />
          <Intro />
        </div>
        <div className='pll pll-2'>
          {
            moreInfo === true ? (

              <About onChangeInInfo={this.onChangeInInfo} />
            ) : (

                <Extra_Info onChangeInInfo={this.onChangeInInfo} />

              )
          }
        </div>

        <div className=' pll pll-3'>
          <Skills />
        </div>
        
        <div className='pll pll-4' >
          <Project />
        </div>





      </div >
    );
  }
}
export default Home 