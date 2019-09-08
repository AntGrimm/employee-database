import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Link to="/">
        <h1 className="header">NeverNudes Employee Database</h1>
      </Link>
    </>
  )
}

export default NavBar
