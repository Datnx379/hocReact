import React from 'react'
import {Link} from "react-router-dom"
export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to={'/programs'}>Programs</Link>    
            </li>
            <li>
                <Link to={'/reviews'}>Reviews</Link>
            </li>
            <li>
                <Link to={'/features'}>Features</Link>
            </li>
            <li>
                <Link to={'teaching'}> Teaching</Link>
            </li>
        </ul>
    </nav>
  )
}
