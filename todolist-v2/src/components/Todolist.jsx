import todoContext from "./todoContext";
import {  useContext } from "react";
export default function Todolist({ todo ,formatTime} ) {


  const {deleteList , toggleStatus} = useContext(todoContext)
   
  
    if(!todo  || todo.length === 0 ){
  return (
      <div className="p-9 h-70  text-4xl text-gray-500 text-center">
       NO TASK
      </div>
    );
    }
    return (
  
    <div className="  w-full h-70 overflow-y-scroll scrollbar-hide p-9 flex flex-col ">
      {todo.map(({ id, list, time ,status}) => (
        <div key={id} className="mb-2">
          <div className="h-px bg-gray-400/40 w-full"></div>
          <div className=" flex  items-center py-2">
            <div className="  pr-3">
              <div
              onClick={()=> toggleStatus(id)}
              className={`w-6 h-6 rounded-full flex items-center justify-center 
                ${!status ? "  bg-purple-700  " : "border border-gray-400"}`}
            >
              {status && ( 
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          
            

            </div>
             
            <div className="">
                {status ?   <span className="font-bold">{list}</span>
                :   <span className="font-bold text-gray-600/80 line-through">{list}</span>    
            }
             
              <div>
                
                <span className="text-gray-600/80">{formatTime(time)}</span>

              </div>
             
            </div>
              <div className="w-full flex justify-end">
                <div className=" w-10">
                    <button
                    onClick = {()=> deleteList(id)}
                    >
                      <img className="w-9" src="https://cdn-icons-png.flaticon.com/512/18461/18461204.png"></img>
                    </button>
                   </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}
