
export function ciclo(anio) {
    let calendarioChino = {
        animales: [
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
            "Cerdo"
        ],
        elementos: [
            "Madera",
            "Fuego",
            "Tierra",
            "Metal",
            "Agua"
        ]
    }
    let anioBase = 1984;
    let cicloAnimal = (anio - anioBase) % 12;
    let cicloElemento = Math.floor((anio - anioBase) % 10 / 2);
    return {
        animal: calendarioChino.animales[cicloAnimal],
        elemento: calendarioChino.elementos[cicloElemento]
    }
}
