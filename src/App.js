import React, { Component } from 'react'
import './App.css'
import ilHome from "./il-home.svg"
import Home from "./Component/Home/Home"


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
                        <div>
                                {
                                        route === 'Home' ?
                                                (
                                                        <div className='svg'>
                                                                <span className='svg-card'>
                                                                        <object type="image/svg+xml" data={ilHome}>
                                                                        </object>
                                                                </span>

                                                                <span className='welcome'>
                                                                        <p className='welcome-p' onClick={() => this.onRouteChange("About")} >WELCOME</p>
                                                                </span >
                                                        </div >
                                                ) : (
                                                        

                                                                <Home onRouteChange={this.onRouteChange} />




                                                )
                                }

                        </div>

                )
        }
}
export default App