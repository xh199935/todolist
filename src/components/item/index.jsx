import React, { Component } from 'react'

export default class index extends Component {
  changeCheckBox = (id) => {
    return (event) => {
      this.props.changeCheckBox(id, event.target.checked)
    }
  }
  removeRow = (id) => {
    this.props.removeRow(id)
  }
  render () {
    const { id, name, done } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.changeCheckBox(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={() => { this.removeRow(id) }}>删除</button>
      </li >
    )
  }
}
