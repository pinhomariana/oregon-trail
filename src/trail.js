import React from 'react'
import { Link } from 'react-router-dom';

export default function Trail() {
  return (
    <div className='main-menu'>
        <h1>Travel the Trail</h1>
        <div className='menu profession'>Choose Profession</div>
        <div className='profession-menu'>
          <ul>
            <li>Banker</li>
            <li>Carpenter</li>
            <li>Farmer</li>
            <li>See Differences Between Professions</li>
          </ul>
        </div>
        <div className='menu'>Name Your Party Members</div>
        <div className='menu month'>Choose Month to Leave</div>
        <div className='month-menu'>
          <ul>
            <li>March</li>
            <li>April</li>
            <li>May</li>
            <li>June</li>
            <li>July</li>
            <li>Ask for Advice</li>
          </ul>
        </div>
        <div className='menu trail'>On the Trail Options</div>
        <div className='trail-menu'>
          <ul>
            <li>Check Supplies</li>
            <li>Look at Map</li>
            <li>Change Pace</li>
            <li>Change Food Rations</li>
            <li>Stop to Rest</li>
            <li>Attempt to Trade</li>
            <li>Talk to People</li>
            <li>Buy Supplies</li>
            <li>Random Events</li>
            <li>Bandit Attacks</li>
            <li>Illness or Injury</li>
            <li>Wagon Breakdown</li>
          </ul>
        </div>
        <div className='menu equipment'>Buy Equipment and Supplies</div>
        <div className='equipment-menu'>
          <ul>
            <li>Buy Oxen</li>
            <li>Buy Food</li>
            <li>Buy Clothing</li>
            <li>Buy Spare Parts</li>
            <li>Wagon Wheel</li>
            <li>Wagon Axle</li>
            <li>Wagon Tongue</li>
          </ul>
        </div>
        <div className='menu hoover'><Link to='/'>Return to Main Menu</Link></div>
    </div>
  )
}
