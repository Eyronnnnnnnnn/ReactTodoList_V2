import { useEffect, useState } from 'react'


function App() {

const [weather , setWeather] = useState(null);
const [timezone, setTimezone] = useState ( null);
  useEffect(()=>{

    
    const fetchweather = async()=> {
      try{
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=15.98&longitude=120.57&current_weather=true&timezone=auto");
        const data = await response.json();
        console.log(data);
        setWeather(data.current_weather);
        setTimezone(data.timezone)
        console.log(timezone);
      }catch(error){
        console.log(error);
      }
    } 

    fetchweather();
  },[])


  return (
    
<div className="bg-gradient-to-r from-blue-500 to-purple-900 w-full h-screen flex items-center justify-center">
  <div className="bg-white rounded-3xl shadow-xl  w-270 h-8/12 flex overflow-hidden">
   <div className='bg-amber-400 w-3/5 h-122'>
   {/* // header for left container */}
   <div className='bg-blue-400 h-36 p-7'>
    <p className=' text-gray-600 font-bold text-xs font-sans'>TODAY</p>
    <h1 className='font-bold text-5xl text-gray-800'> MYDAY</h1>
    {weather && timezone ? (
 <p className='text-xsm'>{weather.time} {timezone}</p>
    ):(<p>loading...</p>)}
   
   </div>
   </div>
    <div className='bg-amber-900 w-120'></div>
   
   
  </div>
</div>


  )
}

export default App
