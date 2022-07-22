import React from 'react'

function Header() {
  return (
    <>
        <div id='main' className='row'>
            <div className='name column vertical-center'>
                <p className='hi '>Hi, my name is</p>
                <p className='sara-gomez'>Sara Gómez.</p>
                <p className='mydescription'>Web Developer and (soon)<br/> Artificial Intelligence Engineer.
                    <br/>Technology and pasta lover 🍝. </p>
            </div>
            <div className='about-me column center'>
                <img src={ require('../images/AboutMe.png') } />
            </div>
        </div>
    </>
  )
}

export default Header;