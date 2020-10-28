import React from 'react'
import {Link} from 'react-router-dom'
import '../style/header.css'
import GoogleAuth from './GoogleAuth'

function Header() {
    return (
        <div>
           <nav>
              <div className="navbar">
                  <h2>
                      <Link to="/"> Streamer</Link>
                  </h2>
                  <ul className="items">
                      {/* <li> <Link to="/"> Streams</Link></li> */}
                      <li><GoogleAuth/></li>
                  </ul>
                  </div> 
              
           </nav>
        </div>
    )
}

export default Header
