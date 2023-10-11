import React from 'react'
import Image from "./restaurant.jpg";
import Items from './components/Items/items';
import Navbar from './components/Navbar/navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => {
  return (
<>
<Navbar/>
<img className = "image" src={Image} alt=" image"/>
<Items/>
    <button>Add to cart</button>
</>
  )
}

export default App;