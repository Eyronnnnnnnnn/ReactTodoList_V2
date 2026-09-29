export default function Todolist({ todo }) {
  return (
    <div className=" w-full h-full overflow-hidden p-9 flex ">
      {todo.map((t,index) => (
        <div key={t.id} className="mb-2">
<div className="flex justify-between items-center py-2">
             
            
                <span>{t.list}</span>
            </div>
           {index < todo.length - 1 && (
            <div className="h-px bg-gray-400/40 w-full"></div>
          )}
        </div>
      ))}
    </div>
  );
}
