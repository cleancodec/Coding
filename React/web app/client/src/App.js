import { useState } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  const [mealName, setMealName] = useState('')
  const [days, setDays] = useState(0)

  const addToList = () =>{
    //console.log(mealName + "   "+ days);
    Axios.post("http://localhost:3001/insert" , {mealName : mealName , days : days});
  }

  return (
    <div className="App">
      <h1>CURD APP</h1>
        <label>Meal Name :</label>
        <input type = "text" onChange = {(event) =>{setMealName(event.target.value);}}/>
        <label>Days since order :</label>
        <input type = "number" onChange = {(event) =>{setDays(event.target.value);}}/>
        <button onClick = {addToList}>Add</button>
    </div>
  );
}

export default App;
