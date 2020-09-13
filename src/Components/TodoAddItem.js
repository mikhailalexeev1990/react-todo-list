import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoAddItem extends Component {
	static propTypes = {
		emitAddItem: PropTypes.func,
	}

	constructor(props) {
		super(props);

		this.state = {
			nameItem: ''
		}

		this.bindProps();
	}

	bindProps() {
		this.addItem = this.addItem.bind(this);
		this.inputItem = this.inputItem.bind(this);
	}

	addItem() {
		if (!this.state.nameItem) {
			return true;
		}

		this.props.emitAddItem(this.state.nameItem);

		this.setState((prepState, props) => {
			return {
				nameItem: '',
			}
		})
	}

	inputItem(e) {
		let nameItem = e.target.value;

		this.setState((prevState, props) => {
			return {
				nameItem,
			};
		})
	}

	render() {
		return (
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Name..."
					       value={this.state.nameItem} onChange={this.inputItem}/>
					<div className="input-group-append">
						<button className="btn btn-outline-primary" type="button" onClick={this.addItem}>Add Item
						</button>
					</div>
				</div>
		)
	}
}

export default TodoAddItem;
