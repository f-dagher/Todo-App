import React, { Component } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    //{ task: "", id: uuidv4() }
    this.addTask = this.addTask.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  remove(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }

  /*addTask(task) {
    let newTask = { ...task, id: uuidv4() };
    this.setState((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  }*/

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.tasks.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      tasks: updatedTodos,
    });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.tasks.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      tasks: updatedTodos,
    });
  }

  renderList() {
    return (
      <div>
        {this.state.tasks.map((t) => (
          <Todo
            task={t.task}
            key={t.id}
            id={t.id}
            completed={t.completed}
            removeTodo={() => this.remove(t.id)}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A simple React Todo List App</span>
        </h1>
        {this.renderList()}
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
