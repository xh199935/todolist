import React, { Component } from 'react'

export default class index extends Component {
  clearAll = () => {
    this.props.clearAll()
  }
  render () {
    const { todos } = this.props
    const count = todos.length
    const complete = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{complete}</span> / {count}
        </span>
        <button className="btn btn-danger" onClick={this.clearAll}>清除已完成任务</button>
      </div>
    )
  }
}
