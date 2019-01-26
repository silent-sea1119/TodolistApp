import React from 'react'

const Todo = ({todo, onDelete, onUpdate}) => {

    let style = {};

    if (todo.completed) {
        style = {color:'green', textDecoration:'line-through'}
    }

    return (
        <li
            style={style}
            className='list-group-item'
            onClick={onUpdate}
        >
            {todo.todo}
            {todo.completed}
            <button
                onClick={onDelete}
                className="alert-danger"
            >X
            </button>
        </li>
    )
};

export default Todo;