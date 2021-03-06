import React from 'react';
import { connect } from 'react-redux';

import { add } from '../actions/TodoActions';

class TodoInput extends React.Component {
    render() {
        return (
            <div>
                <input ref="test" type="text" />
                <button onClick={this.handleAdd}>Add Todo</button>
                </div>
        );
    }

    handleAdd = event => {
        event.preventDefault();
        this.props.add(this.refs.test.value);
        this.refs.test.value = '';
    };
}

function mapStateToProps(state) {
    return {
        todos: state.todos 
    };
}

export default connect(mapStateToProps, { add: add})(TodoInput);