import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      task: this.props.task,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }

  toggleForm() {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      editing: false,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    let result;
    if (this.state.editing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i class="fas fa-pen" />
            </button>{" "}
            <button onClick={this.props.removeTodo}>
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;

/**
  this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    handleEdit(id) {
    this.editing();
    this.setState({
      editing: true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.task = this.state.edit;
    this.setState({ editing: false, edit: "" });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  editing() {
    if (this.state.editing === true) {
      console.log("editing");
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="edit"
              name="edit"
              value={this.state.edit}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    }
  }
 */
