// --- ELEMENTOS ---
export const ELEMENTOS = ["Madera", "Fuego", "Tierra", "Metal", "Agua"]

export const DESCRIPCIONES_ELEMENTOS  = {
  Madera: "representa el crecimiento, la creatividad y la expansión.",
  Fuego: "simboliza la pasión, la energía y la transformación.",
  Tierra: "aporta estabilidad, paciencia y equilibrio.",
  Metal: "refleja la justicia, la disciplina y la fortaleza interior.",
  Agua: "encarna la sabiduría, la intuición y la adaptabilidad.",
};
export const ELEMENTO_COLORS  = {
  Madera: "text-green-600",
  Fuego: "text-red-600",
  Tierra: "text-yellow-600",
  Metal: "text-gray-600",
  Agua: "text-blue-600",
};

export const ELEMENTO_BACKGROUNDS  = {
  Madera: "url('/bg-wood.jpg')",
  Fuego: "url('/bg-fire.jpg')",
  Agua: "url('/bg-water.jpg')",
  Tierra: "url('/bg-ground.jpg')",
  Metal: "url('/bg-metal.jpg')",
};

export const ELEMENTO_BORDERS  = {
  Madera: "border-green-400",
  Fuego: "border-red-400",
  Tierra: "border-yellow-400",
  Metal: "border-gray-400",
  Agua: "border-blue-400",
};

// --- ANIMALES ---

export const ANIMALES = [
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
  "Cerdo"];

export const ANIMAL_EMOJIS  = {
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

export const DESCRIPCIONES_ANIMALES  = {
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

// Descripciones combinadas de signos y elementos

export const SIGN_DESCRIPTIONS = {
  Rata: {
    Madera: "Ingeniosa, comunicativa y adaptable, pero algo impulsiva y ansiosa.",
    Fuego: "Energética, carismática y ambiciosa, aunque puede ser dominante.",
    Tierra: "Práctica, organizada y leal, aunque algo posesiva.",
    Metal: "Valiente, decidida y lógica, pero a veces demasiado crítica.",
    Agua: "Intuitiva, empática y emocional, pero algo insegura."
  },
  Buey: {
    Madera: "Paciente y confiable, con ideas firmes; puede ser obstinado.",
    Fuego: "Fuerte y apasionado, pero puede tener mal genio.",
    Tierra: "Estable, trabajador y realista; muy confiable.",
    Metal: "Disciplinado, perseverante y resistente al cambio.",
    Agua: "Flexible, tranquilo y amable, aunque indeciso."
  },
  Tigre: {
    Madera: "Idealista, justo y valiente, con espíritu de liderazgo.",
    Fuego: "Apasionado, impulsivo y aventurero; busca desafíos.",
    Tierra: "Equilibrado, protector y responsable.",
    Metal: "Intenso, decidido y competitivo.",
    Agua: "Encantador, intuitivo y emocionalmente profundo."
  },
  Conejo: {
    Madera: "Gentil, creativo y diplomático, pero algo evasivo.",
    Fuego: "Alegre, carismático y sociable; busca armonía.",
    Tierra: "Confiable, prudente y amable; muy protector.",
    Metal: "Elegante, racional y algo reservado.",
    Agua: "Empático, artístico y sensible; puede ser cambiante."
  },
  Dragón: {
    Madera: "Idealista, visionario y generoso.",
    Fuego: "Carismático, poderoso y enérgico; líder natural.",
    Tierra: "Práctico, estable y reflexivo.",
    Metal: "Determinado, valiente y con gran confianza.",
    Agua: "Sabio, misterioso y con gran intuición."
  },
  Serpiente: {
    Madera: "Sabia, flexible y compasiva; buena consejera.",
    Fuego: "Apasionada, magnética y carismática.",
    Tierra: "Racional, tranquila y paciente.",
    Metal: "Elegante, analítica y reservada.",
    Agua: "Misteriosa, profunda y muy intuitiva."
  },
  Caballo: {
    Madera: "Entusiasta, optimista y libre.",
    Fuego: "Vibrante, impulsivo y sociable; ama la aventura.",
    Tierra: "Responsable, decidido y trabajador.",
    Metal: "Fuerte, ambicioso y determinado.",
    Agua: "Flexible, adaptable y con gran empatía."
  },
  Cabra: {
    Madera: "Artística, amable y compasiva.",
    Fuego: "Alegre, expresiva y creativa.",
    Tierra: "Práctica, confiable y protectora.",
    Metal: "Reservada, disciplinada y elegante.",
    Agua: "Emocional, intuitiva y sensible."
  },
  Mono: {
    Madera: "Ingenioso, curioso y con gran imaginación.",
    Fuego: "Divertido, atrevido y encantador.",
    Tierra: "Estable, confiable y realista.",
    Metal: "Ambicioso, hábil y competitivo.",
    Agua: "Adaptable, intuitivo y persuasivo."
  },
  Gallo: {
    Madera: "Trabajador, leal y justo.",
    Fuego: "Entusiasta, brillante y orgulloso.",
    Tierra: "Práctico, ordenado y confiable.",
    Metal: "Perfeccionista, franco y valiente.",
    Agua: "Flexible, diplomático y sociable."
  },
  Perro: {
    Madera: "Honesto, justo y con fuerte sentido del deber.",
    Fuego: "Apasionado, leal y protector.",
    Tierra: "Prudente, confiable y estable.",
    Metal: "Firme, valiente y directo.",
    Agua: "Empático, amable y sensible."
  },
  Cerdo: {
    Madera: "Generoso, honesto y pacífico.",
    Fuego: "Alegre, sociable y entusiasta.",
    Tierra: "Tranquilo, práctico y confiable.",
    Metal: "Sincero, trabajador y decidido.",
    Agua: "Dulce, intuitivo y emocionalmente profundo."
  }
};


// Compatibilidades clásicas del zodiaco chino
export const COMPATIBILIDAD = {
  Rata: ["Dragón 🐉", "Mono 🐒", "Buey 🐂"],
  Buey: ["Rata 🐀", "Serpiente 🐍", "Gallo 🐓"],
  Tigre: ["Caballo 🐎", "Perro 🐕", "Cerdo 🐖"],
  Conejo: ["Cabra 🐐", "Cerdo 🐖", "Perro 🐕"],
  Dragón: ["Rata 🐀", "Mono 🐒", "Gallo 🐓"],
  Serpiente: ["Buey 🐂", "Gallo 🐓", "Mono 🐒"],
  Caballo: ["Tigre 🐅", "Perro 🐕", "Cabra 🐐"],
  Cabra: ["Conejo 🐇", "Cerdo 🐖", "Caballo 🐎"],
  Mono: ["Rata 🐀", "Dragón 🐉", "Serpiente 🐍"],
  Gallo: ["Buey 🐂", "Dragón 🐉", "Serpiente 🐍"],
  Perro: ["Tigre 🐅", "Conejo 🐇", "Caballo 🐎"],
  Cerdo: ["Conejo 🐇", "Cabra 🐐", "Tigre 🐅"],
};