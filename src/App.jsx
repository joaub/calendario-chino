import React, { useState } from 'react'


function App() {
  const [yearInput, setInputYear] = useState("1564");
  const [yearConfirmed, setYearConfirmed] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("")

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
    const nextAnimalYear = year + 12;
    const nextElementYear = year + 10;

    return {
      animal: animales[cicloAnimal],
      elemento: elementos[cicloElemento]
      , nextAnimalYear, nextElementYear
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
      <div className={`min-h-screen w-full flex flex-col transition-colors duration-500 ${darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-gray-300 to-gray-400 text-black"
        }`}
      >
        {/* Header */}
      <header className="flex justify-between items-center p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Ciclo Sexagenario - Calendario Chino
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-4 right-4 px-3 py-1 rounded-md text-sm font-semibold transition ${darkMode
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </header>

        <section className={`p-4 max-w-2xl mx-auto text-center text-gray-800 space-y-3 ${darkMode ? "text-white" : "text-black"}`}>
          <p className='text-sm sm:text-base'>
            El calendario chino combina un ciclo de <strong>12 animales</strong> con
            <strong> 5 elementos </strong> (Madera, Fuego, Tierra, Metal y Agua),
            formando un ciclo completo de <strong>60 años</strong> conocido como el
            ciclo sexagenario.
          </p>
          <p className='text-sm sm:text-base'>
            Cada año está regido por un animal y un elemento, influyendo en la personalidad
            y energía del período según la astrología tradicional china.
          </p>
        </section>

        <div className={`max-w-md w-full mx-auto mt-6 p-6 rounded-2xl shadow-xl space-y-4 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}>
            <h2 className="text-lg font-semibold text-center mb-2">Descubrí tu signo</h2>
         
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 border rounded-md text-center ${darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 border-gray-300"
              }`}
          />
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="number"
              value={yearInput}
              onChange={(e) => setInputYear(e.target.value)}
              placeholder="Ej: 2025"
              className={`flex-1 p-2 border rounded-md 
                focus:outline-none focus:ring focus:ring-sky-400 
                ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 border-gray-300"}`}
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
          <div className={`max-w-md w-full mx-auto mt-6 p-4 bg-gray-50 border rounded-lg shadow-sm space-y-3 text-center ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-black"}`}>
            <p className="text-base sm:text-lg">
              {name && <strong>{name}, </strong>}
              naciste en el año{" "}
              
              <span className="font-semibold">{yearConfirmed}</span> →{" "}
              <span className={`font-bold ${elementoColors[confirmedResult.elemento]}`}>
                {confirmedResult.elemento} {confirmedResult.animal}
                <span className="text-2xl">{animalEmojis[confirmedResult.animal]}</span>
              </span>
            </p>
            <p className=" italic">
              {descripcionesAnimales[confirmedResult.animal]} Este signo bajo el
              elemento <strong>{confirmedResult.elemento}</strong> {descripcionesElementos[confirmedResult.elemento]}
            </p>
            <p>
              🔮 El próximo año del {confirmedResult.animal} será <strong>{confirmedResult.nextAnimalYear}</strong>.
            </p>
            <p>
              🔮 El próximo año del elemento {confirmedResult.elemento} será <strong>{confirmedResult.nextElementYear}</strong>.
            </p>

            <div className={`mt-4  rounded-lg p-3 shadow-sm border border-gray-200 ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"}`}>
              <h3 className="font-semibold text-lg mb-2">compatibilidad del signo</h3>
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
        <footer className="text-center mt-12 pb-4 text-xs opacity-60">
        © 2025 Calculadora del Zodiaco Chino
      </footer>
      </div>
    </>
  )
}

export default App
