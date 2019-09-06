import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cell from '../components/Cell'

const EmployeeList = () => {
  const [employee, setEmployee] = useState([])

  const fetchEmployeeList = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/neverNudes/Employees'
    )
    console.log(resp.data)
    setEmployee(resp.data)
  }

  useEffect(() => {
    fetchEmployeeList()
  }, [])

  return (
    <>
      <h1>All employees listed here</h1>

      <ul>
        {employee.map((employee, i) => {
          return (
            <Cell
              key={i}
              {...employee}
              // id={employee.id}
              // lastName={employee.lastName}
              // firstName={employee.firstName}
            />
          )
        })}
      </ul>

      <Link to="/add">
        <button>Add New Employee</button>
      </Link>
    </>
  )
}

export default EmployeeList
