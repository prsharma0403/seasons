import './SeasonDisplay.css'
import React from 'react';

const seasonConfig={
    summer:{
        text:"lets heat the beech",
        iconName:"sun"
    },
    winter :{
        text:"Burr its a chilly winter",
        iconName:"snowflake"
    }
}

const getSeason = (Latitutde,month)=>{
    if(month>2 && month<9){
        return Latitutde > 0 ?'summer':'winter';
    }
    else{
        return Latitutde > 0 ?'winter' :'summer';
    }
};
const SeasonDisplay=props => {
   const season=getSeason(props.Latitutde,new Date().getMonth());


  const{ text,iconName} =seasonConfig[season];

   console.log(season);
    return (<div className={`season-display ${season}`}>
        
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
        </div>
        );
   
}
export default SeasonDisplay;