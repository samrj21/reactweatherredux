import React from 'react'

const Input =(props) =>{
    return(
        
        <div>
 
        <input type= "text" name="latitude" value={props.lat} onChange={props.handleLatitude}/>  

        <input type= "text" name="longitude" value={props.lon} onChange={props.handlelongitude}/> 
       
        </div>
  
    )
}

export default Input;