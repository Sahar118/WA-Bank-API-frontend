import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../styles/MainNavigation.moudle.css'
const MainNavigation = () => {
    return (
        <header className='header'>
            <nav>
                <ul className="list">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/' > Home Page</NavLink>
                    </li>

                    <li> <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/addNewUser'>
                        Add New User
                    </NavLink></li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/depositing'>Depositing Cash</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/withDrawCash'>Withdraw Cash</NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/updateCredit'> Update Credit</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/transferring'>Transferring</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation