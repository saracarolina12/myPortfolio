import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
  return (
    <>
        <div id='main' className='row'>
            <div className='name column vertical-center'>
                <p className='hi '>Hi, my name is</p>
                <p className='sara-gomez'>Sara Gómez.</p>
                <p className='mydescription'>Web Developer and (soon)<br/> Artificial Intelligence Engineer.
                    <br/>Technology and pasta lover 🍝. 
                </p>
                <div className='container-main'>
                  <a href="https://www.linkedin.com/in/sara-carolina" target="_blank"><LinkedInIcon className='icon' style={{ color: '#f8bbd0'}} /> </a>
                  <a href="https://github.com/saracarolina12" target="_blank"><GitHubIcon className='icon' style={{ color: '#f8bbd0'}}/></a>
                  <hr className='horizontal-line'></hr> 
                </div>
                
            </div>
            <div className='about-me column center'>
                <img src={ require('../images/AboutMe.png') } />
            </div>
        </div>
    </>
  )
}

export default Header;