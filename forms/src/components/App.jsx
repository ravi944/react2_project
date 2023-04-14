import React, {useState} from "react";

function App() {
 const [name,setName] = useState("");
 var newName="";
 function handleChange(event){
   console.log(event.target.value);
   newName=event.target.value;
 }
 function handleClick(){
  setName(newName)
 }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
