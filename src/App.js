import {useState, useEffect} from 'react';

import style from './styles/style.css'

import RouteHeader from '../src/components/RouteHeader'
import Waypoint from '../src/components/Waypoint'
import WaypointAdd from '../src/components/WaypointAdd'
import WaypointAddMenu from '../src/components/WaypointAddMenu'
import Timer from '../src/components/Timer'
import PlannerBody from '../src/components/PlannerBody'

function App() {

  // const [waypoints, setWaypoints] = useState([])
  // const waypoints = {
  //   waypoints: ['1, 2, 4, 5, 5']
  // }
  const [waypoints, setWaypoints] = useState([])

  // Add waypoint should be the default at the top, hower, when it is clicked, it should be replaces witht he menu
      // Or, at the least, should have a small animation like a caret rotation to show it as a dropdown
  const [displayMenu, setDisplayMenu] = useState(false) // 



  function toggleAddWaypointMenu() {
    // toggle the addWaypoint menu on/off
    // console.log("Toggleing menu")
    if(displayMenu === true) {
      setDisplayMenu(false)
    } else {
      setDisplayMenu(true)
    }

  }

  function addWaypoint(waypoint) {
    console.log("Adding waypoint", waypoint)
    setWaypoints((prevWaypoints) => [...prevWaypoints, waypoint])
  }

  function displayWaypointCreation() {

    return(
      <>
        <WaypointAdd toggleAddWaypointMenu={toggleAddWaypointMenu} toggle={displayMenu}/>
        {displayMenu === false ? <span></span>
        :<WaypointAddMenu 
          addWaypoint={addWaypoint}
          toggleAddWaypointMenu={toggleAddWaypointMenu}
          />
        }
      </>
    )
  }
  useEffect(() => {

    // const _waypoints = [
    //     {
    //     'name': 'custom waypoint 1',
    //     'heading': '180°',
    //     'ete': `6'24''`,
    //     },
    //     {
    //       'name': 'custom waypoint 2',
    //       'heading': '279°',
    //       'ete': `9'00''`,
    //     },
    //     {
    //       'name': 'custom waypoint 3',
    //       'heading': '11°',
    //       'ete': `12'24''`,
    //     },
    // ]
    
    // setWaypoints(_waypoints)
  }, [])

  return (
    <div className="App">
      <RouteHeader />
      {displayWaypointCreation()}
      <PlannerBody 
        waypoints={waypoints}
        addWaypoint={addWaypoint}
        />
      <Timer />
    </div>
  );
}

export default App;
