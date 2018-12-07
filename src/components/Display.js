import React from 'react'

const Display = props => {

    const {location,main,weather}=props.data

  
    let icon= weather[0] ? weather[0].icon : ""
    
    const imgUrl= icon && "http://openweathermap.org/img/w/"+icon+".png"
    return (
        <div>
     
   <li>  { 
      {location} && <p> Location: {location}
       </p>
       }
   </li>



<li>Temperature (C): {Math.floor(main.temp -273.15)}</li>


<li> Pressure: {main.pressure} </li> 
<li>Humidity: {main.humidity}</li>

 <li><div>
     <img src={imgUrl} alt="icon"/>
     </div>
  </li>   
    
 <li> 
     <div>
    
     </div>
  </li>                        


        </div>
    )



}


export default Display;

