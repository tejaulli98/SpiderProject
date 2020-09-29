import React from 'react';
import './App.css';

class Exterior extends React.Component{
constructor(){
    super();
    this.state={
        exteriorImg : <img src="./assets/images/exterior1.jpg" style={{width: "100%"}} />
    };
}
exteriorImages1 = () =>{
    this.setState({
        exteriorImg : <img src="./assets/images/exterior1.jpg" style={{width: "100%"}} />
    })

}
exteriorImages2 = () =>{
    this.setState({
        exteriorImg : <img src="./assets/images/exterior2.jpg" style={{width: "100%"}} />
    })

}
exteriorImages3 = () =>{
    this.setState({
        exteriorImg : <img src="./assets/images/exterior3.jpg" style={{width: "100%"}} />
    })

}

render(){
    return(
        <div class="jumbotron">
            <section class="container exterior">
                <div class="text-center">
                    <h2>EXTERIOR</h2>
                </div>

                <div class="row p-4 ">

                    <div class="col-md-8 col-sm-12 col-12 text-center ">
                        {this.state.exteriorImg}
                        
                    </div>

                    <div class="col-md-4 col-sm-12 col-12 text-center">
                        <div class="exteriorButton">
                            <button onClick={this.exteriorImages1}><i class="fa fa-plus" aria-hidden="true"></i> Sleek Design</button>
                        </div>
                        <div class="exteriorButton">
                            <button onClick={this.exteriorImages2}><i class="fa fa-plus" aria-hidden="true"></i> Rear Combination Lamp </button>
                        </div>
                        <div class="exteriorButton">
                            <button onClick={this.exteriorImages3}><i class="fa fa-plus" aria-hidden="true"></i>  Front Gille</button>
                        </div>
                    </div>

                    
                </div>
            </section>
        </div>
    );
}
}

export default Exterior
