import React from 'react'

function Work() {
    return (
        <>
        <div id='main' className='row'>
            <div className='column vertical-center center upper'>
                <img className='enterprises-images' src={ require('../images/Kindynos.png') } />
                <p className='enterprises'>Kindynos</p>
                <hr className='horizontal-line'/>
                <p className='date-work'>November 2021 - February 2022</p>
                <a target="_blank" href='https://kindynos.mx' className='link reduce-top'><p>https://kindynos.mx/</p></a>
                <p className='job-description'>• Worked in different areas such as smart contracts development and front/back-end services.</p>
                <p className='technologies'>Go, Vue, Javascript, React.js, node.js</p>
                
            </div>
            <div className='column vertical-center center'>
                <img className='enterprises-images' src={ require('../images/Vibing.png') } />
                <p className='enterprises'>Vibing Studios</p>
                <hr className='horizontal-line'/>
                <p className='date-work'>March 2022 - Present</p>
                <a target="_blank" href='https://www.linkedin.com/company/vibingstudios/about/'><p className='link'>https://www.linkedin.com/company/vibingstudios/about</p></a>
                <p className='job-description'> • Work in back-end to sign and verify       
                    and Ethereum addresses.<br/>
                    • Built database with Solana and   
                    Ethereum addresses.<br/>
                    • Developed front-end using CSS for 
                    Bitmon Launcher
                </p>
                <p className='technologies'>Typescript, React.js, next.js, Tailwind CSS, SQLite, node.js</p>
            </div>
        </div>
    </>
    )
}

export default Work