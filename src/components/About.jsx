import React from 'react'

function About() {
    return (
        <>
        <div id='main' className='row'>
            <div className='myself column center'>
                <img src={ require('../images/AboutMe.png') } />
            </div>
            <div className='name column vertical-center'>
                <div className='no-margin center title-container width-80'>
                    <p style={{'marginBottom':'2%'}} className='title-center-text no-margin'>about()</p>
                    <p style={{'marginBottom':'2%'}}  className='title-background no-margin'>ABOUT</p>
                </div>
                <p className='mydescription'>I’m an Artificial intelligence engineering
                    student, passionate about
                    programming and its various tools to
                    facilitate problem solving. Currently a
                    student at Universidad Panamericana
                    with a profesional objective based on
                    web application development and
                    research 👩🏽‍💻
                </p>
            </div>
        </div>
    </>
    )
}

export default About