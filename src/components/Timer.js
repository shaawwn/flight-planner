import {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStopwatch, faClockRotateLeft, faCirclePause} from '@fortawesome/free-solid-svg-icons'


function Timer() {

    const [active, setActive] = useState(false) // timer is active
    const [timerID, setTimerID] = useState()
    const [tick, setTick] = useState(0) // when timer increments, this increases by 1 every second

    function incrementTimer() {
        // increment the timer by one second, rolling over when it reaches minute/hour breakpoints
        setTick((prevTick) => prevTick + 1000)
    }


    function handleClick() {

        if(active) {
            // pause
            clearInterval(timerID)
            setActive(false)

        } else if(!active) {
            // start
            setActive(true)
        }
        // setActive(true)
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

    function formatTimeDisplay(milliseconds) {
        let seconds = (milliseconds / 1000)
        // let minutes = Math.floor((seconds / 60) )
        let minutes = Math.floor((milliseconds / 1000) / 60)
        let hours = Math.floor((minutes) / 60)
        
        seconds = seconds % 60
        minutes = minutes % 60
        hours = hours %60

        // rollover seconds
        if(seconds % 60 < 10) {
            seconds = '0' + seconds
        }
        if(minutes % 60 < 10) {
            minutes = '0' + minutes
        }
        if(hours % 60 < 10) {
            hours = '0' + hours
        }

        return `${hours}:${minutes}:${seconds}`
    }

    function resetTimer() {
        setTick(0)
        setActive(false)
        clearInterval(timerID)
        setTimerID()
    }
    function displayTimer() {
        return(
            <p className="timer-display">{formatTimeDisplay(tick)}</p>
        )
    }

    function displayStopWatchPause() {

        if(active) {
            return(
                <FontAwesomeIcon icon={faCirclePause} 
                    className="timer-icon"
                    onClick={handleClick}
                />
            )
        } else if(!active) {
            return(
                <FontAwesomeIcon 
                    icon={faStopwatch}
                    className="timer-icon"
                    onClick={handleClick}
                />
            )
        }
    }
    useEffect(() => {
        if(active === true) {
            setTimerID(setInterval(() => {
                incrementTimer()
            }, 1000))
        }

    },[active])

    return(
        <div className="timer">
            {/* <FontAwesomeIcon 
                icon={faStopwatch}
                className="timer-icon"
                onClick={handleClick}
            /> */}
            {displayStopWatchPause()}
            {displayTimer()}
            <FontAwesomeIcon 
                icon={faClockRotateLeft}
                className="timer-icon"
                onClick={resetTimer}
            />
        </div>
    )
    
}

export default Timer