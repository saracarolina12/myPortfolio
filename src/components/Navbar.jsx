import React, {useState} from 'react'
import logo from '../images/SaraLogo.png'
import { Link } from 'react-scroll'
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';


function Navbar() {
    const [nav, setnav] = useState(false);
    const pinkColor = pink[400];
    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav? "nav active":"nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt='logo'/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' fro='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='#'>about()</Link></li>
                <li><Link to='#'>work()</Link></li>
                <li><Link to='#'>projects()</Link></li>
                <li><Link to='#'></Link>contact()</li>
                <Button className='buttonResume' color="secondary" variant="outlined">Resume</Button>
            </ul>
        </nav>
    )
}

export default Navbar