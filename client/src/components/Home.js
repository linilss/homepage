import React, { Component } from 'react'
import './css/Home.css'

class Home extends Component {
    render() {
        return(
            <div id="wrapper" className="wrapper">
              <div className="room salmon">
                <br/>
                <h1 className="room-header">Hello, sexy!</h1>
                <p className="room-par">this is my paragraph</p>
              </div>
              <div className="room purple">
                <br/>
                <h1 className="room-header">Hello, sexy!</h1>
                <p className="room-par">this is my paragraph</p>
              </div>
              <div className="room tan">
                <br/>
                <h1 className="room-header">Hello, sexy!</h1>
                <p className="room-par">this is my paragraph</p>
              </div>
              
            </div>
        );
    }
}

export default Home
