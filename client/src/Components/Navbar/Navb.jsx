import React from 'react'
import '../Navbar/NAvstyle.css'

function Navb() {
  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
          <i className='run fa-solid fa-person-running'>SpeedX</i>
        </div>
        <div className='navlink'>
          <a href='#'>Men</a>
          <a href='#'>Women</a>
          <a href='#'>Blog</a>
          <a href='#'>Contact</a>
          <div className='searchdivp'>
          <div className='searchdiv'>
            <div class="form-group fg--search">
              <input type="text" class="input" placeholder="search"></input>
              <button type="submit"><i class="fa fa-search"></i></button>
             
            </div>
            
            </div>
            
          </div>
          <i className='user fa-solid fa-user'></i>
        </div>
        </div>
    </nav>
  )
}

export default Navb