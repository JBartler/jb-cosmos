import React from 'react'

import capsules from '../../Assets/Capsules.png'
import crew from '../../Assets/Crew.png'
import rockets from '../../Assets/Rockets.png'
import details from '../../Assets/Details.png'

import '../Links/Links.css'



export default function Links() {
    return (

        <div className='links_container'>
            <div className="link link1">
                <img src={capsules} alt="capsules photo" />
                <p>Capsules</p>
            </div>
            <div className="link link2">
                <img src={crew} alt="crew phot" />
                <p>Crew</p>
            </div>
            <div className="link link3">
                <img src={rockets} alt="rockets photo" />
                <p>Rockets</p>
            </div>
            <div className="link link4">
                <img src={details} alt="details photo" />
                <p>Details</p>
            </div>
        </div>

    )
}
