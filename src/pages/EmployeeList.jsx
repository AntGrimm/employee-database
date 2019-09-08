import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cell from '../components/Cell'

const EmployeeList = () => {
  const [employee, setEmployee] = useState([])

  const fetchEmployeeList = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/neverNudes/employees'
    )
    console.log(resp.data)
    setEmployee(resp.data)
  }

  useEffect(() => {
    fetchEmployeeList()
  }, [])

  return (
    <>
      <h1 className="list-sub-header">Employees</h1>
      <ul className="list-box">
        {employee.map((employee, i) => {
          return <Cell key={i} {...employee} />
        })}
      </ul>

      <Link to="/add">
        <button>Add New Employee</button>
      </Link>
    </>
  )
}

export default EmployeeList
