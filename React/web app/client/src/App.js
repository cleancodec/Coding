import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Axios from 'axios'
import './App.css';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

function App() {

  const [code, setCode] = useState('');
  const [mealName, setMealName] = useState('');
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [days, setDays] = useState(0);

  const [newMealName, setNewMealName] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newDiscount, setNewDiscount] = useState(0);
  const [newDay, setNewDay] = useState(0);

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
          alignContent:'center',
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
    console.log(mealName + "   "+ days);
    Axios.post("http://localhost:3001/insert" , {code : code , mealName : mealName ,price : price, discount : discount , days : days});
    window.location.reload(false);
  };

  const updateMeal = (id)=> {
    Axios.put("http://localhost:3001/update", {id: id, newMealName: newMealName, newPrice : newPrice, newDiscount : newDiscount, newDay : newDay});
    window.location.reload(false);
  };

  const deleteMeal = (id)=> {
    Axios.delete(`http://localhost:3001/delete/${id}` );
    window.location.reload(false);
  };

  return (
    <div className="App">
      <div><h3><lable className="title" >CURD Application</lable></h3></div><br></br>
      <Card>
        <CardHeader title = "Add items"/>
        <CardContent>
          <div>
            <label htmlFor="code ">Product Code </label>
            <input type = "text" placeholder="######" onChange = {(event) =>{setCode(event.target.value);}}/>
          </div>
          <div>
            <label htmlFor="mealname ">Meal Name </label>
            <input type = "text" placeholder="meal" onChange = {(event) =>{setMealName(event.target.value);}}/>
          </div>
          <div>
            <label htmlFor="price ">Price </label>
            <input type = "number" placeholder="$0.00" onChange = {(event) =>{setPrice(event.target.value);}}/>
          </div>
          <div>
            <label htmlFor="discount ">Discount </label>
            <input type = "number" placeholder="$0.00" onChange = {(event) =>{setDiscount(event.target.value);}}/>
          </div>
          <div>
            <label htmlFor="days ">Last Ordered</label>
            <input type = "number" placeholder="0 Days" onChange = {(event) =>{setDays(event.target.value);}}/>
          </div>
          <br/>
          <div align="center">  
            <AppButton  onPress = {addToList} title="Add to List" size="sm" backgroundColor="#000000" />;
          </div>
        </CardContent>
      </Card>
      <br/><br/>
      <div>
        <Card>
          <CardHeader title= "View Items"/>
            <CardContent>
            <table rules="all" >
                        <tr>
                            <th>Product Code</th>
                            <th>Meals Name</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Last Order</th>
                            <th>Updation</th>
                            <th>Last Order</th>
                        </tr>
                        {mealsList.map((val, key)=> {
                            return (
                              <tr key = {key}>
                                <td>{val.code}</td>
                                <td>
                                <input 
                                type="text" defaultValue={val.mealsName}
                                onChange = {(event) => {setNewMealName(event.target.value);
                                }}  />
                                </td>
                                <td><input 
                                type="text" defaultValue={val.price}
                                onChange = {(event) => {setNewPrice(event.target.value);
                                }}  
                                /></td>
                                <td><input 
                                type="text" defaultValue={val.discount}
                                onChange = {(event) => {setNewDiscount(event.target.value);
                                }}  
                                /></td>
                                <td><input  
                                type="text" defaultValue={val.days}
                                onChange = {(event) => {setNewDay(event.target.value);
                                }}
                                /></td>
                                <td><AppButton onPress = {() => updateMeal(val._id)} title="Update" size="sm" backgroundColor="#000000" /></td>
                                <td><AppButton onPress ={() => deleteMeal(val._id)} title="Delete" size="sm" backgroundColor="#000000" /></td>
                                
                              </tr>   
                            );
                            })}
            </table>
            </CardContent>
        </Card>
    </div>
    </div>
  );
}

export default App;
