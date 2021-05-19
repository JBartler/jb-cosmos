import React,{ useState } from 'react'

import './Modal.css'

function Modal() {

    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
        <>
            <div className={show ? "modal_container" : "hide"} >
            <div className="modal">
                <h2>title</h2>
                <div className="close">
                    <button onClick={closeModal}>X</button>
                    {console.log(show)}
                </div>
                {/* <input type="text" /> */}
                <div className="type">
                    <div className="type_title">
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="status">
                    <div className="icon"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal
