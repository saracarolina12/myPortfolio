import React from 'react'

function Contact() {
    return (
        <>
        <div id='main' className='row'>
            <div className='myself column center'>
                <img src={ require('../images/AboutMe.png') } />
            </div>
            <div className='name column vertical-center'>
                <p className='title-text'>contact()</p>
                <p className='background-text'>CONTACT</p>
                <p className='mydescription'>jojojo
                </p>
            </div>
        </div>
    </>
    )
}

export default Contact