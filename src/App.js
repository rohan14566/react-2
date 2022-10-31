import './index.css';
import React, { useState } from "react";

function App() {
const [name,setName]=useState("");
const [department,setDepartment]=useState("");
const [rating,setRating]=useState("");
const [list,setList]=useState([])

const onSubmits=(event)=>{
  event.preventDefault();
const data={name,department,rating,}
setList((ls)=>[...ls,data])
};
  const inputEvent=(event)=>{
    setName(event.target.value)
  }
  const inputEventTwo=(event)=>{
    setDepartment(event.target.value)
  }
  const inputEventThree=(event)=>{
    setRating(event.target.value)
  }
  return (
   <div className='main'>
    <div className='center'>
      <h2>EMPLOYEE FEEDBACK FORM</h2>
      <form onSubmit={onSubmits}>
       <label> Name</label>: <input type="text" placeholder='Enter your Name' onChange={inputEvent} value={name}/><br/><br/>
       <label>Department</label>: <input type="text" placeholder='Enter your Department' onChange={inputEventTwo} value={department}/><br/><br/>
       <label>Rating</label>: <input type="number" placeholder='Rating'  onChange={inputEventThree} value={rating}/><br/><br/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div><br/><br/><hr/>
 { 
    list.map((a)=><div className='display'>
      
    <span>name: {a.name} </span>|
    <span>department: {a.department}</span> |
   <span> rating: {a.rating}</span>
    </div>
    )}
   
   </div>
  );
}
export default App;
