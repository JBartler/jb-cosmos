import React, {useContext,useEffect, useState} from 'react'
import { Context } from '../Store/GlobalStore'

import capsules_photo from '../../Assets/Capsules.png'
import crew_photo from '../../Assets/Crew.png'
import rockets_photo from '../../Assets/Rockets.png'
import starlink_photo from '../../Assets/Details.png'
import closePhoto from '../../Assets/close.svg'
import sortPhoto from '../../Assets/ic16-import-export.png'

import '../Links/Links.css'

import Modal from '../Modal/Modal'
import Illustration from '../Illustration/Illustration'


function Links() {

    const [state, setState] = useContext(Context);

    const [res, setRes] = useState([]);
    const [name, setName] =useState('');
    const [firstColumn, setFirstColumt] =useState('');
    const [secoundColumn, setSecoundColumn] =useState('');
    const [loading, setLoading] = useState(false)

        useEffect(() => {
            getCapsules()            
        }, []);

        useEffect(() => {
            getCrew()
        }, []);
        useEffect(() => {
            getRockets()
        }, []);
        useEffect(() => {
            getStarlink()
        }, []);

        const getCapsules = async () => {
            try{
            const response = await fetch('https://api.spacexdata.com/v4/capsules');
            const data = await response.json();
            const data_array = [...data];
            setRes(data_array);
            setLoading(true);
            } catch(err) {
                alert(err.message)
            }
        }
        const getCrew = async () => {
            try{
            const response = await fetch('https://api.spacexdata.com/v4/crew');
            const data = await response.json();
            const data_array = [...data];
            setRes(data_array);
            setLoading(true);
            } catch(err) {
            alert(err.message)
            }
        }
        const getRockets = async () => {
            try{
            const response = await fetch('https://api.spacexdata.com/v4/rockets');
            const data = await response.json();
            const data_array = [...data];
            setRes(data_array);
            setLoading(true);
            } catch(err) {
            alert(err.message)
            }
        }
        const getStarlink = async () => {
            try{
            const response = await fetch('https://api.spacexdata.com/v4/starlink');
            const data = await response.json();
            const data_array = [...data];
            setRes(data_array);
            setLoading(true);
            } catch(err) {
            alert(err.message)
            }
        }

    return (
        <>     
        <div className="section">
        <div className="mainLinks">
        <div className='linksContainer'>
            <div className="link link1"  onClick={() => {
                setState({show: true}); 
                getCapsules(); 
                setName("Capsules"); 
                setFirstColumt("Type"); 
                setSecoundColumn('Status')}}>
                <img src={capsules_photo} alt="capsules phot" />
                <button className='linkButton'><span>Capsules</span></button>
            </div>
            <div className="link link2" onClick={() => {
                setState({show: true}); 
                getCrew();
                setName("Crew"); 
                setFirstColumt("Name");
                setSecoundColumn('Status')}}>
                <img src={crew_photo} alt="crew phot" />
                <button className='linkButton'><span>Crew</span></button>
            </div>
            <div className="link link3" onClick={() => {
                setState({show: true}); 
                getRockets();setName("Rockets"); 
                setFirstColumt("Name"); 
                setSecoundColumn('Type')}}>
                <img src={rockets_photo} alt="rockets phot" />
                <button className='linkButton'><span>Rockets</span></button>
            </div>
            <div className="link link4" onClick={() => {
                setState({show: true}); 
                getStarlink();setName("Starlink"); 
                setFirstColumt("Object name"); 
                setSecoundColumn('version')}}>
                <img src={starlink_photo} alt="details phot" />
                <button className='linkButton'><span>Starlink</span></button>
            </div>
        </div>
        </div>
            <Illustration />
        </div>

        <>
        <div className={state.show ? "modalContainer" : "hide"} >
            
            <div className="modal">
                <div className="modalNavbar">
                        <h2 className='modalTitle'>{name}</h2>
                <div className="modalClose">
                        <div id="close" onClick={() => setState({show: false})}>
                            <img src={closePhoto} alt="close svg" />   
                        </div>
                </div>
                </div>
                <div className="type">
                    <div className="typeTitle">
                        <div className="titleModalSection">
                            <div className="iconModalSection">
                                <div className="firstColumn">{firstColumn}</div>
                                    <div className="icon">
                                        <img className='cos' src={sortPhoto} alt="up and down arrow" />
                                    </div>
                            </div>
                            <div className="secoundColumn">
                                <p>{secoundColumn}</p></div>
                        </div>
                        <div className="modalMapContainer">
                            {loading ? res.map(prop =>(
                                <Modal
                                key= {prop.id}
                                title={prop.name || prop.type || prop.spaceTrack.OBJECT_NAME}
                                name={prop.status || prop.type || prop.version || prop.active}
                                />
                            )) : "Loading"}
                            <div className="shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        </>        
    )
    }
export default Links