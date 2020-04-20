import React from 'react';
import PropTypes from 'prop-types';

class TodoItems extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    render() {
        const { todos } = this.props;

        return (
            <ul>
                {todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
            </ul>
        )
    }
}

export default TodoItems;