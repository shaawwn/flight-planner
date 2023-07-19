import {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStopwatch, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons'


function Timer() {

    const [active, setActive] = useState(false) // timer is active

    function incrementTimer() {
        // increment the timer by one second, rolling over when it reaches minute/hour breakpoints
    }


    function handleClick() {
        console.log("Clicking timer icon")
    }

    function displayIcon(icon) {
        return(
            <FontAwesomeIcon 
                icon={icon}
                className="timer-icon"
                onClick={handleClick}
            />
        )
    } 

    return(
        <div className="timer">
            <FontAwesomeIcon 
                icon={faStopwatch}
                className="timer-icon"
                onClick={handleClick}
            />
            <p className="timer-display">00:00:00</p>
            <FontAwesomeIcon 
                icon={faClockRotateLeft}
                className="timer-icon"
                onClick={handleClick}
            />
        </div>
    )
    
}

export default Timer