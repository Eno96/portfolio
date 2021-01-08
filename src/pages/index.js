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
import { Helmet } from "react-helmet";

import Logo from "./assets/logo.png";



library.add(faLinkedin, faFacebookSquare, faGithubSquare , faEnvelopeSquare, faCheckCircle);


export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Portofolio | Enes</title>

        <meta name="description" content="Experienced young Developer with passion for mobile & web development!" />
        <meta name="keywords" content="Web Design, Web Development, Portofolio, Mobile Development, Enes"/>
        <meta property="og:title" content="Portofolio | Enes" />
        <meta property="og:description" content="Experienced young Developer with passion for mobile & web development!" />
        <meta property="og:image" content={Logo} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Portofolio | Enes" />
        <meta property="og:url" content="https://enes-portofolio.netlify.app" />
      </Helmet>
      <Header />
      <AboutMe />
      <WorkWith />
      <Portofolio />
      <Footer />
    </div>
  )
}