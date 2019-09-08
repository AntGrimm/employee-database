import React from 'react'
import { Link } from 'react-router-dom'

const Cell = props => {
  return (
    <>
      <li className="profile-list">
        <Link to={`/${props.id}`}>
          <img className="profile-picture" src={props.profileImage} />
          <h3 className="profile-name">
            {props.lastName}, {props.firstName}
          </h3>
        </Link>
        <h4 className="profile-job-title">{props.jobTitle}</h4>
      </li>
    </>
  )
}

export default Cell
