// --- ELEMENTOS ---

export const ELEMENTOS = ["Madera", "Fuego", "Tierra", "Metal", "Agua"]

export const DESCRIPCIONES_ELEMENTOS = {
  Madera: "representa el crecimiento,flexibilidad, la creatividad y la expansión.",
  Fuego: "simboliza la pasión, la energía y la transformación.",
  Tierra: "aporta estabilidad, paciencia y equilibrio.",
  Metal: "refleja la justicia,determinación, claridad, la disciplina y la fortaleza interior.",
  Agua: "encarna la sabiduría, la intuición y la adaptabilidad.",
};
export const ELEMENTO_COLORS = {
  Madera: "text-green-600",
  Fuego: "text-red-600",
  Tierra: "text-yellow-600",
  Metal: "text-gray-600",
  Agua: "text-blue-600",
};

export const ELEMENTO_BACKGROUNDS = {
  Madera: "url('/bg-wood.jpg')",
  Fuego: "url('/bg-fire.jpg')",
  Agua: "url('/bg-water.jpg')",
  Tierra: "url('/bg-ground.jpg')",
  Metal: "url('/bg-metal.jpg')",
};

export const ELEMENTO_BORDERS = {
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

export const ANIMAL_EMOJIS = {
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

export const DESCRIPCIONES_ANIMALES = {
  Rata: "Inteligente y adaptable, símbolo de ingenio y prosperidad. Astuto, sociable y con gran intuición para oportunidades.",
  Buey: "Paciente, fuerte y confiable, representa la disciplina y el esfuerzo constante. Trabajador, perseverante y confiable.",
  Tigre: "Valiente, apasionado y protector, líder nato que inspira respeto.",
  Conejo: "Amable, sereno, diplomático y con buen gusto por la armonía.",
  Dragón: "Poderoso, carismático y creativo, emblema de éxito y buena fortuna, lleno de energía creativa",
  Serpiente: "Sabia, intuitiva y elegante, con gran capacidad de análisis, reflexiva y con mucha profundidad emocional",
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
    Madera: "una mente creativa y emprendedora.",
    Fuego: "un espíritu apasionado y carismático.",
    Tierra: "práctica y con buena intuición para negocios.",
    Metal: "determinada y enfocada en objetivos.",
    Agua: "profundamente perceptiva y adaptable."
  },
  Buey: {
    Madera: "constante y con visión a largo plazo.",
    Fuego: "trabajador con energía y coraje.",
    Tierra: "muy estable y confiable.",
    Metal: "organizado y con disciplina férrea.",
    Agua: "sensible y adaptable en lo emocional."
  },
  Tigre: {
    Madera: "audaz y creativo, busca liderar.",
    Fuego: "valiente, impulsivo y atractivo.",
    Tierra: "con pies en la tierra pero ambicioso.",
    Metal: "fuerte, decidido y competitivo.",
    Agua: "intenso emocionalmente y carismático."
  },
  Conejo: {
    Madera: "amable, con gusto por la estética.",
    Fuego: "encantador y con gran energía social.",
    Tierra: "sereno, práctico y con buen juicio.",
    Metal: "cuidadoso y con sentido del detalle.",
    Agua: "intuitivo y profundamente empático."
  },
  Dragón: {
    Madera: "creativo y expansivo, soñador.",
    Fuego: "magnético, entusiasta y audaz.",
    Tierra: "ambicioso pero con fundamentos sólidos.",
    Metal: "imponente y con fuerte carácter.",
    Agua: "profundo, adaptativo y visionario."
  },
  Serpiente: {
    Madera: "refinada y con buen gusto por la belleza.",
    Fuego: "apasionada y enigmática.",
    Tierra: "práctica, prudente y estable.",
    Metal: "analítica y con gran autocontrol.",
    Agua: "misteriosa, muy intuitiva."
  },
  Caballo: {
    Madera: "entusiasta y con energía para crear.",
    Fuego: "apasionado y amante de la aventura.",
    Tierra: "constante, con trabajo y perseverancia.",
    Metal: "independiente y de fuerte voluntad.",
    Agua: "sensible, adaptable y emocionalmente abierto."
  },
  Cabra: {
    Madera: "creativa, pacífica y con gusto artístico.",
    Fuego: "expresiva y afectuosa.",
    Tierra: "serena, práctica y confiable.",
    Metal: "delicada pero con determinación interna.",
    Agua: "muy empática y profundamente emocional."
  },
  Mono: {
    Madera: "ingenioso y con habilidades sociales.",
    Fuego: "divertido, carismático y dinámico.",
    Tierra: "práctico pero imaginativo.",
    Metal: "perspicaz y con fuerte autocontrol.",
  },
  Gallo: {
    Madera: "organizado y con sentido estético.",
    Fuego: "seguro, directo y energético.",
    Tierra: "responsable y con buen juicio.",
    Metal: "exigente consigo mismo y disciplinado.",
    Agua: "observador y profundamente racional."
  },
  Perro: {
    Madera: "leal, con fuerte sentido comunitario.",
    Fuego: "valiente y protector.",
    Tierra: "estable, noble y confiable.",
    Metal: "defensor justo y muy disciplinado.",
    Agua: "sensible y con gran capacidad de empatía."
  },
  Cerdo: {
    Madera: "generoso y con gran creatividad.",
    Fuego: "apasionado y con gran corazón.",
    Tierra: "complaciente, práctico y estable.",
    Metal: "honesto, trabajador y determinado.",
    Agua: "afectuoso, intuitivo y reflexivo."
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