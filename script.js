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

let buscarEstudiante = () => { };
let filtrarEstudiantesGanaron = () => { };
let filtrarEstudiantesPerdieron = () => { };

let filtraEstudiantesConPlanMejoramiento = () => { };
