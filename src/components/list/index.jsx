import React, { Component } from 'react'
import Item from '../item'

export default class index extends Component {
  changeCheckBox = (id) => {
    this.props.changeCheckBox(id)
  }
  removeRow = (id) => {
    this.props.removeRow(id)
  }
  render () {
    const { todos } = this.props
    console.log(this.props);
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} removeRow={this.removeRow} changeCheckBox={this.changeCheckBox} />
          })
        }
      </ul>
    )
  }
}
