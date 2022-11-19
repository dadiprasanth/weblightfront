
import './App.css';
import{useEffect, useState} from "react"
import Cardcontainer from './components/CardComponents/Cardcontainer';
import CartContainer from './components/Cartcomponents/CartContainer';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  const[data,setdata]=useState([])
  const[cart,setCart]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products" 
    ).then(x=>x.json()).then(y=>setdata(y))
    },[])

  console.log(cart)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cardcontainer data={data} setCart={setCart} cart={cart}/>}/>
      <Route path="/mycart" element={<CartContainer data={cart}/>}/>
    </Routes>
    </BrowserRouter>
      
      
      
    
  );
}

export default App;
