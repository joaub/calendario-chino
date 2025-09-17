import React, { useState } from 'react'



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
    <div className='bg-gray-200 h-screen h-full text-black'>
      
      <h1 className="text-3xl font-bold text-center mb-4 p-3">Calendario Chino</h1>
      <p className="text-center mb-2">
        Bienvenido a la aplicación del Calendario Chino.
      </p>
      <p className="text-center mb-6">
        Selecciona un año para ver su correspondiente animal y elemento.
      </p>

      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
        <div className="flex gap-2">
          <input
            type="number"
            value={yearInput}
            onChange={(e) => setInputYear(e.target.value)}
            placeholder="Ej: 2025"
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-400"
          />

          <button
            onClick={() => {
              const parsed = parseYear(yearInput);
              if (parsed !== null) {
                setYearConfirmed(parsed);
              } else {
                setYearConfirmed(null);
              }
            }}
            className="px-4 py-2 bg-sky-600 rounded-md hover:bg-sky-700 transition"
          >
            Calcular
          </button>
        </div>

        {yearConfirmed === null && yearInput !== "" && (
          <p className="text-sm text-red-600">
            El año debe ser un número entre 1084 y 4000.
          </p>
        )}
      </div>

      {confirmedResult ? (
        <div className="max-w-md mx-auto mt-6 p-4 bg-gray-50 border rounded-lg shadow-sm space-y-3 text-center">
          <p className="text-lg">
            <span className="font-semibold">{yearConfirmed}</span> →{" "}
            <span className="font-bold">
              {confirmedResult.elemento} {confirmedResult.animal}
            </span>
          </p>

          <div className="text-sm  space-y-1">
            <p>
              <strong>Elementos (orden):</strong> {elementos.join(", ")}
            </p>
            <p>
              <strong>Animales (orden):</strong> {animales.join(", ")}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center  mt-6">
          Introduce un año válido (número entero).
        </p>
      )}
    </div>
    </>
  )
}

export default App
