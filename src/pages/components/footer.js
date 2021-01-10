import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myCV from '../assets/mycv.pdf';



class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: "" , success: false, loader: false};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({email: event.target.value});
    }

    async handleSubmit(event) {
      this.setState({loader: true});
      event.preventDefault();
      try{
        const response = await fetch("/.netlify/functions/sendmail", {
          method: "POST",
          body: this.state.email,
        })
    
        if (!response.ok) {
          //not 200 response
          return
        }
        this.setState({success: true});
        this.setState({email: ""});
        this.setState({loader: false});
        //all OK
        
      } catch(e){
        this.setState({loader: true});
        //error
        alert(e);
      }
    }

    render () {
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
                  <form className ="form-inline" name="contact" data-netlify="true" onSubmit={this.handleSubmit}>
                    <div className ="form-group ml-sm-3 mb-2">
                      <label htmlFor="staticEmail2" className ="sr-only">Email</label>
                      <input type="email" className ="form-control" id="staticEmail2" value={this.state.email} placeholder="Enter your email"  onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className ="btn btn-primary mb-2">
                      {this.state.loader ? <FontAwesomeIcon className = " fa-2x fa-pulse" icon={["fas", "spinner"]}  /> : 'Hire Me'}
                    </button>   
                  </form>
                  {this.state.success &&
                  <div className = "col-2 text-center success">
                    <FontAwesomeIcon className = "text-success fa-5x" icon={["fas", "check-circle"]}  />
                  </div>
                  }
                </div>
              </div>
            </div>



            <div className = "container-fluid footerfluid">
              <div className = "row pt-5">

                <div className = "col-sm-3 text-center">
                  <h2>Portofolio</h2>
                </div>


                <div className = "col-sm-2 text-center footerhrefs">
                  <a  href='#aboutme'> About me </a>
                </div>
                <div className = "col-sm-2 text-center footerhrefs">
                  <a  href='#portofolio'> Portfolio </a>
                </div>
                <div className = "col-sm-2 text-center footerhrefs">
                  <a  href={myCV}> Download CV </a>
                </div>


                <div className = "col-sm-3 text-center footerIcons">
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
}


export default Footer