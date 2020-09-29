import React from 'react';
import './App.css';

class Safety extends React.Component{
constructor(){
    super();
    this.state={
        safetyImg : <img src="./assets/images/safety1.jpg" style={{width: "100%"}}/>
    };
}
safetyImages1 = () =>{
    this.setState({
        safetyImg : <img src="./assets/images/safety1.jpg" style={{width: "100%"}} />
    })

}
safetyImages2 = () =>{
    this.setState({
        safetyImg : <img src="./assets/images/safety2.jpg" style={{width: "100%"}}/>
    })

}


render(){
    return(
        <div>
            <section class="container safety">
                <div class="text-center">
                    <h2>SAFETY</h2>
                </div>

                <div class="row p-4 ">

                    <div class="col-md-4 col-sm-12 col-12 text-center">
                        <div class="safetyButton">
                            <button onClick={this.safetyImages1}><i class="fa fa-plus" aria-hidden="true"></i> Wide Angle Sensor</button>
                        </div>
                        <div class="safetyButton">
                            <button onClick={this.safetyImages2}><i class="fa fa-plus" aria-hidden="true"></i> ABS + EBD </button>
                        </div>
                        
                    </div>

                    <div class="col-md-8 col-sm-12 col-12 text-center ">
                        {this.state.safetyImg}
                        
                    </div>

                    
                </div>
            </section>
        </div>
    );
}
}

export default Safety
