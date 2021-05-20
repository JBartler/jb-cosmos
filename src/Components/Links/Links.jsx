import React, {useContext,useEffect} from 'react'
import { Context } from '../Store/GlobalStore'

import Illustration from '../Illustration/Illustration'

import capsules from '../../Assets/Capsules.png'
import crew from '../../Assets/Crew.png'
import rockets from '../../Assets/Rockets.png'
import details from '../../Assets/Details.png'

import '../Links/Links.css'


function Links() {

    const [state, setState] = useContext(Context)

        // const [info, setInfo] = setState()

        useEffect(() => {
            getCapsules()
        }, [])
        useEffect(() => {
            getCrew()
        }, [])
        useEffect(() => {
            getRockets()
        }, [])
        useEffect(() => {
            getStarlink()
        }, [])
        
    
        const getCapsules = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/capsules')
            const data = await response.json();
            console.log(data)
        }
        const getCrew = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/crew')
            const data2 = await response.json();
            console.log(data2)
        }
        const getRockets = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/rockets')
            const data3 = await response.json();
            console.log(data3)
        }
        const getStarlink = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/starlink/:id')
            const data4 = await response.json();
            console.log(data4)
        }

    return (
        <>
                    
        <div className="section">
        <div className="main_links">
        <div className='links_container'>
            <div className="link link1"  onClick={() => setState({show: true})}>
                <img src={capsules} alt="capsules phot" />
                <button className='link_button'>Capsules</button>
            </div>
            <div className="link link2" onClick={() => setState({show: true})}>
                <img src={crew} alt="crew phot" />
                <button className='link_button'>Crew</button>
            </div>
            <div className="link link3" onClick={() => setState({show: true})}>
                <img src={rockets} alt="rockets phot" />
                <button className='link_button' >Rockets</button>
            </div>
            <div className="link link4" onClick={() => setState({show: true})}>
                <img src={details} alt="details phot" />
                <button className='link_button'>Details</button>
            </div>
        </div>
        </div>
        <Illustration />
        </div>
        </>
    )
}

export default Links
