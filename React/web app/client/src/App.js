import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Axios from 'axios'
import './App.css';

function App() {

  const [mealName, setMealName] = useState('');
  const [days, setDays] = useState(0);
  const [newMealName, setNewMealName] = useState('')
  const [mealsList, setMealsList] = useState([])

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16
    },
    appButtonContainer: {
      width: 200,
      height: 30,
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "regular",
      alignSelf: "center",
      textTransform: "uppercase"
    }
    
  });

  const AppButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        size === "sm" && {
          paddingHorizontal: 8,
          paddingVertical: 6,
          elevation: 6
        },
        backgroundColor && { backgroundColor }
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

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

  const deleteMeal = (id)=> {
    Axios.delete(`http://localhost:3001/delete/${id}` );
  };

  return (
    <div className="App">
      <h1>CURD APP</h1>
        <label>Meal Name :</label>
        <input type = "text" onChange = {(event) =>{setMealName(event.target.value);}}/>
        <label>Days since order :</label>
        <input type = "number" onChange = {(event) =>{setDays(event.target.value);}}/>
        <AppButton onPress = {addToList} title="Add to List" size="sm" backgroundColor="#000000" />;

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
            <AppButton onPress = {() => updateMeal(val._id)} title="Update" size="sm" backgroundColor="#000000" />;
            <AppButton onPress ={() => deleteMeal(val._id)} title="Delete" size="sm" backgroundColor="#000000" />;
            {" "}
          </div>
          );
        })}
    </div>
  );
}

export default App;
