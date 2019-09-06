import React, { useState } from 'react'
import axios from 'axios'

const EmployeeAdd = props => {
  //   const [firstName, setFirstName] = useState('')

  //   const addEmployee = async e => {
  //     e.preventDefault()
  //     const resp = await axios.post(
  //       `https://sdg-staff-directory-app.herokuapp.com/api/neverNudes/`,
  //     )
  //     console.log(resp.data)
  //   }

  return (
    <>
      <h1>Add Employee Here</h1>
      {/* <form onChange={addEmployee}>  */}
      <form>
        <input
          type="text"
          placeholder="First Name"
          // value={firstName}
          // onChange={e => setFirstName(e.target.value)}
        />
        <button>Add Employee</button>
      </form>
    </>
  )
}

export default EmployeeAdd

// "id\": 0, \"firstName\": \"string\", \"lastName\": \
// "string\", \"birthday\": \"2019-09-05T19:13:26.191Z\", \
// "hiredDate\": \"2019-09-05T19:13:26.191Z\", \"isFullTime\": true, \
// "profileImage\": \"string\", \"jobTitle\": \"string\", \
// "jobDescription\": \"string\", \"phoneNumber\": \"string\", \
// "interestingFact\": \"string\", \"address\": \"string\", \"city\": \
// "string\", \"zip\": \"string\", \"state\": \"string\", \"salary\": 0, \
// "gender\": \"string\", \"email\": \"string\", \"emergencyContactPerson\": \
// "string\", \"emergencyContactPhone\": \"string\", \
// "emergencyContactAddress\": \"string\", \"ptoHours\": 0, \"companyKey\": \"string\"
