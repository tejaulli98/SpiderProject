import React from 'react';
import Interior from './Interior.js'
import Exterior from './Exterior.js'
import Safety from './Safety.js'
import Gallery from './Gallery.js'
import './App.css';





function GoAuto() {
  return (
<div>
        
        <div>
            <img src="./assets/images/slidebanner1.jpg" className="bannerImg" />
        </div>
        
    <section class="automobile ">
        <div class="jumbotron">
            <div class="container text-center">
                <h2 style={{fontWeight:'bold'}}>WELCOME TO  KUARZABUMI</h2>
                 <h4 style={{fontWeight:'bold'}}>EXCLUSIVE GOAUTO DEALER</h4>
            </div>
        
                <div class="container text-center">
                        <div class="row pt-4">
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/img1.jpg" className="automobileImg" />
                                <h4 class="pt-2">INTERIOR</h4>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/img2.jpg" className="automobileImg" />
                                <h4 class="pt-2">EXTERIOR</h4>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/img3.jpg" className="automobileImg" />
                                <h4 class="pt-2">SAFETY</h4>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/img4.jpg" className="automobileImg" />
                                <h4 class="pt-2">GALLERY</h4>
                            </div>

                        </div>
                </div>
         </div>    
    </section>
    

    <section class="services">
        <div class="container text-center">
            <p>YOU CAN CHOOSE HIGH QUALITY SERVICES</p>
            <h2>OUR SERVICES</h2>
        </div>


        <div class="container text-center">
                        <div class="row p-4">
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/icons-01.png" className="servicesImg" />
                                <h4 class="pt-2">SALES</h4>
                                <p class="pt-2">We provide a wide range of options of commercial vehicle and also a custom truck body. Call us now @ +6016 222 7779 and tell us your requirement.</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/icons-02.png" className="servicesImg" />
                                <h4 class="pt-2">SERVICES</h4>
                                <p class="pt-2">kuarzabumi offers a complete range of maintenance services. Our mechanics have worked with a huge range of vans & trucks over the years.</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/icons-03.png" className="servicesImg" />
                                <h4 class="pt-2">SPARE PARTS</h4>
                                <p class="pt-2">We stock a wide range of spare parts for vans & trucks. We aim to supply you with a part that will meet your requirements as quickly as possible.</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 pb-4">
                                <img src="./assets/images/icons-04.png" className="servicesImg" />
                                <h4 class="pt-2">INSURANCE</h4>
                                <p class="pt-2">We offer a comprehensive range of general insurance solutions. We are ready to assist you with our professional advice.</p>
                            </div>

                        </div>
                </div>

    </section>

    <Interior />

    <Exterior />

    <Safety />

    <Gallery />


</div>    
  );
}

export default GoAuto