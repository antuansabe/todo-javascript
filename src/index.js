import './styles.css';
import { Todo, TodoList } from './classes';
import {crearTodoHtml} from "./js/componentes";



export const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo();

console.log( todoList );

crearTodoHtml( tarea );