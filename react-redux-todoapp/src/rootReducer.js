import {ADD_TODO, GET_TODO, REMOVE_TODO, UPDATE_TODO} from './actionCreator'

const initialState = {
    todos: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODO:
            return {...state, todos: action.todos};
        case ADD_TODO:
            return {todos: [...state.todos, action.todo]};
        case REMOVE_TODO:
            var todos = state.todos.filter(val => val._id !== action.id);
            return {todos};
        case UPDATE_TODO:
            var updatedTodos = state.todos.map(todo => (
                todo._id === action.id ? {
                    ...todo,
                    completed: action.completed
                } : todo
            ));
            return {todos: updatedTodos};
        default:
            return state
    }
}