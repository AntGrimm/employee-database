import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeList = () => {
  return (
    <>
      <h1>All employees listed here</h1>
      <ul>
        <Link to="/details">
          <li>Employee 1</li>
        </Link>
        <li>Employee 2</li>
        <li>Employee 3</li>
      </ul>
      <Link to="/Add">
        <button>Add New Employee</button>
      </Link>
    </>
  )
}

export default EmployeeList
