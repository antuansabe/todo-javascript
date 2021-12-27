import './styles.css';
import { Todo, TodoList } from './classes';



const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');
console.log( tarea );

todoList.nuevoTodo();

console.log( todoList );
