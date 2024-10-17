/* eslint-disable react/prop-types */
//hook 
import { useState } from 'react';
// TO do  application
// todo 
// {
//  todos:[{titel:"todo1", descripstion:"first todo",completed:false}]
//  }

// notificaion reredering component logic
function notificaionComponent(props){
  //99+,98,97,.....
  //100,1000,10000
  //component should not re-render if the value is greater than 99
  return <div>
    {props.notificaionComponent > 99 ? "99+" : props.notificaionComponent}
  </div>
}

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: " go to gym 7-8",
    completedq: false
  },
  {
    title: "going to gym",
    description: " go to gym 3-5",
    completed: true
  }]);

  function addTodo(){
    // [1,2]
    // [...todos,3] => [1,2,3]
    setTodos([...todos,{
      title:"new todo",
      description:"new description",
      completed:false
    }])
  }
  return (
    // <div>
    //   <Todo title={todos[0].title} description={todos[0].description} />
    //   <Todo title={todos[1].title} description={todos[1].description} />
    //   {/* {JSON.stringify(todos)} */}
    // </div>
    <div>
      <button style={{border:10,
      padding:50,
      color:"yellowgreen",
      borderColor:"black"
      }} onClick={addTodo}>Add Todo</button>
    <h1>map lets you ittrate all array of todos </h1>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}
      <h6>this a child div which gets re-rendered every time the button is clicked and not the array state </h6>
      <DummyButton ></DummyButton> 
    </div>
  )
}
function DummyButton(){
  return(
    <button>dummy button</button>)
  }

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default App
