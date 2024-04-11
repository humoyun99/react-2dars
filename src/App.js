import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './componut/Title';

function App() {
  const [name,setname]=useState('ahror')
  const [events,setEvents]=useState([
    {title:"khumoyun birthday party",id:1},
    {title:"doniyors live stream",id:2},
    {title:"match :mineUnitidy vs barselone",id:3}

  ])
  const [showContent,setShowContent]=useState(true)
  
  
  const handleClick=()=>{
    setname('humoyun')
   

  }
  const handleDelete=(id)=>{
    const filteredEvents=events.filter((even)=>{
      return even.id !==id
    })
    setEvents(filteredEvents)
  }



  return (
    
    <div className="App">
      <Title/>
      <h1>my name is {name} </h1>
      <p>yana nimalrdir</p>
      <button onClick={handleClick}>Change name</button>
      <br></br>
      <hr></hr>
      {showContent && <button onClick={()=>setShowContent(false)}>Hide conent</button>}
      {!showContent && <button onClick={()=>setShowContent(true)}>show conent</button>}
      {showContent && <div>
        {events.length===0 && <h3>not comit yeet</h3>}
        {events.map((even)=>{
        return(
          <div key={even.id}>
            <h2>{even.title}</h2>
            <button onClick={()=>handleDelete(even.id)}>Delate</button>
          </div>)
      })}
        </div>
      }
    </div>
  );
}

export default App;
