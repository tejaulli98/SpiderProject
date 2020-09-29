import React from 'react';
import './App.css';


function Footer(){
    return(
         
        <div>
        <footer>
                <div class="help bg-dark text-white">
                    <div class="container text-center pt-4">
                    <h2><i class="fa fa-phone"></i> NEED HELP? CALL +6016 222 7779 FOR ASSISTANCE</h2>                    </div>
                </div>

                <div class="address">
                    <div class="container pt-4">
                        <div class="row">
                            <div class="col-md-4 col-sm-12 col-12 mb-4">
                                <h6>CONTACT US</h6>
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-map-marker"></i>&nbsp;&nbsp;<span>No.26B, Jalan Astana 1C,
                                        Bandar Bukit Raja,
                                        41050 Klang, Selangor.</span>
                                        </li>
                                        <li><i class="fa fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:dave@kuarzabumi.my">enquiry@kuarzabumi.my</a></li>
                                        <li><i class="fa fa-phone"></i>&nbsp;&nbsp;<span>+6016 222 7779</span></li>
                                    </ul>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0307939151066!2d101.45091831475717!3d3.0864558977524474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53979fe48c15%3A0x41032e925b7d5699!2s26%2C+Jalan+Astana+1C%2C+41050+Shah+Alam%2C+Selangor%2C+Malaysia!5e0!3m2!1sen!2sin!4v1553260236839" style={{width: "100%"}}></iframe>
                            </div>
                        </div>
                    </div>
            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="row pt-4">
                        <div class="col-md-8 col-sm-8 col-12 text-center">
                            © 2020 kuarzabumi.my All rights reserved. Designed and developed by <a href="#" style={{color: "white"}}>Spider Asia Sdn Bhd</a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12 socialIcon text-center">
                           
                        
                           <span><a href="#" class=""><img src="./assets/icons/facebook.png" alt=""/></a></span>&nbsp;&nbsp;
                           <span><a href="#" class=""><img src="./assets/icons/instagram.png" alt=""/></a></span>&nbsp;&nbsp;&nbsp;
                           <span><a href="#" class=""><img src="./assets/icons/LinkedIn.png" alt=""/></a></span>
                           
                     </div>
                    </div>
                </div>
         </div>
        </footer>
        </div>
    );
}

export default Footer