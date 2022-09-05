import Form from "./Components/Form";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";


function App() {
  return (
    <div className="container mx-auto mt-16">
      <Header/>
      <main className="mt-12 md:flex">
        <Form/>
        <ToDoList/>
      </main>
    </div>
  );
}

export default App