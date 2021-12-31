export class Todo {

    static fromJson ({ id, tarea, completado, creado    } ) {

        const tempTodo = new Todo( tarea )

        tempTodo.id          = id;
        tempTodo.completado  = completado;
        tempTodo.creado      = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;
        this.id = new Date().getDate();
        this.completado = false;
        this.creado = new Date();

    }

    imprimrClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }



}