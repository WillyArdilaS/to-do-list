import { useState, useEffect } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";


function App() {
  const [tasks, setTasks] = useState([]);
  const [actualTask, setActualTask] = useState({});

  /* Delete Task */
  const deleteTask = (id) => {
    const taskUpdated = tasks.filter(actualTask => actualTask.id != id);

    setTasks(taskUpdated);
  }

  /* Save tasks in memory */
  useEffect(() => {
    const getLocalStorageTasks = () => {
      const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
      setTasks(localStorageTasks);
    }
    
    getLocalStorageTasks();    
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <div className="container mx-auto mt-16">
      <Header/>
      
      <main className="mt-12 md:flex justify-between">
        <Form tasks={tasks} setTasks={setTasks} actualTask={actualTask} setActualTask={setActualTask} />
        <ToDoList tasks={tasks} setActualTask={setActualTask} deleteTask={deleteTask}/>
      </main>
    </div>
  );
}

export default App