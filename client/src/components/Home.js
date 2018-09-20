import React, { Component } from 'react'
import './css/Home.css'
import Fade from 'react-reveal/Zoom'; // Importing Zoom effect
import scrollToComponent from 'react-scroll-to-component';
import Tilt from 'react-tilt'

class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
  }

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 400, ease:'inCirc'});
  }
  
  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
  }
  render() {
    return(
      <div id="wrapper" className="wrapper">
        <div className="navbar-wrapper">
          <div id="navbar">
            <div className="navbar-item"
              onClick={() => scrollToComponent(this.one, { offset: 0, align: 'top', duration: 500})}>
              One
            </div>
            <div className="navbar-item"
              onClick={() => scrollToComponent(this.two, { offset: 0, align: 'top', duration: 500})}>
              Two
            </div>
            <div className="navbar-item"
              onClick={() => scrollToComponent(this.three, { offset: 0, align: 'top', duration: 500})}>
              Three
            </div>
          </div>
        </div>
        <section className='one' ref={(section) => { this.one = section; }}>
          <div className="room first">
            <div className="greeting">
              <br/>
              <div className="room-header">Hello,
                <p className="room-par">I'm paragraph</p> 
              </div>
            </div>
          </div>
        </section>
        <section className='two' ref={(section) => { this.two = section; }}>
          <div className="room white">
            <br/>
            <Fade left>
              <h1 className="room-header">Hello!</h1>
              <p className="room-par">this is my paragraph</p>
            </Fade>
              <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"> WOW </div>
              </Tilt>
          </div>
        </section>
        <section className='three' ref={(section) => { this.three = section; }}>
          <div className="room tan">
            <br/>
            <Fade left>
              <h1 className="room-header">Hello!</h1>
              <p className="room-par">this is my paragraph</p>
            </Fade>
          </div>
        </section>
      </div>
    );
  }
}

export default Home
