import './App.css';
import Header from './components/header'
import List from './components/list'
import Footer from './components/footer'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: false }
    ]
  }
  addToDo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }
  changeCheckBox = (id, done) => {
    const { todos } = this.state
    todos.filter((item) => { if (item.id === id) return item.done = !item.done })
    console.log(todos);
    this.setState({ todos: todos })
    // const newTodos = todos.map((todoObj) => {
    //   if (todoObj.id === id) return { ...todoObj, done }
    //   else return todoObj
    // })
    // this.setState({ todos: newTodos })
  }
  removeRow = (id) => {
    const { todos } = this.state
    const newToDos = todos.filter((item) => { return item.id !== id })
    this.setState({ todos: newToDos })
  }
  clearAll = () => {
    const newTodos = [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: false }
    ]
    this.setState({ todos: newTodos })
  }
  render () {
    const { todos } = this.state
    return (
      <div className="App">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addToDo={this.addToDo} />
            <List todos={todos} removeRow={this.removeRow} changeCheckBox={this.changeCheckBox} />
            <Footer todos={todos} clearAll={this.clearAll} />
          </div>
        </div>
      </div>
    )
  }
}
