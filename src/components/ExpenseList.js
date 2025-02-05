import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

export class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className="list">
          <ExpenseItem />
        </ul>
        <button className="btn">목록 지우기</button>
      </>
    )
  }
}

export default ExpenseList
