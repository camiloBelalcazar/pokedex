import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtecterRoutes from './components/auth/ProtecterRoutes'
import { useState } from "react";
import Ligthmode from "./components/botton/ligthmode";

function App() {
  const [styleBackGround, setStyleBackGround] = useState(false);
  const [value, setValue] = useState(false);

  function handleAction() {
    setStyleBackGround(!styleBackGround);
    setValue(!value);
  }
  
  return (
    <section className={
      styleBackGround + " " + 'font-["Inter"] min-h-screen text-black'}
      >
        <Ligthmode switchStyle={handleAction} value={value}
        ></Ligthmode>
        
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route element={<ProtecterRoutes/>}>

          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:pokemonName' element={<PokemonId />} />

        </Route>

      </Routes>
    </section>
  )
}

export default App
