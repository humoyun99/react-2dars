import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setname]=useState('ahror')
  const [events,setEvents]=useState([
    {title:"khumoyun birthday party",id:1},
    {title:"doniyors live stream",id:2},
    {title:"match :mineUnitidy vs barselone",id:3}

  ])
  
  
  const handleClick=()=>{
    setname('humoyun')
   

  }
  const handleDelete=(id)=>{
    const filteredEvents=events.filter((even)=>{
      return even.id !==id
    })
  }
  return (
    <div className="App">
      <h1>my name is {name} </h1>
      <p>yana nimalrdir</p>
      <button onClick={handleClick}>Change name</button>
      {events.map((even)=>{
        return(
          <div key={even.id}>
            <h2>{even.title}</h2>
            <button onClick={()=>handleDelete(even.id)}>Delate</button>
          </div>)
      })
      }
    </div>
  );
}

export default App;
