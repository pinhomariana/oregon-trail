import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg'

export default function MainMenu() {
  return (
      <div className='main-menu'>
        <img src={logo} alt="Logo" />
        <div className='menu hoover'><Link to='trail'>Travel the Trail</Link></div>
        <div className='menu'>Learn About the Trail</div>
        <div className='menu hoover'><Link to='top-ten'>See the Oregon Top Ten</Link></div>
        <div className='menu'>Turn Sound Off</div>
        <div className='menu hoover'><Link to='managment-opt'>Choose Management Options</Link></div>
        <div className='menu'>End</div>
      </div>
  )
}
