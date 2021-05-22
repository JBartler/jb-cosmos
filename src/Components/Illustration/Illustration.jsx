import React from 'react'


import planet_photo from '../../Assets/Planet.png'
import landing_photo from '../../Assets/landing gear.png'
import capsule_photo from '../../Assets/Rocket.png'
import smoke_photo from '../../Assets/Smoke 1.png'
import smoke_two_photo from '../../Assets/Smoke 2.png'

import './Illustration.css'

export default function Illustration() {

    const btn = document.getElementById('capsule')

    return (
        <div className="main_anim">
            <div className ='rocket_container'>
                <div className="rocket">
                    <div className="capsuleContainer">
                    <img src={capsule_photo} alt="animate planet" className='capsule' id='capsule' />
                    </div>
                    <img src={landing_photo} alt="animate planet" className='landing' />
                    <img src={smoke_photo} alt="animate planet" className='smoke' />
                    <img src={smoke_two_photo} alt="animate planet" className='smoke_two' />
                </div>
                <div className="planet" >
                    <img src={planet_photo} alt="animate planet" />
                </div>
            </div>
            <button className="launchRocket" onClick={(e)=>{
               btn.classList.add('animStart');
               setTimeout(function(){
                   btn.classList.remove('animStart');
               }, 8000);
           }}> 
                Launch Rocket!
            </button>
        </div>
    )
}
