import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'

import Waypoint from '../components/Waypoint'
function PlannerBody({waypoints, addWaypoint}) {

    useEffect(() => {

    }, [waypoints])

    return(
        <div className="planner-body">
            {waypoints ?
            waypoints.map((waypoint) => 
                <Waypoint key={uuidv4()} waypoint={waypoint}/>
            )
            :<span>No waypoints</span>
            }
        </div>
    )
}

export default PlannerBody