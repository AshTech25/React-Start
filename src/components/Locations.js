import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Locations = ({locations}) => {
    
    return (
        <div>
            {locations.map(location=>
            {console.log(location.weather)
            return(
                <div className='update'>
                    <div className='box'>
           {location.weather && <h1 key={uuidv4()} >{location.weather.name}</h1>}
           {location.weather && <h3 key={uuidv4()}>Temperature: {location.weather.main.temp} degree Celsius</h3>}
           {location.weather && <h3 key={uuidv4()}>Feels Like: {location.weather.main.feels_like} degree Celsius</h3>}
           {location.weather && <h3 key={uuidv4()}>Pressure: {location.weather.main.pressure} mb</h3>}
           </div>
           </div>
            )})}
        </div>
    )
}
