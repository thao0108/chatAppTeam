import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Item
                            content={todo.content}
                            id={todo.id}
                            key={todo.id}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>
    )
}

export default List