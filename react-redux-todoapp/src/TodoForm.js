import React, {Component} from 'react'

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.todoText);
        this.setState({
            todoText: ""
        });
        this.props.history.push('/todos');
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todoText">Enter your todo here</label>
                    <input
                        type="text"
                        id="todoText"
                        name="todoText"
                        value={this.state.todoText}
                        onChange={this.handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add todo
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoForm;