import React, { Component } from 'react'
import { nanoid } from 'nanoid'
export default class Header extends Component {
  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) return false
    if (target.value.trim() === '') {
      console.log('输入不能为空');
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addToDo(todoObj)
  }
  render () {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
