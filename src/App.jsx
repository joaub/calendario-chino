import React, { useState } from 'react'

import './App.css'

function App() {
  const [yearInput, setInputYear] = useState("1984");
  const [yearConfirmed, setYearConfirmed] = useState(null);

  const elementos = ["Madera", "Fuego", "Tierra", "Metal", "Agua"]

  const animales = [
    "Rata",
    "Buey",
    "Tigre",
    "Conejo",
    "Dragón",
    "Serpiente",
    "Caballo",
    "Cabra",
    "Mono",
    "Gallo",
    "Perro",
    "Cerdo"]


  function getYearSexagenary(year) {
    const base = "1984"//inicio madera rata
    let cicloAnimal = (year - base) % 12;
    let cicloElemento = Math.floor((year - base) % 10 / 2);
    return {
      animal: animales[cicloAnimal],
      elemento: elementos[cicloElemento]
    }
  }

  // Validar input numérico
  const parseYear = (value) => {
    const parsed = Number(value);
    return Number.isInteger(parsed) ? parsed : null;
  };

  const year = parseYear(yearInput);
  const confirmedResult =
    yearConfirmed !== null ? getYearSexagenary(yearConfirmed) : null;

  return (
    <>
      <h1>Calendario Chino</h1>
      <p>Bienvenido a la aplicación del Calendario Chino.</p>

      <p>Selecciona un año para ver su correspondiente animal y elemento.</p>

      <div>
        <input value={yearInput} onChange={(e) => setInputYear(e.target.value)} inputMode="numeric" placeholder="Ej: 2025" />

        <button onClick={() => {
            const parsed = parseYear(yearInput);
            if (parsed !== null) {
              setYearConfirmed(parsed);
            } else {
              setYearConfirmed(null);
            }
          }}>
          calcular
        </button>
      </div>

      {confirmedResult ? (
        <div>

          <p >
            <span >{year}</span> →{' '}
            <span >{confirmedResult.elemento} {confirmedResult.animal}</span>
          </p>
          
          <div >
            <p ><strong>Elementos (orden):</strong> {elementos.join(', ')}</p>
            <p><strong>Animales (orden):</strong> {animales.join(', ')}</p>
          </div>
        </div>
      ) : (
        <p>Introduce un año válido (número entero).</p>
      )}
    </>
  )
}

export default App
