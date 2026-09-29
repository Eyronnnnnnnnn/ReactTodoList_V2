import { useEffect, useState } from 'react'
import CircularProgressBar from './components/progressbar';


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
  })


  return (
    
<div className="bg-gradient-to-r from-blue-500 to-purple-900 w-full h-screen flex items-center justify-center">
  <div className="bg-white rounded-3xl shadow-xl  w-270 h-8/12 flex overflow-hidden">
   <div className='w-3/5 h-122'>
   {/* // header for left container */}
   <div className='h-36 p-7'>
    <p className=' text-gray-600 font-bold text-xs font-sans'>TODAY</p>
    <h1 className='font-bold text-5xl text-gray-800 pb-3'> MYDAY</h1>
    {weather && timezone ? (
 <p className='text-xsm text-black/50 font-semibold'>{weather.time} {timezone}</p>
    ):(<p>loading...</p>)}
   
   </div>
   </div>
    <div className='bg-gradient-to-r from-[#a78bfa] to-[#3b82f6] w-120 flex flex-col p-10'>
      <div>
        <p className=' text-white/60 text-m font-bold'>OVERVIEW</p>
        <h1 className='text-white/90 text-4xl font-bold'>Progress</h1>
      </div>
      <div className='flex items-center justify-center h-65'>
          <CircularProgressBar/>
      </div>
      
    </div>
   
   
  </div>
</div>


  )
}

export default App
