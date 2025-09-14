import React from 'react'
import { ciclo} from "./ciclo.js"
import './App.css'

function App() {
  

  return (
    <>
      <h1>Calendario Chino</h1>
      <p>Bienvenido a la aplicación del Calendario Chino.</p>

      <p>Selecciona un año para ver su correspondiente animal y elemento.</p>
      
      <input type="number" placeholder="Ingresa un año"  />
      
      <button onClick={ciclo()}>Calcular</button>

      
    </>
  )
}

export default App
