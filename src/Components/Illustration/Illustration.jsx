import React from 'react'

import planet from '../../Assets/Planet.png'
import landing from '../../Assets/landing gear.png'
import capsule from '../../Assets/Rocket.png'
import smoke from '../../Assets/Smoke 1.png'
import smoke_two from '../../Assets/Smoke 2.png'

import './Illustration.css'


export default function Illustration() {
    return (
        <div className="main_anim">
            <div className ='rocket_container'>
                <div className="rocket">
                    <img src={capsule} alt="animate planet" className='capsule' />
                    <img src={landing} alt="animate planet" className='landing' />
                    <img src={smoke} alt="animate planet" className='smoke' />
                    <img src={smoke_two} alt="animate planet" className='smoke_two' />
                </div>
                <div className="planet" >
                    <img src={planet} alt="animate planet" />
                </div>
                <button>Launch Rocket!</button>
            </div>
        </div>
    )
}
