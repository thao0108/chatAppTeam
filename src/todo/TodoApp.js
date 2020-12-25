import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'
import classes from '../todo.module.css'

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
            content: '課題をする',
            id: shortid.generate()
        },
        {
            content: '洗濯をする',
            id: shortid.generate()
        },
        {
            content: '電話をする',
            id: shortid.generate()
        }
    ])

    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content: content,
                id: shortid.generate()
            }
        ])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <body>
                <h1 className={classes.todolist}>Todoリスト</h1>
                <Form addTodo={addTodo} />
                <List todos={todos} deleteTodo={deleteTodo} />
            </body>
        </>
    )
}

export default TodoApp