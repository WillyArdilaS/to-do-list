import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";


function App() {
  const [tasks, setTasks] = useState([]);
  const [actualTask, setActualTask] = useState({});

  const deleteTask = (id) => {
    const taskUpdated = tasks.filter(actualTask => actualTask.id != id);

    setTasks(taskUpdated);
  }

  return (
    <div className="container mx-auto mt-16">
      <Header/>
      
      <main className="mt-12 md:flex">
        <Form tasks={tasks} setTasks={setTasks} actualTask={actualTask} setActualTask={setActualTask} />
        <ToDoList tasks={tasks} setActualTask={setActualTask} deleteTask={deleteTask}/>
      </main>
    </div>
  );
}

export default App