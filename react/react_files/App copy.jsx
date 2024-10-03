/* eslint-disable react/prop-types */
//hook 
import {useState} from 'react';

//state,component 
// let state = {
//   count : 0
// }

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustonButton count={count} setCount={setCount}></CustonButton>
      <CustonButton count={count +1 } setCount={setCount}></CustonButton>
      <CustonButton count={count - 1 } setCount={setCount}></CustonButton>
      <CustonButton count={count* 2} setCount={setCount}></CustonButton>
    </div>
  )
}
function CustonButton(props){

  function onClickHandeler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandeler}>
    Counter {props.count}
    </button>
}

export default App
