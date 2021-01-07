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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function WorkWith() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fadeIn: false,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <section className = "work_with">
        <img src={WorkWithBg}  className = "workbg img-fluid"/>
        <div className = "container-fluid owlcontainer">
            <div className = "row">
                <div className = "col-sm-10 offset-1">
                    <h2>Worked with<span></span></h2>
                    <Slider {...settings}>
                        <div ><img src={Laravel} className = "img-fluid" alt = "Laravel" /></div>
                        <div ><img src={Bootstrap} className = "img-fluid" alt = "Bootstrap" /></div>
                        <div ><img src={ReactNative} className = "img-fluid" alt = "ReactNative" /></div>
                        <div ><img src={Swift} className = "img-fluid" alt = "Swift" /></div>
                        <div ><img src={Vuejs} className = "img-fluid" alt = "Vue.js" /></div>
                        <div ><img src={Adobexd} className = "img-fluid" alt = "Adobe XD" /></div>
                        <div ><img src={Htmlcssjs} className = "img-fluid" alt = "Html Css Js" /></div>
                        <div ><img src={Phpmysql} className = "img-fluid" alt = "Php Mysql" /></div>
                        <div ><img src={Jquery} className = "img-fluid" alt = "Jquery" /></div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

