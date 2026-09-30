import { useEffect, useState } from "react";
import CircularProgressBar from "./components/progressbar";
import Todolist from "./components/Todolist";

function App() {
  const [weather, setWeather] = useState(null);
  const [timezone, setTimezone] = useState(null);

  const [todo, setTodos] = useState([
    { id: 1, list: "Morning Workout", time: "9:40pm", status: true },
    { id: 2, list: "hi", time: "9:40pm", status: true },
    { id: 3, list: "blehhh", time: "9:40pm", status: true },
    { id: 4, list: "blehhh", time: "9:40pm", status: true },
    { id: 5, list: "blehhh", time: "9:40pm", status: false },
  ]);
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
  }, []);

  function toggleStatus(id) {
    setTodos(
      todo.map((tod) =>
        tod.id === id ? { ...tod, status: !tod.status } : tod,
      ),
    );
  }

  const completed = todo.filter((t) => !t.status).length;
  const total = todo.length;
  const percentage = Math.round((completed / total) * 100);

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
          <Todolist todo={todo} toggleStatus={toggleStatus} />

          <div className="w-full flex h-full justify-end p-4  ">
            <div>
              <button className="bg-purple-600 text-white font-bold  w-26 h-8 rounded-xl">
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
    </div>
  );
}

export default App;
