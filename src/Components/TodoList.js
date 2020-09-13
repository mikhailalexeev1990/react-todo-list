import React, {Component} from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends Component {
	static propTypes = {
		todoList: PropTypes.array,
		emitChangeItem: PropTypes.func,
		emitDeleteItem: PropTypes.func
	}

	static defaultProps = {
		todoList: [''],
	}

	constructor(props) {
		super(props);

		this.bindFunctions();
	}

	bindFunctions() {
		this.emitChangeItem = this.emitChangeItem.bind(this);
		this.emitDeleteItem = this.emitDeleteItem.bind(this);
	}

	emitChangeItem(index, value) {
		this.props.emitChangeItem(index, value);
	}

	emitDeleteItem(index) {
		this.props.emitDeleteItem(index);
	}

	render() {
		return (
				<div className="list-group">
					{this.props.todoList.map((value, index) =>
							<TodoItem todoItem={{value, index}}
							          key={index}
							          emitChangeItem={this.emitChangeItem}
							          emitDeleteItem={this.emitDeleteItem}
							/>
					)}
				</div>
		);
	}
}

export default TodoList;
