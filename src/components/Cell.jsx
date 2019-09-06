import React from 'react'
import { Link } from 'react-router-dom'

const Cell = props => {
  return (
    <>
      <li>
        <img src={props.profileImage} />
        <Link to={`/${props.id}`}>
          <h3>
            {props.lastName}, {props.firstName}
          </h3>
        </Link>
        <h4>{props.jobTitle}</h4>
      </li>
    </>
  )
}

export default Cell
