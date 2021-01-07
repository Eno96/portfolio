import React from "react";

import Portofolioheaderdots from "../assets/portdots.svg";

import Moviearc from "../assets/portofolio/moviearc.svg";
import Jobsteppartner from "../assets/portofolio/jobsteppartner.svg";
import Randompicker from "../assets/portofolio/randompicker.svg";
import FarmfreshCMS from "../assets/portofolio/farmfreshCMS.svg";
import FarmfreshSite from "../assets/portofolio/farmfreshSite.svg";
import TruckByEA from "../assets/portofolio/truckByEA.svg";
import Wwtcm from "../assets/portofolio/wwtcm.svg";
import BreakCounter from "../assets/portofolio/breakcounter.svg";


export default function Portofolio() {
  return (
    <section className = "portofolio">
        <div className = "rightblue"></div>
        <div className = "container-fluid" id = "portofolio">
          <div className = "row pt-5">
            <div className = "col-sm-11 offset-1 portofoliotext">
              <h2><img src={Portofolioheaderdots} className="img-fluid" alt = "bg"/>Portofolio<span></span></h2>
            </div> 
            <div className = "col-sm-10 offset-1 portofoliodesc">

              <div className = "row">
                  <div className = "col-sm card">
                    <a href="#" target="_blank" rel="noreferrer"><img src={Moviearc} className = "img-fluid" alt = "MovieArc"/></a>
                    <h3>MovieArc</h3>
                    <p>New React Native app in progress.</p>
                    <p>Suggesting a film depending on the mood and genre.</p>
                  </div>    
                  <div className = "col-sm card">
                    <a href="https://play.google.com/store/apps/details?id=com.partnerjobstep&hl=en&gl=US" target="_blank" rel="noreferrer"><img src={Jobsteppartner} className = "img-fluid" alt = "Jobstep Partner APP"/></a>
                    <h3>Jobstep Partner APP</h3>
                    <p>The Jobstep Partner App is a Jobstep</p>
                    <p>outsourcing application</p>
                  </div>     
                  <div className = "col-sm card">
                    <a href="https://play.google.com/store/apps/details?id=com.phonegap.RandomPicker&hl=en&gl=US" target="_blank" rel="noreferrer"><img src={Randompicker} className = "img-fluid" alt = "Random Picker App"/></a>
                    <h3>Random Picker App</h3>
                    <p>Random Picker is a simple and fast</p>
                    <p>application that serves for picking a random</p>
                    <p>winner from a list of items</p>
                  </div>   
                  <div className = "col-sm card">
                    <a href="https://farmfresh.ba/cms/login" target="_blank" rel="noreferrer"><img src={FarmfreshCMS} className = "img-fluid" alt = "FarmFresh CMS"/></a>
                    <h3>FarmFresh CMS</h3>
                    <p>Full custom Laravel CMS for FarmFresh Shop.</p>
                  </div>       
                </div>  

                <div className = "row pt-5">
                  <div className = "col-sm card">
                    <a href="https://farmfresh.ba" target="_blank" rel="noreferrer"><img src={FarmfreshSite} className = "img-fluid" alt = "FarmFresh shop"/></a>
                    <h3>FarmFresh shop</h3>
                    <p>Farm Fresh is a retail distributor of domestic.</p>
                    <p>products.</p>
                  </div>    
                  <div className = "col-sm card">
                    <a href="#" target="_blank" rel="noreferrer"><img src={TruckByEA} className = "img-fluid" alt = "Truck by EA"/></a>       
                    <h3>Truck by EA</h3>
                    <p>Bluetooth truck control with object </p>
                    <p>recognition and android Java application for</p>
                    <p>its management </p>
                  </div>  
                  <div className = "col-sm card">
                    <a href="https://play.google.com/store/apps/details?id=ba.wwtcm&hl=en&gl=US" target="_blank" rel="noreferrer"><img src={Wwtcm} className = "img-fluid" alt = "WWT Channel Manager"/></a> 
                    <h3>WWT Channel Manager</h3>
                    <p>World Wide Travel Channel Manager offers:</p>
                    <p>• Booking information from 180+ channels such as Booking.com, Expedia, AirBnB.</p>
                    <p>• Calendar synchronization</p>
                    <p>• Price adjustment</p>
                    <p>• Manual entry of reservations allows a complete statistical overview of business</p>
                    <p>• No show option to charge no-show</p>
                  </div>  
                  <div className = "col-sm card">
                    <a href="https://github.com/Eno96/Break-Counter" target="_blank" rel="noreferrer"><img src={BreakCounter} className = "img-fluid" alt = "Break Counter"/></a> 
                    <h3>Break Counter</h3>
                    <p>Swift App for tracking break time on Work.</p>
                  </div>   
                </div>  

              </div>
          </div>
        </div>
    </section>
  )
}