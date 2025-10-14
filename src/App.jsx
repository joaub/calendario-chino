import React, { useState } from 'react'



function App() {
  const [yearInput, setInputYear] = useState("1564");
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
  const descripcionesAnimales = {
    Rata: "Inteligente y adaptable, símbolo de ingenio y prosperidad.",
    Buey: "Paciente, fuerte y confiable, representa la disciplina y el esfuerzo constante.",
    Tigre: "Valiente, apasionado y protector, líder nato que inspira respeto.",
    Conejo: "Amable, diplomático y sensible, amante de la paz y la armonía.",
    Dragón: "Poderoso, carismático y creativo, emblema de éxito y buena fortuna.",
    Serpiente: "Sabia, intuitiva y elegante, con gran capacidad de análisis.",
    Caballo: "Libre, alegre y energético, amante de la aventura y la independencia.",
    Cabra: "Artística, empática y tranquila, busca la belleza y la estabilidad emocional.",
    Mono: "Ingenioso, curioso y divertido, símbolo de inteligencia y picardía.",
    Gallo: "Organizado, valiente y observador, con gran sentido del deber y del detalle.",
    Perro: "Leal, protector y justo, siempre busca la verdad y la fidelidad.",
    Cerdo: "Generoso, honesto y amable, disfruta de la vida con serenidad y gratitud.",
  };

  const descripcionesElementos = {
    Madera: "representa el crecimiento, la creatividad y la expansión.",
    Fuego: "simboliza la pasión, la energía y la transformación.",
    Tierra: "aporta estabilidad, paciencia y equilibrio.",
    Metal: "refleja la justicia, la disciplina y la fortaleza interior.",
    Agua: "encarna la sabiduría, la intuición y la adaptabilidad.",
  };
  // Compatibilidades clásicas del zodiaco chino
  const compatibilidad = {
    Rata: ["Dragón 🐉", "Mono 🐒", "Buey 🐂"],
    Buey: ["Rata 🐀", "Serpiente 🐍", "Gallo 🐓"],
    Tigre: ["Caballo 🐎", "Perro 🐕", "Cerdo 🐖"],
    Conejo: ["Oveja 🐐", "Cerdo 🐖", "Perro 🐕"],
    Dragón: ["Rata 🐀", "Mono 🐒", "Gallo 🐓"],
    Serpiente: ["Buey 🐂", "Gallo 🐓", "Mono 🐒"],
    Caballo: ["Tigre 🐅", "Perro 🐕", "Cabra 🐐"],
    Cabra: ["Conejo 🐇", "Cerdo 🐖", "Caballo 🐎"],
    Mono: ["Rata 🐀", "Dragón 🐉", "Serpiente 🐍"],
    Gallo: ["Buey 🐂", "Dragón 🐉", "Serpiente 🐍"],
    Perro: ["Tigre 🐅", "Conejo 🐇", "Caballo 🐎"],
    Cerdo: ["Conejo 🐇", "Cabra 🐐", "Tigre 🐅"],
  };

  

  function getYearSexagenary(year) {
    const base = "1564"//inicio madera rata
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
    if (parsed < 1564 || parsed > 4000) return null; // fuera de rango
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
              El año debe ser un número entre 1564 y 4000.
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
            <p className="text-gray-700 italic">
              {descripcionesAnimales[confirmedResult.animal]} Este signo bajo el
              elemento <strong>{confirmedResult.elemento}</strong> {descripcionesElementos[confirmedResult.elemento]}
            </p>
            

            <div className="mt-4 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">compatibilidad del signo</h3>
              <p className="text-sm sm:text-base">
                Los signos más compatibles con el <strong>{confirmedResult.animal} {animalEmojis[confirmedResult.animal]}</strong> son:{" "}
                <span className="font-semibold">
                  {compatibilidad[confirmedResult.animal].join(", ")}
                </span>
              </p>
            </div>

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
