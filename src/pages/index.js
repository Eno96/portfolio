import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.scss";

import './utils/font-awesome';

import Header from "./components/header";
import AboutMe from "./components/aboutme";
import WorkWith from "./components/workwith";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";


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