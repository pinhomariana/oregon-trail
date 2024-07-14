import React from 'react';
import { Link } from 'react-router-dom';

export default function TopTen() {
  return (
    <div className='main-menu'>
        <h1>See the Oregon Top Ten</h1>
        <div className='menu'>View Top Ten Scores</div>
        <div className='menu'>Explanation of Point System</div>
        <div className='menu hoover'><Link to='/'>Return to Main Menu</Link></div>
    </div>
  )
}
