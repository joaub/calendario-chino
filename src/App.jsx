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

  const animalEmojis = {
    Rata: "🐀",
    Buey: "🐂",
    Tigre: "🐅",
    Conejo: "🐇",
    Dragón: "🐉",
    Serpiente: "🐍",
    Caballo: "🐎",
    Cabra: "🐐",
    Mono: "🐒",
    Gallo: "🐓",
    Perro: "🐕",
    Cerdo: "🐖",
  };
  const elementoColors = {
    Madera: "text-green-600",
    Fuego: "text-red-600",
    Tierra: "text-yellow-600",
    Metal: "text-gray-600",
    Agua: "text-blue-600",
  };


  function getYearSexagenary(year) {
    const base = "1084"//inicio madera rata
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
      <div className='min-h-screen w-full bg-gradient-to-b from-gray-300 from-60% to-gray-400 to-40% text-black flex flex-col'>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 p-4">Ciclo Sexagenario - Calendario Chino</h1>

        <section className='p-4 max-w-2xl mx-auto text-center text-gray-800 space-y-3'>
          <p className='text-sm sm:text-base'>
            El calendario chino combina un ciclo de <strong>12 animales</strong> con
            <strong> 5 elementos </strong> (Madera, Fuego, Tierra, Metal y Agua),
            formando un ciclo completo de <strong>60 años</strong> conocido como el
            ciclo sexagenario.
          </p>
          <p className='text-sm sm:text-base'>
            Cada año no solo está regido por un animal, sino también por un elemento,
            lo cual influye en la personalidad y energía del período según la astrología
            tradicional china.
          </p>
        </section>

        <div className="max-w-md w-full mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4 px-4">
          <div className="flex flex-col sm:flex-row gap-2">
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
              className="px-4 py-2 bg-sky-600 rounded-md hover:bg-sky-700 transition cursor-pointer"
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
          <div className="max-w-md w-full mx-auto mt-6 p-4 bg-gray-50 border rounded-lg shadow-sm space-y-3 text-center">
            <p className="text-base sm:text-lg">
              <span className="font-semibold">{yearConfirmed}</span> →{" "}
              <span className={`font-bold ${elementoColors[confirmedResult.elemento]}`}>
                {confirmedResult.elemento} {confirmedResult.animal}
                <span className="text-2xl">{animalEmojis[confirmedResult.animal]}</span>
              </span>
            </p>

            <div className="text-sm sm:text-base space-y-1">
              <p>
                <strong>Elementos (orden):</strong> {elementos.join(", ")}
              </p>
              <p>
                <strong>Animales (orden):</strong> {animales.join(", ")}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center  mt-6 px-4">
            Introduce un año válido (número entero).
          </p>
        )}
      </div>
    </>
  )
}

export default App
