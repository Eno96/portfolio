import React from "react";
import CoffeDrinkImg from "../assets/coffedrink.svg";
import myCV from '../assets/mycv.pdf';



export default function AboutMe() {
  return (
    <section className = "about_me">
        <div className = "rightblue"></div>
        <div className = "container-fluid" id = "aboutme">
          <div className = "row pt-140">
            <div className = "col-lg-5 offset-1 col-sm-11 aboutmetext">
              <h2>About Me</h2>
              <img src={CoffeDrinkImg} className="img-fluid d-lg-none" title = "☕️ morning coffee is the best!" alt = "☕️ morning coffee is the best!" />
              <p> Recent college graduate (Bachelor engineer of Electrical engineering) from University of Bihać where I gathered experience with Matlab, Python, C++, Arduino, Java. </p>
              <p> During the course of my academic career, I also managed to accrue nearly 3 years of work experience. I had the privilege of working for Jobstep GmbH in a web developer role in my free time, where I learned valuable professional skills such as Android Studio, React Native, PHP, Swift, Objective-C etc. </p>
              <p> In both my academic and professional life, I have been consistently praised as efficient by my professors and peers. Whether working on academic, extracurricular, or professional projects, I apply proven critical thinking, problem-solving and teamwork skills. </p>
              <a href={myCV} >Download CV</a>
            </div>            
            <div className = "col-lg-5 aboutmephoto">
              <span className="d-none d-lg-block"></span>
              <img src={CoffeDrinkImg} className="img-fluid d-none d-lg-block" title = "☕️ morning coffee is the best!" alt = "☕️ morning coffee is the best!" />
            </div>
          </div>
        </div>
    </section>
  )
}
