import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="header">
        <NavLink to="#" className="logo">Nikhil</NavLink>   
        <nav className='nav'> 
            <NavLink to="/" className= 'a' >Home</NavLink>
            <NavLink to= "/Projects" className='a' >Projects</NavLink>
            <NavLink to="Skills" className='a' >Skills</NavLink>
            <NavLink to="/Education" className='a' >Education</NavLink>
            <NavLink to="/Experience" className='a' >Experience</NavLink>
        </nav>
    </div>
  )
}

export default Navbar;