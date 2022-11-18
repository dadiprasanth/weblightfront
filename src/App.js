
import './App.css';
import{useEffect, useState} from "react"
function App() {
  const[data,setdata]=useState("")
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products" 
    ).then(x=>x.json()).then(y=>setdata(y))
    },[])

  console.log(data)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
