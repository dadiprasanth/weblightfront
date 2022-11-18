
import './App.css';
import{useEffect, useState} from "react"
import Card from './components/card';
function App() {
  const[data,setdata]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products" 
    ).then(x=>x.json()).then(y=>setdata(y))
    },[])

  console.log(data)

  return (
    <div className="App">
      <div className='container'>
        {data.map(x=>{
          return(<Card data={x}/>)
        })}
      </div>
      
    </div>
  );
}

export default App;
