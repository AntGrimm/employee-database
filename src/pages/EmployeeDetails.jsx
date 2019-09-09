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
      <h1>Basic Information</h1>
      <section>
        <img
          src={employeeDetails.profileImage}
          alt={employeeDetails.lastName}
        />
        <h1>
          {employeeDetails.firstName} {employeeDetails.lastName}
        </h1>
      </section>
      {/* <ul>
        {Object.keys(employeeDetails).map((key, i) => {
          return (
            <li>
              {key} : {employeeDetails[key]}
            </li>
          )
        })}
      </ul> */}
      <ul>
        <li>Job Title: {employeeDetails.jobTitle}</li>
        <li>Job Description: {employeeDetails.jobDescription}</li>
        <li>Interesting Fact: {employeeDetails.interestingFact}</li>
        <li>Email: {employeeDetails.email}</li>
        <li>Phone: {employeeDetails.phoneNumber}</li>
        <li>Birthday: {employeeDetails.birthday}</li>
        <li>
          Address: {employeeDetails.address}, {employeeDetails.city},{' '}
          {employeeDetails.state}, {employeeDetails.zip}
        </li>
        <li>Emergency Contact: {employeeDetails.emergencyContactPerson}</li>
        <li>Phone: {employeeDetails.emergencyContactPhone}</li>
        <li>Address: {employeeDetails.emergencyContactAddress}</li>
        <li>Gender: {employeeDetails.gender}</li>
        <li>Date Hired: {employeeDetails.hiredDate}</li>
        <li>Full Time: {employeeDetails.isFullTime}</li>
        <li>PTO Hours: {employeeDetails.ptoHours}</li>
        <li>Salary: ${employeeDetails.salary}</li>
      </ul>
    </>
  )
}

export default EmployeeDetails
