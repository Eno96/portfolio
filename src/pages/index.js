import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


import Header from "./components/header";
import AboutMe from "./components/aboutme";
import WorkWith from "./components/workwith";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";


library.add(faLinkedin, faFacebookSquare, faGithubSquare , faEnvelopeSquare, faCheckCircle);


export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <WorkWith />
      <Portofolio />
      <Footer />
    </div>
  )
}