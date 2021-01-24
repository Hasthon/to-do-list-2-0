import React, { useState, } from 'react'
import { Contenedor } from './contenedor'
import { TodoLista } from './todolista';

export function Lista() {
    const [todos, setTodos] = useState([]);

    const AddTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }
    const removeAlltasks = () => {
        setTodos([])
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    return (
        <div>
            <h1>TAREAS PENDIENTES <i class="far fa-edit"></i></h1>
            <Contenedor onSubmit={AddTodo} />
            <TodoLista
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}/>
            <div className="borrar-todo">
                <i class="far fa-trash-alt"
                    onClick={removeAlltasks}></i>
            </div>
        </div>
    )
}


