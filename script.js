let nombresEstudiantes = [];
let documentosEstudiantes = [];
let notasEstudiantes = [];

let registrarEstudiante = () => {
    let repetir = true;
    while (repetir) {
        let nombresEstudiantes = prompt("Ingrese el nombre del estudiante: ");
        let documentosEstudiantes = prompt("Ingrese el documento del estudiante: ");
        let notasEstudiantes = prompt("Ingrese la nota del estudiante: ");
        nombresEstudiantes.push(nombresEstudiantes);
        documentosEstudiantes.push(documentosEstudiantes);
        notasEstudiantes.push(notasEstudiantes);
        let opcion = prompt(
            "¿Desea registrar un nuevo estudiante?\n 1 = Si\n 2 = No "
        );
        if (opcion == "2") {
            repetir = false;
        }
    }
}

let buscarEstudiante = () => {
    let documentosEstudiantes = prompt("Ingrese un documento:")
    for (let index = 0 < documentosEstudiantes.length; index++;) {
        if (documentosEstudiantes == documentosEstudiantes[index]) {
            console.log("Nombre: " + nombresEstudiantes[index])
            console.log("Documento: " + documentosEstudiantes[index])
            console.log("Nota: " + notasEstudiantes[index])
        }
    }
}

let filtrarEstudiantesGanaron = () => {
    for (let index = 0; index < documentosEstudiantes.length; index++) {
        if (notasEstudiantes[index] > 3) {
            console.log("Nombre: " + nombresEstudiantes[index])
            console.log("Documento: " + documentosEstudiantes[index])
            console.log("Nota: " + notasEstudiantes[index])
        }
    }
};
let filtrarEstudiantesPerdieron = () => { };
let filtraEstudiantesConPlanMejoramiento = () => { };

let repetir = false

while (repetir) {
    let opcion = prompt(
        "Selecciones una opcion:\n 1 = Registrar estudiante\n 2 = Buscar estudiante\n 3 = Filtrar estudiantes ganadores\n 4 = Filtrar estudiantes perdedores\n 5 = Filtrar estudiantes con plan de mejoramiento\n 6 = Salir"
    );
    switch (opcion) {
        case "1":
            registrarEstudiante();
            break;
        case "2":
            buscarEstudiante();
            break;
        case "3":
            filtrarEstudiantesGanaron();
            break;
        case "4":
            filtrarEstudiantesPerdieron();
            break;
        case "5":
            filtraEstudiantesConPlanMejoramiento();
            break;
        case "6":
            repetir = false;
            break;
        default:
            alert("Opción inválida");
            break;
    }
}

