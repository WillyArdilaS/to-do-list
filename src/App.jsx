import Form from "./Components/Form"
import Header from "./Components/Header"
import ToDoList from "./Components/ToDoList"

function App() {
  return (
    <div className="container mx-auto">
      <Header/>
      <Form/>
      <ToDoList/>
    </div>
  )
}

export default App