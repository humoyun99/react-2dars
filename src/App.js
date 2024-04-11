import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState('ahror')
  console.log(date)
  
  const handleClick=()=>{
   

  }
  return (
    <div className="App">
      <h1>my name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
