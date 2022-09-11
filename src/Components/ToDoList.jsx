import Task from "./Task";

const ToDoList = ({tasks, setActualTask}) => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">

      {tasks && tasks.length ? (<>
          <h2 className="font-black text-3xl text-center mb-8"> Task List </h2>
          
          {tasks.map((task) => {
            return(
              <Task key={task.id} task={task} setActualTask={setActualTask}/>
            )
          })}
        </>) : <h2 className="font-black text-3xl text-center mb-8"> There is no any task </h2>
      }
        
    </div>
  )
}

export default ToDoList