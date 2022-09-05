import Task from "./Task";

const ToDoList = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
        <h2 className="font-black text-3xl text-center mb-8"> Tasks List </h2>

        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
    </div>
  )
}

export default ToDoList