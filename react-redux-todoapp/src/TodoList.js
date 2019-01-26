import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {addTodo, getTodo, removeTodo, updateTodo} from "./actionCreator";
import TodoForm from './TodoForm'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.props.getTodo()
    }

    handleSubmit(val){
        this.props.addTodo(val);
    }

    handleDelete(id) {
        this.props.removeTodo(id);
    }

    handleUpdate(id, completed){
        this.props.updateTodo(id, !completed)
    }

    render() {

        const todos = this.props.todos.map((todo) => (
            <Todo
                key={todo._id}
                todo={todo}
                onDelete={this.handleDelete.bind(this, todo._id)}
                onUpdate={this.handleUpdate.bind(this, todo._id, todo.completed)}
            />
        ));

        return (
            <div>
                <Route exact path='/todos' render={() => (<ul className="list-group">{todos}</ul>)}/>
                <Route path ='/todos/new' render={props => (
                    <TodoForm {...props} handleSubmit={this.handleSubmit}/>
                )}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo, removeTodo, updateTodo, getTodo})(TodoList);