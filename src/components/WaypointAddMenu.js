import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function WaypointAddMenu({addWaypoint, toggleAddWaypointMenu}) {

    function handleClick(e) {
        // console.log("Clicking add waypont", e)
        let name = document.getElementsByName('name')[0]
        let desc = document.getElementsByName('desc')[0]
        let heading = document.getElementsByName('heading')[0]
        let ete = document.getElementsByName('ete')[0]
        let hours = document.getElementsByName('ete-hours')[0]
        let minutes = document.getElementsByName('ete-minutes')[0]
        let seconds = document.getElementsByName('ete-seconds')[0]
  
        if(parseInt(minutes.value) > 59 || parseInt(seconds.value) > 59) {
            alert("Please enter value minutes and seconds")
            return false
        } 

        if(desc.value === '') {
            desc.value = 'No description'
        }
        let newWaypoint = {
            'name': name.value,
            'desc': desc.value,
            'heading': heading.value + '°',
            // 'ete': ete.value,
            'ete': formatHoursMinutesSeconds(hours.value, minutes.value, seconds.value),
            'status': 'pending' // pending/complete/could not complete
        }

        addWaypoint(newWaypoint)
        toggleAddWaypointMenu()
    }

    function formatHoursMinutesSeconds(hours, minutes, seconds) {
        // format the raw input values of hours, mins, secs to display like 99:59:59, or 00:15:25
        // dropping hours if it has a value of 0

        if(hours === 0 || hours === '') {
            return `${minutes}:${seconds}`
        }
        return `${hours}:${minutes}:${seconds}`
    }

    return(
        <div className="waypoint-add-menu">
            {/* Add inputs htmlFor name, short desc, heading, ete */}
            <div className="waypoint-add-menu-row">
                <label htmlFor="name">Waypoint</label>
                <input name="name" type="text" placeholder="Enter a waypoint name"></input>
            </div>
            <div className="waypoint-add-menu-row">
                <label htmlFor="desc">Description</label>
                <input name="desc" type="text" maxLength="64" placeholder="Enter a short description"></input>
            </div>
            <div className="waypoint-add-menu-row">
                <label htmlFor="heading">Heading</label>
                <input name="heading" type="number" placeholder="Enter a heading (degrees)"></input>
            </div>
            <div className="waypoint-add-menu-row">
                <label htmlFor="ete">ETE</label>
                {/* <input name="ete" type="text" placeholder="Enter an ETE (Hours/Minutes/Seconds)"></input>   */}
                <input name="ete-hours" type="number" min="0" max="99" placeholder="Hours"></input>
                <input name="ete-minutes" type="number" min="0" max="59" placeholder="Minutes"></input>
                <input name="ete-seconds" type="number" min="0" max="59" placeholder="Seconds"></input>
            </div>
            <div className="waypoint-add-btn-container">
                <p>Confirm waypoint</p>
                <FontAwesomeIcon 
                    icon={faPlus} 
                    size="3x" 
                    className="waypoint-add-btn btn"
                    onClick={(e) => handleClick(e)}
                    />
            </div>

        </div>
    )
}

export default WaypointAddMenu;