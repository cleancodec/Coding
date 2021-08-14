import { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  const [mealName, setMealName] = useState('');
  const [days, setDays] = useState(0);
  const [newMealName, setNewMealName] = useState('')
  const [mealsList, setMealsList] = useState([])

  useEffect(()=> {
    Axios.get("http://localhost:3001/read").then((responce) => {
      //console.log(responce);
      setMealsList(responce.data);
    })
  }, [])

  const addToList = () =>{
    //console.log(mealName + "   "+ days);
    Axios.post("http://localhost:3001/insert" , {mealName : mealName , days : days});
  };

  const updateMeal = (id)=> {
    Axios.put("http://localhost:3001/update", {id: id, newMealName: newMealName});
  };

  return (
    <div className="App">
      <h1>CURD APP</h1>
        <label>Meal Name :</label>
        <input type = "text" onChange = {(event) =>{setMealName(event.target.value);}}/>
        <label>Days since order :</label>
        <input type = "number" onChange = {(event) =>{setDays(event.target.value);}}/>
        <button onClick = {addToList}>Add</button>

        <h1>Meals List</h1>
        {mealsList.map((val, key)=> {
          return (
          <div key = {key}>
            {" "}
            <h1> {val.mealsName }</h1>
            <h1> {val.daysSinceIAte}</h1>
            <input 
              type="text" 
              placeholder = "New meal name..." 
              onChange = {(event) => {setNewMealName(event.target.value);
              }}  
              />
            <button onClick= {() => updateMeal(val._id)}>Update</button>
            <button>Delete</button>
            {" "}
          </div>
          );
        })}
    </div>
  );
}

export default App;
