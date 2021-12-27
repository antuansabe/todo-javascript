export class Todo {

    constructor( tarea ) {

        this.tarea = tarea;
        this.id = new Date().getDate();
        this.completado = false;
        this.creado = new Date();

    }

}