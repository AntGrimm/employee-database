import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeeDetails = props => {
  const [employeeDetails, setEmployeeDetails] = useState([])
  const employeeSearchTerm = props.match.params.details

  const fetchEmployeeDetails = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/neverNudes/employees/${employeeSearchTerm}`
    )
    console.log(resp.data)
    setEmployeeDetails(resp.data)
  }

  useEffect(() => {
    fetchEmployeeDetails()
  }, [])

  return (
    <>
      <h1>Single employee will have details here</h1>
      <ul>
        <li>First Name: {employeeDetails.firstName}</li>
        <li>Last Name: {employeeDetails.lastName}</li>
        <li>Birthday: {employeeDetails.birthday}</li>
      </ul>
    </>
  )
}

export default EmployeeDetails
