import React from 'react';
import './App.css';


function Header() {
  return (
    <div class="fixed-top">
     

     <div class="top-container">
            <div class="container">
               <div class="row">
                 
                  <div class="col-md-4 col-sm-4 col-6 p-2">
                     
                        <span><i class="fa fa-envelope"></i> <a href="mailto:enquiry@kuarzabumi.my" target="_blank">enquiry@kuarzabumi.my&nbsp;&nbsp; </a></span>
						<span><a href="tel:+60162227779"> <i class="fa fa-phone"></i> +6016 222 7779</a></span>
					</div>
                    
                  
                  <div >
                     <div style={{marginLeft:580}}>
                        
                           <span><a href="#" class=""><img src="./assets/icons/facebook.png" alt=""/></a></span>&nbsp;&nbsp;
                           <span><a href="#" class=""><img src="./assets/icons/instagram.png" alt=""/></a></span>&nbsp;&nbsp;&nbsp;
                           <span><a href="#" class=""><img src="./assets/icons/LinkedIn.png" alt=""/></a></span>
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>



<div class="topNav">
<nav class="navbar navbar-expand-md">
   
  <a href="#">
      <img src="./assets/images/logo-black.png" class="logo"/>
  
  </a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      PRODUCTS
      </a>
      <div class="dropdown-menu dropdown-content">
        <a class="dropdown-item" href="#">GO AUTO</a>
        <a class="dropdown-item" href="#">BORGWARD</a>
      </div>
    </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ACTIVITY</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">TEST DRIVE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">LOAN CALCULATOR</a>
      </li>
      
    </ul>
  </div>
</nav>
</div>
</div>
    
  );
}

export default Header;
