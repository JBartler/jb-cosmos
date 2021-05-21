import React,{useContext,useEffect,useState} from 'react'
import {Context} from '../Store/GlobalStore'

import './Modal.css'

function Modal({title}) {

    const [state, setState] = useContext(Context);



    return (
        <>
            <div className="api_name">
                {title}
            </div>
            <div className="api_status">
                
            </div>
        </> 
    )
}

export default Modal;
