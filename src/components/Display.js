import React from 'react'

const Display = props => {

    const {location,main,weather}=props.data

    let icon= weather[0] ? weather[0].icon : ""
    let description = weather[0] ? weather[0].description : ""
    let pressure = main.pressure
    let humidity =  main.humidity
    let temp = main.temp 


    console.log(weather)
    const imgUrl= icon &&"http://openweathermap.org/img/w/"+icon+".png"
    return (
        <div>

{
    location && <p className="weather__key">  Location : <span className="weather__value"> {location} </span>
   </p> 
}


{
    temp && <p className="weather__key" >Temperature : <span className="weather__value">  {temp } </span>
     </p>

}
{
    pressure && <p className="weather__key">Pressure:  <span className="weather__value">{pressure} </span> 
     </p> 
}
{
        humidity && <p className="weather__key">Humidity:  <span className="weather__value">  {humidity} </span>
         </p>
}
{ 
    description && <p className="weather__key"> description: <span className="weather__value">  {description} </span>
    </p> 
}
     
{
    imgUrl && <p className="weather__key"> WeatherNow: 
        <img src={imgUrl} alt="icon"/>
     </p>
}  
      
    
 
                      


        </div>
    )
}


export default Display;

