import React from 'react';
import './App.css';

function Gallery(){
    return(
        <div>
            <section class="gallery">
                <div class="jumbotron text-center">
                    <h2>GALLERY</h2>

                    <div class="row text-center p-4">
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/newimg1.jpg" style={{width: "100%"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image9.jpg" style={{width: "100%"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image1.jpg" style={{width: "100%"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/newimg2.jpg" style={{width: "100%"}}/>
                        </div>
                    </div>


                    <div class="row text-center p-4">
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image17.jpg" style={{width: "100%",height:"20em"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image11.jpg" style={{width: "100%"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image12.jpg" style={{width: "100%"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image9.jpg" style={{width: "100%"}}/>
                        </div>
                    </div>
                    
                    
                    
                    <div class="row text-center p-4">
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/imgnew2.jpg" style={{width: "100%",height:"15em"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/imgnew1.jpg" style={{width: "100%",height:"15em"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image15.jpg" style={{width: "100%",height:"15em"}}/>
                        </div>
                        <div class="col-md-3 col-sm-12 col-12 p-2 img-hover-zoom">
                            <img src="./assets/gallery/image16.jpg" style={{width: "100%",height:"15em"}}/>
                        </div>
                    </div>


                   
                </div>

            </section>
        </div>
    );
}

export default Gallery