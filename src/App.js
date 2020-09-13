import React, {Component} from 'react';
import TodoList from "./Components/TodoList";
import TodoAddItem from "./Components/TodoAddItem";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoList: ['']
		}

		this.bindFunctions();
	}

	bindFunctions() {
		this.changeItem = this.changeItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	changeItem(index, value) {
		this.setState((prevState, props) => {
			let todoList = [...this.state.todoList];
			todoList[index] = value;

			return {
				todoList
			};
		})
	}

	deleteItem(index) {
		this.setState((prevState, props) => {
			let todoList = [...this.state.todoList].filter((v, i) => i != index);

			if (!todoList.length) {
				todoList = [''];
			}

			return {
				todoList
			};
		})
	}

	addItem(value) {
		this.setState((prevState, props) => {
			let todoList = [...this.state.todoList];

			if (todoList.length === 1 && !todoList[0].length) {
				todoList[0] = value;
			} else {
				todoList.push(value);
			}

			return {
				todoList
			};
		})
	}

	render() {
		return (
				<div className="container-md mt-3">
					<div className="card">
						<div className="card-header">
							<TodoAddItem emitAddItem={this.addItem}/>
						</div>
						<div className="card-body">
							<TodoList todoList={this.state.todoList}
							          emitChangeItem={this.changeItem}
							          emitDeleteItem={this.deleteItem}
							/>
						</div>
					</div>
				</div>
		);
	}
}

export default App;
