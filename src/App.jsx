import React, { useState } from 'react'

import './App.css'

function App() {
  const [yearInput, setInputYear] = useState("1084");
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
    if (!Number.isInteger(parsed)) return null; // no es número entero
    if (parsed < 1084 || parsed > 4000) return null; // fuera de rango
    return parsed;
  };

  const confirmedResult =
    yearConfirmed !== null ? getYearSexagenary(yearConfirmed) : null;

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Calendario Chino</h1>
      <p className="text-center text-gray-700 mb-2">Bienvenido a la aplicación del Calendario Chino.</p>

      <p className="text-center text-gray-600 mb-6">Selecciona un año para ver su correspondiente animal y elemento.</p>

      <div className="max-w-md mx-auto bg-white p-3 rounded-2xl shadow-md space-y-3">
        <input type="number" value={yearInput} 
        onChange={(e) => setInputYear(e.target.value)}  
        placeholder="Ej: 2025" />

        <button onClick={() => {
          const parsed = parseYear(yearInput);
          if (parsed !== null || parsed) {
            setYearConfirmed(parsed);
          } else {
            setYearConfirmed(null);

          }
        }}>
          calcular
        </button>

        {yearConfirmed === null && yearInput !== "" && (
          <p >
            El año debe ser un número entre 1084 y 4000.
          </p>
        )}
      </div>

      {confirmedResult ? (
        <div>

          <p >
            <span >{yearConfirmed}</span> →{' '}
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
