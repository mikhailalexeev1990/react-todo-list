import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
	static propTypes = {
		todoItem: PropTypes.object,
		emitChangeItem: PropTypes.func,
		emitDeleteItem: PropTypes.func,
	}

	static defaultProps = {
		todoItem: {
			value: '',
			index: 0,
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			disabled: true,
			item: this.props.todoItem.value
		}

		this.bindFunctions();
	}

	bindFunctions() {
		this.inputItem = this.inputItem.bind(this);
		this.saveItem = this.saveItem.bind(this);
		this.checkItem = this.checkItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	activeItem(index) {
		this.setState((prevState, props) => {
			return {
				disabled: false,
				active: false,
			};
		});
	}

	inputItem(e) {
		this.props.emitChangeItem(this.props.todoItem.index, e.target.value);
	}

	saveItem() {
		this.setState((prevState, props) => {
			return {
				disabled: true,
			};
		})
	}

	checkItem() {
		this.setState((prevState, props) => {
			return {
				active: !this.state.active,
			};
		})
	}

	deleteItem(e) {
		this.props.emitDeleteItem(this.props.todoItem.index);
	}

	render() {
		return (
				<div className="input-group mb-2">
					<input type="text" className={`form-control ${this.state.active ? 'text-through' : ''}`}
					       value={this.props.todoItem.value}
					       onChange={this.inputItem}
					       onBlur={this.saveItem}
					       disabled={this.state.disabled}/>
					<div className="input-group-append" id={this.props.todoItem.index}>
						<button className={`btn btn-outline-success ${this.state.active ? 'active' : ''}`} type="button"
						        onClick={this.checkItem}>✓
						</button>
						<button className="btn btn-outline-info" type="button"
						        onClick={() => this.activeItem(this.props.todoItem.index)}>✎
						</button>
						<button className="btn btn-outline-danger" type="button"
						        onClick={() => this.deleteItem(this.props.todoItem.index)}>✕
						</button>
					</div>
				</div>
		)
	}
}

export default TodoItem;
