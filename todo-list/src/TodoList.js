import React from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['Walk the dog', 'Get groceries'],
            newTodoItem: ''
        }
    }

    addTodo = (e) => {
        e.preventDefault();
        // add todo
        this.setState({
            todos: [...this.state.todos, this.state.newTodoItem],
            newTodoItem: ''
        })
    }

    handleInputChange = (e) => {
        this.setState({
            newTodoItem: e.target.value
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="Todo-List">
                <h1>Todo List</h1>
                <form onSubmit={this.addTodo}>
                    <input
                        value={this.state.newTodoItem}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">
                        Add Item
                    </button>
                </form>
                <TodoItems todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoList;
