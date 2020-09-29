import React from 'react';
import './App.css';

class Interior extends React.Component{
constructor(){
    super();
    this.state={
        interiorImg : <img src="./assets/images/interior1.jpg" style={{width: "100%"}} />,
    };
}
interiorImages1 = () =>{
    this.setState({
        interiorImg : <img src="./assets/images/interior1.jpg" style={{width: "100%"}} />
    })

}
interiorImages2 = () =>{
    this.setState({
        interiorImg : <img src="./assets/images/interior2.jpg" style={{width: "100%"}} />
    })

}
interiorImages3 = () =>{
    this.setState({
        interiorImg : <img src="./assets/images/interior3.jpg" style={{width: "100%"}} />
    })

}
interiorImages4 = () =>{
    this.setState({
        interiorImg : <img src="./assets/images/interior4.jpg" style={{width: "100%"}} />
    })

}
interiorImages5 = () =>{
    this.setState({
        interiorImg : <img src="./assets/images/interior5.jpg" style={{width: "100%"}} />
    })

}
render(){
    return(
        <div>
            <section class="container interior">
                <div class="text-center">
                    <h2>INTERIOR</h2>
                </div>

                <div class="row p-4">
                    <div class="col-md-4 col-sm-12 col-12 text-center">
                        <div class="interiorButton">
                            <button onClick={this.interiorImages1}><i class="fa fa-plus" aria-hidden="true"></i> Ergonomically spaced</button>
                        </div>
                        <div class="interiorButton">
                            <button onClick={this.interiorImages2}><i class="fa fa-plus" aria-hidden="true"></i>  Spacious luggage area</button>
                        </div>
                        <div class="interiorButton">
                            <button onClick={this.interiorImages3}><i class="fa fa-plus" aria-hidden="true"></i>  Middle console box</button>
                        </div>
                        <div class="interiorButton">
                            <button onClick={this.interiorImages4}><i class="fa fa-plus" aria-hidden="true"></i>  Spacious head room</button>
                        </div>
                        <div class="interiorButton">
                            <button onClick={this.interiorImages5}><i class="fa fa-plus" aria-hidden="true"></i>  Multi-compartment console</button>
                        </div>
                    </div>

                    <div class="col-md-8 col-sm-12 col-12 pt-4">
                        {this.state.interiorImg}
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
}

export default Interior
