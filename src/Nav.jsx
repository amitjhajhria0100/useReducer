import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className=' bg-dark'>
        <div className='text-end py-3 container'>
          <NavLink to="/" className="me-4">Counter</NavLink>
          <NavLink to="/userDetail">Users</NavLink>
    </div>
    </div>
  )
}

export default Nav