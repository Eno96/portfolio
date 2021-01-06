import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return (
    <section className = "footer">
        <hr style={{ marginTop: `20%` }}/> 
        <div className = "container-fluid">
          <div className = "row pt-5">
            <div className = "col-sm-12 footertext">
              <h2>Want To Hire Me?</h2>
              <h3>If You Like My Work</h3>
            </div>  
            <div className = "col-sm-4 offset-sm-4" id = "hireme">    
              <form className ="form-inline">
                <div className ="form-group ml-sm-3 mb-2">
                  <label htmlFor="staticEmail2" className ="sr-only">Email</label>
                  <input type="text" className ="form-control" id="staticEmail2" placeholder="Enter your email"/>
                </div>
                <button type="submit" className ="btn btn-primary mb-2">Hire Me</button>
              </form>
            </div>
          </div>
        </div>



        <div className = "container-fluid footerfluid">
          <div className = "row pt-5">

            <div className = "col-sm-4 text-center">
              <h2>Portofolio</h2>
            </div>
            <div className = "col-sm-4 text-center footerhrefs">
              <a  href='#aboutme'> About me </a>
              <a  href='#portofolio'> Portfolio </a>
              <a  href='/mycv.pdf'> Download CV </a>
            </div>
            <div className = "col-sm-4 text-center footerIcons">
              <a className="icons" href='https://www.linkedin.com/in/enes-dedic6/'> <FontAwesomeIcon icon={["fab", "linkedin"]} /> </a>
              <a className="icons" href='https://www.facebook.com/enes.dedic1/'> <FontAwesomeIcon icon={["fab", "facebook-square"]} /> </a>
              <a className="icons" href='https://github.com/Eno96'> <FontAwesomeIcon icon={["fab", "github-square"]} /> </a>
              <a className="icons" href="mailto:dedicenes1996@gmail.com"> <FontAwesomeIcon icon={["fas", "envelope-square"]} /> </a>
            </div>

            <div className = "col-sm-12 text-center pt-5">
              <p>Design & Development by <span className="name">Enes Dedić</span> - All rights reserved.</p>
            </div>



          </div>
        </div>
        
    </section>
  )
}