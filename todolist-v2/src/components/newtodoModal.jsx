export default function NewtodoModal({modalcontrol,closemodal,addnewtasklist,newtask,setnewtask,newDate,newTime,setnewDate,setnewTime}) {
  if(!modalcontrol) return null



  return (

    <div className=" bg-black/20 fixed inset-0 flex items-center justify-center  ">
      <div className="bg-white rounded-2xl shadow-2xl w-4/12 h-140 p-10 ">
        <div className=" w-full h-21 flex ">
          <div className="w-90 h-full text-start flex items-start gap-3">
            <div>
              <button
                type="button"
                aria-label="Add new task"
                className="flex h-12 w-12 items-center justify-center
             rounded-xl bg-violet-100 text-violet-600
             transition-colors hover:bg-violet-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div>
              <h1 className="font-bold text-2xl">Add new Task</h1>
              <p className="text-gray-400 text-sm">
                Make room for what matters today
              </p>
            </div>
          </div>

          <div className=" w-33 h-full flex justify-end ">
            <div>
              <button
                type="button"
                onClick={()=>closemodal()}
                aria-label="Close modal"
                className="flex h-8 w-8 items-center justify-center
             rounded-lg text-slate-500 transition-colors
             hover:bg-slate-100 hover:text-slate-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            
          </div>
         
        </div>
         <div className="w-full h-20"><h1>Task name</h1>
         <input
         value={newtask}
         onChange={(event)=>setnewtask(event.target.value)}
         className=" w-full h-10 border-2 rounded-sm pl-4 text-sm border-gray-400/60" placeholder="What do you need to do? "></input>
         </div>
         <div className="w-full h-40"><h1>Description <span className="text-gray-400">(Optional)</span></h1>
         <input className=" w-full h-30 border-2 rounded-sm pl-4 text-sm border-gray-400/60" placeholder="What do you need to do? "></input>
         </div>
         <div className="w-full h-20">
            
           <div className="flex">
             <div>
            <h1>Due Date</h1>
          <input
          value = {newDate}
          onChange={(event)=> newDate(event.target.value)}
          className=" w-60 h-10 border-2 rounded-sm pl-4 text-sm border-gray-400/60"
          placeholder="What do you need to do? "
          type="date"
          >
            
          </input>
         </div>
          <div>
            <h1>Time</h1>
          <input
          value = {newTime}
          onChange={(event)=> setnewTime(event.target.value)}
          className=" w-60 h-10 border-2 rounded-sm pl-4 text-sm border-gray-400/60"
          placeholder="What do you need to do? "
          type="time"
          >
            
          </input>
         </div>
           </div>
        
         <div className=" w-full h-15 flex justify-end gap-4 items-end mt-5">
            <div>
                <button className="bg-violet-400 w-30 h-10 rounded-lg">Cancel</button>
            </div>
              <div>
                 <button 
                 onClick={()=> addnewtasklist()}
                 className="bg-violet-400 w-30 h-10 rounded-lg">Create Task</button>
            </div>
         </div>
         </div>
      </div>
    </div>
  );
}
