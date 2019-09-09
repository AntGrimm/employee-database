import React, { useState } from 'react'
import axios from 'axios'

const EmployeeAdd = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [birthday, setBirthday] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [hiredDate, setHiredDate] = useState('')
  const [isFullTime, setIsFullTime] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [interestingFact, setInterestingFact] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [state, setState] = useState('')
  const [salary, setSalary] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [ptoHours, setPtoHours] = useState('')
  const [emergencyContactPerson, setEmergencyContactPerson] = useState('')
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('')
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('')

  const addEmployee = async e => {
    e.preventDefault()
    const resp = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/neverNudes/Employees`,
      {
        firstName,
        lastName,
        jobTitle,
        birthday,
        profileImage,
        hiredDate,
        isFullTime,
        jobDescription,
        phoneNumber,
        interestingFact,
        address,
        city,
        zip,
        state,
        salary,
        gender,
        email,
        ptoHours,
        emergencyContactPhone,
        emergencyContactPerson,
        emergencyContactAddress
      }
    )
    console.log(resp.data)
  }

  return (
    <>
      <h1>Add New Employee</h1>
      <main>
        <form
          onSubmit={e => {
            addEmployee(e)
            alert('Employee Added')
          }}
        >
          <section className="profile-entry">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Birthday"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
            />
            <input
              type="text"
              placeholder="Date Hired"
              value={hiredDate}
              onChange={e => setHiredDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Full Time?"
              value={isFullTime}
              onChange={e => setIsFullTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="Profile Picture Link"
              value={profileImage}
              onChange={e => setProfileImage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Job Description"
              value={jobDescription}
              onChange={e => setJobDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Interesting Fact"
              value={interestingFact}
              onChange={e => setInterestingFact(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={zip}
              onChange={e => setZip(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={e => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Salary"
              value={salary}
              onChange={e => setSalary(e.target.value)}
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={e => setGender(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="PTO Hours"
              value={ptoHours}
              onChange={e => setPtoHours(e.target.value)}
            />
          </section>
          <section className="emergency-contact-entry">
            <h2>Emergency Contact Info</h2>
            <input
              type="text"
              placeholder="Emergency Contact"
              value={emergencyContactPerson}
              onChange={e => setEmergencyContactPerson(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={emergencyContactPhone}
              onChange={e => setEmergencyContactPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={emergencyContactAddress}
              onChange={e => setEmergencyContactAddress(e.target.value)}
            />
          </section>
          <button className="submit-button">Add Employee</button>
        </form>
      </main>
    </>
  )
}

export default EmployeeAdd
