import { useEffect, useState } from "react";
import CircularProgressBar from "./components/progressbar";
import Todolist from "./components/Todolist";
import NewtodoModal from "./components/newtodoModal";
import todoContext from "./components/todoContext";

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  let h = parseInt(hours, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12; // convert 0 -> 12
  return `${h}:${minutes} ${ampm}`;
}


function App() {
  const [weather, setWeather] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [modalcontrol, setmodalControl] = useState(false);
  const[newid,setnewid] = useState(2);

  const [todo, setTodos] = useState([
    
  ]);

  const [newtask, setnewtask] = useState(null);
  const [newTime, setnewTime] = useState(null);
  const [newDate , setnewDate] = useState(null)


  // const [newtasklist, setnewtasklist] = useState([])


    const addnewtasklist = () => {

      const newtodo = {
        id: newid , list: newtask , time: newTime || "00:00", status: true ,
    };

      setTodos([...todo , newtodo])
      setnewid(newid + 1);
    
    };


  useEffect(() => {
    const fetchweather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=15.98&longitude=120.57&current_weather=true&timezone=auto",
        );
        const data = await response.json();
        console.log(data);
        setWeather(data.current_weather);
        setTimezone(data.timezone);
        console.log(timezone);
      } catch (error) {
        console.log(error);
      }
    };

    fetchweather();
  },[]);

  function toggleStatus(id) {
    setTodos(
      todo.map((tod) =>
        tod.id === id ? { ...tod, status: !tod.status } : tod,
      ),
    );
  }

  const completed = todo.filter((t) => !t.status).length;
  const total = todo.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const closemodal = () => {
    setmodalControl(false);
  }
  const openmodal = () => {
    setmodalControl(true);
  };


  const deleteList = (id)=>{
     setTodos(todo.filter((todo)=> todo.id !== id))
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-900 w-full h-screen flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl  w-270 h-8/12 flex overflow-hidden">
        <div className="w-3/5 h-122">
          {/* // header for left container */}
          <div className="h-36 p-9 ">
            <p className=" text-gray-600 font-bold text-xs font-sans">TODAY</p>
            <h1 className="font-bold text-5xl text-gray-800 pb-3"> MYDAY</h1>
            {weather && timezone ? (
              <p className="text-xsm text-black/50 font-semibold">
                {weather.time} {timezone}
              </p>
            ) : (
              <p>loading...</p>
            )}
          </div>
          <todoContext.Provider value={deleteList}>
                <Todolist
          deleteList = {deleteList}
          formatTime = {formatTime}
          todo={todo} toggleStatus={toggleStatus} />
          </todoContext.Provider>
     

          <div className="w-full flex h-full justify-end p-4  ">
            <div>
              <button
                onClick={() => openmodal()}
                className="bg-purple-600 text-white font-bold  w-26 h-8 rounded-xl"
              >
                New task
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#a78bfa] to-[#3b82f6] w-120 flex flex-col p-10">
          <div>
            <p className=" text-white/60 text-m font-bold">OVERVIEW</p>
            <h1 className="text-white/90 text-4xl font-bold">Progress</h1>
          </div>
          <div className="flex items-center justify-center h-65">
            <CircularProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
      {setmodalControl && (
        <NewtodoModal
        setnewDate = {setnewDate}
        newDate={newDate}
        setnewTime={setnewTime}
        newTime = {newTime}
        setnewtask={setnewtask}
        newtask={newtask}
        addnewtasklist = {addnewtasklist}
        modalcontrol={modalcontrol} closemodal={closemodal} />
      )}
    </div>
  );
}

export default App;
