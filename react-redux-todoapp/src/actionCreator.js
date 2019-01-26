export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const GET_TODO = "GET_TODO";

function handleAdd(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function handleRemove(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

export function updateTodo(id, completed) {
    return {
        type: UPDATE_TODO,
        id,
        completed
    }
}

function handleGet(todos) {
    return {
        type: GET_TODO,
        todos
    }
}

export function getTodo() {
    return (dispatch) => {
        fetch("http://localhost:3001/api/todos/")
            .then(res => res.json())
            .then(todos => (dispatch(handleGet(todos))))
            .catch(err => console.log(` ${err.status} ${err.message}`))
    }
}

export function addTodo(todo) {
    return (dispatch) => {
        fetch("http://localhost:3001/api/todos/", {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({todo})
        })
            .then(res => res.json())
            .then(todo => dispatch(handleAdd(todo)))
            .catch(err => console.log(` ${err.status} ${err.message}`))
    }
}

export function removeTodo(id) {
    return dispatch => {
        fetch(`http://localhost:3001/api/todos/${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .catch(err => console.log(` ${err.status} ${err.message}`))
    }
}
