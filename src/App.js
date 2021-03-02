import React,{useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {WeatherCard} from './components/WeatherCard';
import { v4 as uuidv4 } from 'uuid';
import {Locations} from './components/Locations';



function App() {
  const REACT_APP_WEATHER_API_KEY = 'e5084e6a945bbc10ad45e47cf7ff49ff';
  const [attributeform,setAttributeform] = useState([])
  const [location,setLocation] = useState([{}])

  const onSubmit = async(title) =>{
    const weather = await fetchData(title,REACT_APP_WEATHER_API_KEY)
      const newLocation = {
        id : uuidv4(),  
        loc:title,
        weather: weather
      }
      console.log(newLocation);
      setLocation([...location,newLocation]);
                
    }
  
    
  
  
  const fetchData = async(location,REACT_APP_WEATHER_API_KEY) => {
    try{
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`);
    if (result.status === 200) {

    const data = await result.json();     
    return data;
    } 
    return (alert("Your location might be inaccurate")) ; 
  }
  catch (ex) {
        return (alert(ex.message) );
      }
  }
  
  return (
    <div>
      <Header title='My Weather Application'/>
      <button className='AddButton' onClick = {() => setAttributeform([...attributeform,<WeatherCard key={Math.random()} submit={onSubmit} />])}>
        +
      </button>
      {
        attributeform
      }
      <Locations locations={location}/>
      
    </div>
    
  ) 
}

export default App;
