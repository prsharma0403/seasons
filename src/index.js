import React from 'react';
import ReactDom from 'react-dom';
import Spinner from './Spinner';

import SeasonDisplay from './SeasonDisplay';
//import season from'./season';


class App extends React.Component{
      
    state={Latitutde:null,errorMessage:""};
    componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
                position=>this.setState({Latitutde:position.coords.latitude}),//console.log(position),
                err=>this.setState({errorMessage:err.message})//console.log(err)
            );
        
      
    }
    renderContent(){
        if(this.state.errorMessage&& !this.state.Latitutde){
            return<div>
                 errorMessage:{this.state.errorMessage}
            </div>
        }
     if(this.state.Latitutde&& !this.state.errorMessage){
         return <SeasonDisplay Latitutde={this.state.Latitutde}/>
        }
     return <Spinner message="please accept location request" />
     
    }
    
    render(){
        return(
              <div className="boarder red">{this.renderContent()}</div>

        );
       
}}
ReactDom.render(
    <App />,
    document.querySelector('#root')
)