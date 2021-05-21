import React, {useContext,useEffect, useState} from 'react'
import { Context } from '../Store/GlobalStore'
import Modal from '../Modal/Modal'


import Illustration from '../Illustration/Illustration'

import capsules_photo from '../../Assets/Capsules.png'
import crew_photo from '../../Assets/Crew.png'
import rockets_photo from '../../Assets/Rockets.png'
import starlink_photo from '../../Assets/Details.png'

import '../Links/Links.css'



function Links() {

    const [state, setState] = useContext(Context)

    const [res, setRes] = useState([])
    const [name, setName] =useState('')
    const [firstColumn, setFirstColumt] =useState('')
    const [secoundColumn, setSecoundColumn] =useState('')

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
            const data_array = [...data]
            setRes(data_array)
        }
        const getCrew = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/crew')
            const data = await response.json();
            const data_array = [...data]
            setRes(data_array)
        }
        const getRockets = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/rockets')
            const data = await response.json();
            const data_array = [...data]
            setRes(data_array)
        }
        const getStarlink = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/starlink')
            const data = await response.json();
            const data_array = [...data]
            setRes(data_array)
        }

    return (
        <>     
        <div className="section">
        <div className="main_links">
        <div className='links_container'>
            <div className="link link1"  onClick={() => {setState({show: true}); getCapsules(); setName("Capsules"); setFirstColumt("Type"); setSecoundColumn('Status')}}>
                <img src={capsules_photo} alt="capsules phot" />
                <button className='link_button'>Capsules</button>
            </div>
            <div className="link link2" onClick={() => {setState({show: true}); getCrew();setName("Crew"); setFirstColumt("Name"); setSecoundColumn('Status')}}>
                <img src={crew_photo} alt="crew phot" />
                <button className='link_button'>Crew</button>
            </div>
            <div className="link link3" onClick={() => {setState({show: true}); getRockets();setName("Rockets"); setFirstColumt("Name"); setSecoundColumn('Type')}}>
                <img src={rockets_photo} alt="rockets phot" />
                <button className='link_button' >Rockets</button>
            </div>
            <div className="link link4" onClick={() => {setState({show: true}); getStarlink();setName("Starlink"); setFirstColumt("Object name"); setSecoundColumn('version')}}>
                <img src={starlink_photo} alt="details phot" />
                <button className='link_button'>Starlink</button>
            </div>
        </div>
        </div>
        <Illustration />
        </div>
        <>

        <div className={state.show ? "modal_container" : "hide"} >
            <div className="modal">
                <h2>{name}</h2>
                <div className="close">
                    <button id="close" onClick={() => setState({show: false})}>X</button>
                </div>
                <div className="type">
                    <div className="type_title">
                        <div className="icon"></div>
                        <p>{firstColumn}</p>
                        <p>{secoundColumn}</p>
                        {res.map(prop =>(
                            <Modal
                            key= {prop.id}
                            title={prop.name || prop.type || prop.spaceTrack.OBJECT_NAME}
                            name={prop.status || prop.type || prop.version || prop.active}
                            />
                        ))}
                    </div>
                </div>
                <div className="status">
                    <div className="icon"></div>
                </div>
            </div>
        </div>
        </>
        </>

        
    )
    }

export default Links