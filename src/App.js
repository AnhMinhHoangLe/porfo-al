import React, { Component } from 'react'
import './App.css'
import ilHome from './il-home.svg';
import Home from "./Component/Home/Home"
import { GiClick } from "react-icons/gi";


const initialState = {
        route: "Home",
}


class App extends Component {
        constructor() {
                super();
                this.state = initialState

        }
        onRouteChange = ((route) => {

                this.setState({
                        route: route
                })
        })
        render() {
                const { route } = this.state
                return (
                        <div className='app'>
                                {
                                        route === 'Home' ?
                                                (
                                                        <div className='svg'>
                                                                <img src={ilHome} className='svg-card' alt='ilHome' />

                                                                <p className='welcome-p' onClick={() => this.onRouteChange("About")} > WELCOME <GiClick /></p>
                                                        </div >
                                                ) : (
                                                        <div>

                                                                <Home onRouteChange={this.onRouteChange} />
                                                        </div>



                                                )
                                }

                        </div>

                )
        }
}
export default App