import React from 'react'

function About() {
    return (
        <>
        <div id='main' className='row'>
            <div className='name column vertical-center'>
                <p className='title-text'>about()</p>
                <p className='background-text'>ABOUT</p>
                <p className='mydescription'>I’m an Artificial intelligence engineering
                    student, passionate about
                    programming and its various tools to
                    facilitate problem solving. Currently a
                    student at Universidad Panamericana
                    with a profesional objective based on
                    web application development and
                    research.
                </p>
            </div>
            <div className='about-me column center'>
                <img src={ require('../images/AboutMe.png') } />
            </div>
        </div>
    </>
    )
}

export default About