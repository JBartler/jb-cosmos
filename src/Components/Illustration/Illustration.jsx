import React from 'react'

import planet_photo from '../../Assets/Planet.png'
import landing_photo from '../../Assets/landing gear.png'
import capsule_photo from '../../Assets/Rocket.png'
import smoke_photo from '../../Assets/Smoke 1.png'
import smoke_two_photo from '../../Assets/Smoke 2.png'

import './Illustration.css'

export default function Illustration() {

    const capsule = document.getElementById('capsule')

    return (
        <div className="mainAnim">
            <div className ='rocketContainer'>
                <div className="rocket">
                    <div className="capsuleContainer">
                    <img src={capsule_photo} alt="animate planet" className='capsule' id='capsule' />
                    </div>
                    <img src={landing_photo} alt="animate planet" className='landing' id='landing' />
                    <img src={smoke_photo} alt="animate planet" className='smoke' id='smoke' />
                    <img src={smoke_two_photo} alt="animate planet" className='smokeTwo' id='smokeTwo' />
                </div>
                <div className="planet" >
                    <img src={planet_photo} alt="animate planet" />
                </div>
            </div>
            <button className="launchRocket" onClick={(e)=>{
               capsule.classList.add('animStart');
               document.getElementById("smoke").style.opacity = 0.5;
               document.getElementById("smokeTwo").style.opacity = 0.5;
               document.getElementById("landing").style.opacity = 0;
               

               setTimeout(function(){
                   capsule.classList.remove('animStart');
                   document.getElementById("smoke").style.opacity = 1;
                   document.getElementById("smokeTwo").style.opacity = 1;
                   document.getElementById("landing").style.opacity = 1;
               }, 8000);
           }}> 
                Launch Rocket!
            </button>
        </div>
    )
}
