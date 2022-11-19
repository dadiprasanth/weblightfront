
import './App.css';
import{useEffect, useState} from "react"
import Cardcontainer from './components/Cardcontainer';
function App() {
  const[data,setdata]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products" 
    ).then(x=>x.json()).then(y=>setdata(y))
    },[])

  console.log(data)

  return (
    <div className="App">
      
      <Cardcontainer data={data}/>
    </div>
  );
}

export default App;
