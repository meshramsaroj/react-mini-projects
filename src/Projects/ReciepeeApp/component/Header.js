import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-black text-white px-4 py-3'>
        <ul className='flex gap-4'>
            <li className='nav-item'><Link to={'/recipe'}>List</Link></li>
            <li className='nav-item'><Link to={'/recipe/:id'}>Details</Link></li>
        </ul>
    </nav>
  )
}

export default Header