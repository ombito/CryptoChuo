import React from 'react';
import "../Home/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        

    <div className='navbar'>
          <NavLink to='/' id='home'>
            Home
          </NavLink>
          <NavLink to='/about' id='about'>
            About Us
          </NavLink>
          <NavLink to='/courses' id='courses'>
            Courses
          </NavLink>
          <NavLink to='/markets' id='markets'>
            Markets
          </NavLink>
          <NavLink to='/careers' id='careers'>
            Careers
          </NavLink>
          <NavLink to='/shop' id='shop'>
            Shop
          </NavLink>

          <Link to="/login">
        <button className="signin" type='submit' >Sign In</button>
    </Link>
        
    </div>
    
          
</div>





  
  );
};
  
export default Home;