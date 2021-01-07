import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconsForMobile from "../assets/iconsline.svg";
import BackgroundMiddle from "../assets/backgroundmiddle.svg";
import Parallax from 'parallax-js';

class Header extends React.Component {
  componentDidMount() {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }
  
  render () {
    return (
      <section className="header_bg">
        {/* TOP NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
          <div className="container-fluid">
            <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">  
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link active" aria-current="page" href="#aboutme"><span></span>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portofolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#hireme">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link last" href="#aboutme">Get Started</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* TEXT DESCRIPTION HEADER */}
        <div className="headerLeft">
          <h2>Hello, I am </h2> 
          <h1>Enes<br/>Dedić </h1> 
          <p className="gold">A young Developer with passion for mobile & web development.</p> 
          <p className="mt-top25">Find Me on</p> 
          <div className="headerIcons">
            <a className="icons" href='https://www.linkedin.com/in/enes-dedic6/'> <FontAwesomeIcon icon={["fab", "linkedin"]} /> </a>
            <a className="icons" href='https://www.facebook.com/enes.dedic1/'> <FontAwesomeIcon icon={["fab", "facebook-square"]} /> </a>
            <a className="icons" href='https://github.com/Eno96'> <FontAwesomeIcon icon={["fab", "github-square"]} /> </a>
            <a className="icons" href="mailto:dedicenes1996@gmail.com"> <FontAwesomeIcon icon={["fas", "envelope-square"]} /> </a>
          </div>
          <a className="hireme" href="#hireme">Hire Me</a>
          <a className="portfolio" href="#portofolio">Portfolio</a>
        </div>


        {/* PHOTO DECOS */}
        <div className="headerMiddle" id="scene">
            <div data-depth="0.6"><img src={BackgroundMiddle} className="img-fluid" alt = "bg"/></div>

        </div>
        
        <div className="headerMiddleMobile"><img src={IconsForMobile} className="img-fluid" alt = "bg"/></div>
        <div className="headerBtm"></div>
      </section>
    )
  }
}

export default Header