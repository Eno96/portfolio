import React from "react";
import WorkWithBg from "../assets/workwithbg.svg";

import Laravel from "../assets/workwith/laravel.svg";
import Vuejs from "../assets/workwith/vuejs.svg";
import ReactNative from "../assets/workwith/reactnative.svg";
import Adobexd from "../assets/workwith/adobexd.svg";
import Htmlcssjs from "../assets/workwith/htmlcssjs.svg";
import Jquery from "../assets/workwith/jquery.svg";
import Phpmysql from "../assets/workwith/phpmysql.svg";
import Bootstrap from "../assets/workwith/bootstrap.svg";
import Swift from "../assets/workwith/swift.svg";


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const mobileThreshold = 700;

export default function WorkWith() {

    var itemshere = 4;
    if (typeof window !== "undefined") {
        if (window.innerWidth > mobileThreshold) {
            itemshere = 4;
        }else{
            itemshere = 2;      
        }
    }

  return (
    <section className = "work_with">
        <img src={WorkWithBg}  className = "workbg img-fluid"/>
        <div className = "container-fluid owlcontainer">
            <div className = "row">
                <div className = "col-sm-10 offset-1">
                    <h2>Worked with<span></span></h2>
                    <OwlCarousel className="owl-theme" loop items={itemshere}  margin={0}>
                        <div className ="item"><img src={Laravel} className = "img-fluid" alt = "Laravel" /></div>
                        <div className ="item"><img src={Bootstrap} className = "img-fluid" alt = "Bootstrap" /></div>
                        <div className ="item"><img src={ReactNative} className = "img-fluid" alt = "ReactNative" /></div>
                        <div className ="item"><img src={Swift} className = "img-fluid" alt = "Swift" /></div>
                        <div className ="item"><img src={Vuejs} className = "img-fluid" alt = "Vue.js" /></div>
                        <div className ="item"><img src={Adobexd} className = "img-fluid" alt = "Adobe XD" /></div>
                        <div className ="item"><img src={Htmlcssjs} className = "img-fluid" alt = "Html Css Js" /></div>
                        <div className ="item"><img src={Phpmysql} className = "img-fluid" alt = "Php Mysql" /></div>
                        <div className ="item"><img src={Jquery} className = "img-fluid" alt = "Jquery" /></div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
  )
}

