import React, { useState, useRef, useEffect } from 'react'
import {
  ELEMENTOS, DESCRIPCIONES_ELEMENTOS,
  ELEMENTO_COLORS, ELEMENTO_BORDERS,
  ELEMENTO_BACKGROUNDS, ANIMALES,
  ANIMAL_EMOJIS, DESCRIPCIONES_ANIMALES,
  SIGN_DESCRIPTIONS, COMPATIBILIDAD
} from './descripciones.js';

function useDarkMode(defaultValue = false) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return [darkMode, setDarkMode];
}

function App() {
  const [yearInput, setInputYear] = useState("");
  const [yearConfirmed, setYearConfirmed] = useState(null);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [name, setName] = useState("")
  const [dateInput, setDateInput] = useState("")
  const resultRef = useRef(null);


  function getYearSexagenary(year) {
    const base = 1564;//inicio madera rata
    let cicloAnimal = (year - base) % 12;
    let cicloElemento = Math.floor((year - base) % 10 / 2);
    const nextAnimalYear = year + 12;
    const nextElementYear = year + 10;

    return {
      animal: ANIMALES[cicloAnimal],
      elemento: ELEMENTOS[cicloElemento]
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

  const descripcionCompleta =
    confirmedResult
      ? SIGN_DESCRIPTIONS[confirmedResult.animal]?.[confirmedResult.elemento]
      : "";


  return (
    <>
      <div ref={resultRef} className={`min-h-screen w-full relative bg-cover bg-center transition-all duration-500 ${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
        }`}
        style={{
          backgroundImage: confirmedResult
            ? ELEMENTO_BACKGROUNDS[confirmedResult.elemento]
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div
          className={`absolute inset-0 ${darkMode ? "bg-black/60" : "bg-white/40"
            } backdrop-blur-sm`}
        ></div>


        <div className="relative z-10 flex flex-col items-center p-4">



          <h1 className="text-2xl sm:text-3xl font-bold text-center p-3">
            Ciclo Sexagenario Chino
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`absolute top-2 right-4 px-3 py-1 rounded-md text-sm font-semibold bg-gray-200 hover:bg-gray-300 transition ${darkMode
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
          {!confirmedResult && (
            <div>
              <section className={`max-w-2xl text-center p-6 mb-4 rounded-xl shadow-md ${darkMode
                ? "bg-gray-800/70 text-gray-100"
                : "bg-white/70 text-gray-900"
                }`}>
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

            </div>
          )}

          <div className={`max-w-md w-full mx-auto mt-6 p-4 rounded-2xl shadow-xl space-y-4 ${darkMode ? "bg-gray-800/80" : "bg-white/80"
            }`}>
            <h2 className="text-lg font-semibold text-center mb-2">¿Qué animal sos en el zodiaco chino? Descubrí tu signo</h2>

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
            <div className="flex flex-col gap-2">
              <label className="text-sm ">Seleccioná una fecha (con eso se obtiene el año):</label>
              <input
                type="date"
                value={dateInput}
                onChange={(e) => {
                  setDateInput(e.target.value);
                  if (e.target.value) {
                    const y = new Date(e.target.value).getFullYear();
                    setInputYear(y.toString());
                  }
                }}
                className={`w-full p-2 rounded-md mb-3 ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
              />

              <button
                onClick={() => {
                  const parsed = parseYear(yearInput);
                  if (parsed !== null) {
                    setYearConfirmed(parsed);
                    setTimeout(() => {
                      resultRef.current?.scrollIntoView({ behavior: "smooth" });
                    }, 200);
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
                ❌ Ups, el año debe estar entre 1564 y 4000. ¡Probá de nuevo!
              </p>
            )}
          </div>

          {confirmedResult ? (
            <div
              className={`max-w-md w-full mx-auto mt-6 p-4 rounded-xl shadow-lg space-y-3 text-center 
                ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} 
                ${confirmedResult.elemento && ELEMENTO_BORDERS[confirmedResult.elemento]} 
                          border-4`}
              style={{
                boxShadow: darkMode
                  ? "0 0 15px 3px rgba(255,255,255,0.2)"
                  : "0 0 15px 3px rgba(0,0,0,0.1)",
              }}
            >
              <p className="text-base sm:text-lg">
                {name && <strong>{name}, </strong>}
                naciste en el año{" "}

                <span className="font-semibold">{yearConfirmed}</span> →{" "}
                <span className={`font-bold ${ELEMENTO_COLORS[confirmedResult.elemento]}`}>
                  {confirmedResult.elemento} {confirmedResult.animal}
                  <span className="text-2xl">{ANIMAL_EMOJIS[confirmedResult.animal]}</span>
                </span>
              </p>
              {descripcionCompleta && (
                <p className="mt-2"> {confirmedResult.animal} de {confirmedResult.elemento} es {descripcionCompleta}</p>
              )}
              <p className=" italic">{confirmedResult.animal}{" "}
                {DESCRIPCIONES_ANIMALES[confirmedResult.animal]} Este signo bajo el
                elemento <strong>{confirmedResult.elemento}</strong> {DESCRIPCIONES_ELEMENTOS[confirmedResult.elemento]}
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
                  Los signos más compatibles con el <strong>{confirmedResult.animal} {ANIMAL_EMOJIS[confirmedResult.animal]}</strong> son:{" "}
                  <span className="font-semibold">
                    {COMPATIBILIDAD[confirmedResult.animal].join(", ")}
                  </span>
                </p>
              </div>


              {/* 🔁 Botón Reiniciar */}
              <button
                onClick={() => {
                  setYearConfirmed(null);
                  setInputYear("");
                  setName("");
                }}
                className={`mt-5 px-4 py-2 rounded-md font-semibold transition 
                    ${darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-100"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
              >
                🔁 Reiniciar
              </button>
              {/* 🎉 Botón para compartir */}
              <button
                onClick={() => {
                  const shareText = `${name || "Descubrí"} su signo del Zodiaco Chino 🐉:
                  ${confirmedResult.elemento} ${confirmedResult.animal} ${ANIMAL_EMOJIS[confirmedResult.animal]}.
                    Año: ${yearConfirmed}.
                    ¡Mirá cuál es el tuyo! 🔮`;

                  if (navigator.share) {
                    navigator.share({
                      title: "Zodiaco Chino 2025",
                      text: shareText,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(shareText);
                    alert("📋 Tu signo fue copiado al portapapeles. ¡Pegalo y compartilo!");
                  }
                }}
                className={`mt-3 px-4 py-2 rounded-md font-semibold transition
                  ${darkMode
                    ? "bg-sky-700 hover:bg-sky-600 text-gray-100"
                    : "bg-sky-500 hover:bg-sky-600 text-white"
                  }`}
              >
                🎉 Compartir mi signo
              </button>
              <p className='text-sm sm:text-base'>“💡 Consejo: si no podés compartir, el texto se copia automáticamente”.</p>

            </div>
          ) : (
            <p className="text-center  mt-6 px-4">
              Introduce un año válido (número entero).
            </p>
          )}
          {/* Panel de ejemplo / galería */}
          <aside className={`p-4 rounded-2xl shadow-lg ${darkMode ? "bg-gray-800/60" : "bg-white/80"}`}>
            <h3 className="font-semibold mb-2">Explorá los signos</h3>
            <div className="grid grid-cols-3 gap-3">
              {ANIMALES.map((a) => (
                <div key={a} className="p-4 rounded-lg text-center border">
                  <div className="text-2xl">{ANIMAL_EMOJIS[a]}</div>
                  <div className="text-sm font-semibold">{a}</div>
                </div>
              ))}
            </div>
          </aside>

          <footer className="text-center mt-12 pb-4 text-xs opacity-60">
            © 2025 Calculadora del Zodiaco Chino
          </footer>

        </div>

      </div >

    </>
  )
}

export default App
