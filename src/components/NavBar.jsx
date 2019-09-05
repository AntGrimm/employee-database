import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <h1>Employee Database</h1>
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
    </>
  )
}

export default NavBar
