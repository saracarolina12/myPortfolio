import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Contact() {
    return (
        <>
        <div id='main' className='row'>
            {/* <div className='center title-container  debug'>
                <p className='title-center-text text-contact no-margin'>contact()</p>
                <p className='title-background no-margin'>CONTACT</p>
            </div> */}
            <div class="sign vertical-center">
                <div className=' no-margin'><span class="fast-flicker">c</span>ont<span class="flicker">a</span>ct</div>
                <p className=' no-margin'>me</p>
            </div>
            <div className='square more-margin'>
                <div className='center container-me more-margin'>
                    <img className='image' src={ require('../images/me.jpeg') } />
                    <div class="middle">
                        <p className='text-me'>Hire me!:D</p>
                    </div>
                </div>
                <p className='center sara-id'>Sara Carolina Gómez Delgado</p>
                <div className='more-margin'>
                    <div className='icon-text'>
                        <EmailIcon style={{'marginRight':'5px', 'color': '#903d6d'}}/>
                        <a href='mailto:saracarogode@gmail.com'><p className='center sara-mail'>saracarogode@gmail.com</p></a>
                    </div>
                    <div className='icon-text more-margin'>
                        <PhoneAndroidIcon style={{'marginRight':'5px', 'color': '#903d6d'}}/>
                        <p className='center sara-phone'>+52 474 102 0068</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    )
}

export default Contact
