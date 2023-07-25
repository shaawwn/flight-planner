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

        if(desc.value === '') {
            desc.value = 'No description'
        }
        let newWaypoint = {
            'name': name.value,
            'desc': desc.value,
            'heading': heading.value + '°',
            'ete': ete.value,
            'status': 'pending' // pending/complete/could not complete
        }

        addWaypoint(newWaypoint)
        toggleAddWaypointMenu()
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
                <input name="desc" type="text" maxLength="30" placeholder="Enter a short description"></input>
            </div>
            <div className="waypoint-add-menu-row">
                <label htmlFor="heading">Heading</label>
                <input name="heading" type="number" placeholder="Enter a heading (degrees)"></input>
            </div>
            <div className="waypoint-add-menu-row">
                <label htmlFor="ete">ETE</label>
                <input name="ete" type="text" placeholder="Enter an ETE (Hours/Minutes/Seconds)"></input>  
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