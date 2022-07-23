import React from 'react'

function Work() {
    return (
        <>
        <div id='main' className='row'>
            <div className='column vertical-center center'>
                <img className='enterprises-images' src={ require('../images/Kindynos.png') } />
                <p className='enterprises'>Kindynos</p>
                <p className='date-work'>November 2021 - February 2022</p>
                <a><p>https://kindynos.mx/</p></a>
                <p>• Worked in different areas such as smart contracts development and front/back-end services.</p>
                <p>Go, Vue, Javascript, React.js, node.js</p>
                
            </div>
            <div className='column vertical-center center'>
                <img className='enterprises-images' src={ require('../images/Vibing.png') } />
                <p className='enterprises'>Vibing Studios</p>
                <p>March 2022 - Present</p>
                <a><p>https://www.linkedin.com/company/vibingstudios/</p></a>
                <p> • Work in back-end to sign and verify       
                    and Ethereum addresses.
                    • Built database with Solana and   
                    Ethereum addresses.
                    • Developed front-end using CSS for 
                    Bitmon Launcher
                </p>
                <p>Typescript, React.js, next.js, Tailwind CSS, SQLite, node.js</p>
            </div>
        </div>
    </>
    )
}

export default Work