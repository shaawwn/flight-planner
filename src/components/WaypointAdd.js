import {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faCaretDown, faCheck} from '@fortawesome/free-solid-svg-icons'

function WaypointAdd({toggleAddWaypointMenu, toggle, finalize}) {

    // toggleMenu passed so that it can be reflected in the App render
    function handleClick() {
        toggleAddWaypointMenu()
    }

    return(
        <div className="waypoint waypoint-add" onClick={handleClick}>
            {toggle === false ? <FontAwesomeIcon icon={faPlus} size="3x" className="btn" />
            :<FontAwesomeIcon icon={faCaretDown} size="3x" className="btn" />
            }
            <p>Add Waypoint</p>
            <FontAwesomeIcon icon={faCheck} className="btn" onClick={finalize}/>
        </div>
    )
}

export default WaypointAdd