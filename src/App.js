
import './App.css';
import{useEffect, useState} from "react"
import Cardcontainer from './components/Cardcontainer';
import CartContainer from './components/Cartcomponents/CartContainer';
function App() {
  const[data,setdata]=useState([])
  const[cart,setCart]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products" 
    ).then(x=>x.json()).then(y=>setdata(y))
    },[])

  console.log(cart)

  return (
    <div className="App">
      
      <Cardcontainer data={data} setCart={setCart} cart={cart}/>
      <CartContainer data={cart}/>
    </div>
  );
}

export default App;
