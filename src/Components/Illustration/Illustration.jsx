import React from 'react'

import planet from '../../Assets/Planet.png'
import landing from '../../Assets/landing gear.png'
import rocket from '../../Assets/Rocket.png'
import smoke from '../../Assets/Smoke 1.png'
import smoke_two from '../../Assets/Smoke 2.png'


export default function Illustration() {
    return (
        <div>
            <div className="rocket">
                <img src={rocket} alt="animate planet" />
                <img src={landing} alt="animate planet" />
                <img src={smoke} alt="animate planet" />
                <img src={smoke_two} alt="animate planet" />
            </div>
            <div className="planet">
                <img src={planet} alt="animate planet" />
            </div>
            <button>Launch Rocket!</button>
        </div>
    )
}
