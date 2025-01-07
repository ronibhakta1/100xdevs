import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'

//use hooks to fetch data
function App() {
  const [todos, setTodos] = useState([]); // this is the state of the todos

// wrong way to fetch data
// infinite loop will be created because the state is changing and the component is re-rendered and the state is 
//changing again and the component is re-rendered again and so on
  // fetch("http://localhost:3000/todos")
  // .then(async (res) => {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });
  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos >
    </div>
  )
}

export default App
