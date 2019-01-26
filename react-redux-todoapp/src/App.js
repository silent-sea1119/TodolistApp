import React, {Component} from 'react';
import TodoList from './TodoList'
import {Link, Route, Redirect} from 'react-router-dom';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className='container text-center'>
                <h1>React-Redux TodoList App</h1>
                <div className='App'>
                    <Link to='/todos' className="App-link">See my Todos!</Link>
                    <Link to='/todos/new' className="App-link"> Add new todo</Link>
                </div>
                <hr/>
                <Route path='/todos' component={TodoList}/>
                <Route exact path='/' render={() => (<Redirect to='/todos'/>)}/>
            </div>
        );
    }
}

export default App;
