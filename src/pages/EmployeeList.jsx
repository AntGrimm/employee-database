import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      <ul className="employee-list">
        {employee.map((employee, i) => {
          return (
            <li className="employee" key={i}>
              <Link to={`/${employee.id}`}>
                <p>
                  {employee.lastName}, {employee.firstName}
                </p>
              </Link>
            </li>
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
