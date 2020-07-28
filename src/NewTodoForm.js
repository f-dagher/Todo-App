import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTask({ ...this.state, id: uuidv4(), completed: false });
    this.setState({ task: "" });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Task </label>
        <input
          type="text"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button>Add Task</button>
      </form>
    );
  }
}

export default NewTodoForm;
