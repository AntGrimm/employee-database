import React from 'react'
import { Link } from 'react-router-dom'

const Cell = props => {
  return (
    <li>
      <Link to={`/${props.id}`}>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
      </Link>
    </li>
  )
}

export default Cell
