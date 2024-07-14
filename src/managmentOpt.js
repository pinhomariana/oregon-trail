import React from 'react'
import { Link } from 'react-router-dom'

export default function ManagmentOpt() {
  return (
    <div className='main-menu'>
        <h1>Choose Management Options</h1>
        <div className='menu'>See Current Top Ten List</div>
        <div className='menu'>See the Original Top Ten List</div>
        <div className='menu'>Erase the Top Ten List</div>
        <div className='menu'>Erase the Tombstone Messages</div>
        <div className='menu'>Erase Saved Games</div>
        <div className='menu'>Turn Joystick On</div>
        <div className='menu'>Calibrate Joystick</div>
        <div className='menu hoover'><Link to='/oregon-trail'>Return to Main Menu</Link></div>
    </div>
  )
}
