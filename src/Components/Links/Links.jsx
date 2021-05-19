import React from 'react'

import Illustration from '../Illustration/Illustration'
// import {Modal} from '../Modal/Modal'

import capsules from '../../Assets/Capsules.png'
import crew from '../../Assets/Crew.png'
import rockets from '../../Assets/Rockets.png'
import details from '../../Assets/Details.png'

import '../Links/Links.css'



function Links() {


    return (
        <>
        <div className="section">
        <div className="main_links">
        <div className='links_container'>
            <div className="link link1">
                <img src={capsules} alt="capsules phot" />
                <button className='link_button'>Capsules</button>
            </div>
            <div className="link link2">
                <img src={crew} alt="crew phot" />
                <div className="cos"></div>
                
            </div>
            <div className="link link3">
                <img src={rockets} alt="rockets phot" />
                <button className='link_button' /*onClick={openModal}*/>Rockets</button>
            </div>
            <div className="link link4">
                <img src={details} alt="details phot" />
                <button className='link_button' /*onClick={openModal}*/>Details</button>
            </div>
        </div>
        </div>
        <Illustration />
        </div>
        </>

    )
}

export default Links
