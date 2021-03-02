import React,{useState} from 'react'
 
export const WeatherCard = ({submit}) => {
    const [title,setTitle] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
       
        submit(title);
    }


    return (
        <div>
            <form   className="WeatherCard" onSubmit={onSubmit} style={getStyle}>
                  
                  <input 
                  type="title" 
                  name="location" 
                  placeholder="Add Location"
                  value = {title}
                  onChange={(e)=>setTitle(e.target.value)} 
                   />
                  <input type="submit" value = "Submit"  className="submitbtn"  style={submitStyle} />
    
                  
            </form>  
    
            
        </div>
    )

    
}

const getStyle = 
    {
        display:'flex',
        height : 50,
        width: 50        
    }
    const submitStyle = 
    {
        
    }