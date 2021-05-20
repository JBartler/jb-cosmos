import React,{useContext} from 'react'
import {Context} from '../Store/GlobalStore'

import './Modal.css'

function Modal() {

    const [state, setState] = useContext(Context);

    return (
        <>
            <div className={state.show ? "modal_container" : "hide"} >
            <div className="modal">
                <h2>title</h2>
                <div className="close">
                    <button id="close" onClick={() => setState({show: false})}>X</button>
                </div>
                <div className="type">
                    <div className="type_title">
                        <div className="icon"></div>
                        <p>typ</p>
                    </div>
                </div>
                <div className="status">
                    <div className="icon"></div>
                    <p>status</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal
