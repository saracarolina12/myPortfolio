import React, {useState} from 'react'
import logo from '../images/SaraLogo.png'
import { Link } from 'react-scroll'
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Navbar() {
    const [nav, setnav] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)
    
    const theme = createTheme({
        palette: {
        primary: {
            main: '#cf3b91',
        },
        secondary: {
            main: '#f44336',
        },
        },
    });

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
                <li><Link to='#'>contact()</Link></li>
                <ThemeProvider theme={theme}>
                    <a href="https://drive.google.com/file/d/1Ft5ETm626Eyxd4hLTG5qP2K32CVKr-TA/view?usp=sharing" target="_blank">
                        <Button  style={{ borderRadius: 20 }}  className='buttonResume' color='primary'  variant="outlined">Resume</Button>
                    </a>
                </ThemeProvider>
            </ul>
        </nav>
    )
}

export default Navbar