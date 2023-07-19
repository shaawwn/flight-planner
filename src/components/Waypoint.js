import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faCheck} from '@fortawesome/free-solid-svg-icons'

function Waypoint({waypoint}) {

    const [status, setStatue] = useState(waypoint.status)
    const [style, setStyle] = useState({'backgroundColor': '#dfedda'})
    const [icon, setIcon] = useState(faLocationDot)

    function toggleStatusDisplay() {
        // TODO
    }
    function handleClick(e) {
        if(waypoint.status === 'pending') {
            if(window.confirm("Mark waypoint as complete?")) {
                console.log("Marking waypoint as complete", e.target.parentNode.parentNode)
                setStyle({'background-color': '#74D154'})
                setIcon(faCheck)
                // change the icon and styling to reflect a completed waypoint (green, checkmark)
            }
        } 
    }
    return(
        <div className="waypoint" style={style}>
            {/* Name, desc, heading, ete */}
            <FontAwesomeIcon 
                icon={icon} 
                size="2x" 
                className="waypoint-pending btn"
                onClick={(e) => handleClick(e)}
                />
            <div className="waypoint-content">
                <p className="waypoint-cell">{waypoint.name}</p>
                {/* <div className="waypoint-desc"> */}
                <p className="waypoint-cell waypoint-desc">{waypoint.desc}</p>
                {/* </div> */}
                <p className="waypoint-cell">{waypoint.heading}</p>
                <p className="waypoint-cell">{waypoint.ete}</p>
            </div>

        </div>
    )
}

export default Waypoint