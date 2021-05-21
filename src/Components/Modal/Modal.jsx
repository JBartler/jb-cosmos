import React from 'react'

import './Modal.css'

function Modal({title, name}) {
    
    return (
        <>
        <div className="modalSection">
            <div className="apiName">
                {title}
            </div>
            <div className="apiStatus">
                {name}
            </div>
        </div>
        </> 
    )
}

export default Modal;
