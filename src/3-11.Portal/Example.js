import React from 'react'
import { createPortal } from 'react-dom'
import ThankyouDialog from './ThankyouDialog'

const Portal = (props) => {
    return createPortal(props.children, document.getElementById("portal"));
}

const Example = () => {
    return (
        <div onClick={()=> console.log('div')}>
            {/* div id="portal"에 속해있음 */}
            <Portal>
                <ThankyouDialog/>
            </Portal>
            <div style={{ position: "absolute", top: "200px"}}>
                <button>하하하</button>
            </div>
        </div>
    )
}

export default Example