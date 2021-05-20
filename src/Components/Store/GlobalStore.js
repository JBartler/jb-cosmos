import React, {useState} from 'react'


let initialState = {
    show: false
}

export const Context = React.createContext();

function GlobalStore({children}) {

    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state,setState]}> {children} </Context.Provider>
    )
}


export default GlobalStore
