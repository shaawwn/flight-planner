import {useState, useEffect} from 'react';

// import style from './styles/style.css'
import style from './styles/_style.css';
import RouteHeader from '../src/components/RouteHeader'
import DepartureArrivalInput from '../src/components/DepartureArrivalInput'
import Waypoint from '../src/components/Waypoint'
import WaypointAdd from '../src/components/WaypointAdd'
import WaypointAddMenu from '../src/components/WaypointAddMenu'
import Timer from '../src/components/Timer'
import PlannerBody from '../src/components/PlannerBody'
import Backfill from '../src/components/Backfill'

function App() {


  const [waypoints, setWaypoints] = useState([])

  // Add waypoint should be the default at the top, hower, when it is clicked, it should be replaces witht he menu
      // Or, at the least, should have a small animation like a caret rotation to show it as a dropdown
  const [displayMenu, setDisplayMenu] = useState(false) // 

  const [planInput, setPlanInput] = useState(false) // false = haven't put in airport codes yet
  const [planFinalize, setPlanFinalize] = useState(false) // set true to complete plan and rmeove add waypoint option
  const [departure, setDeparture] = useState("DEP")
  const [arrival, setArrival] = useState('ARR')



  function toggleAddWaypointMenu() {
    // toggle the addWaypoint menu on/off
    if(displayMenu === true) {
      setDisplayMenu(false)
    } else {
      setDisplayMenu(true)
    }

  }

  function addDepartureArrivalCodes(dep, arr) {
    // console.log("Adding...", dep, arr)
    setDeparture(dep)
    setArrival(arr)
    setPlanInput(true)
  }

  function addWaypoint(waypoint) {
    // console.log("Adding waypoint", waypoint)
    setWaypoints((prevWaypoints) => [...prevWaypoints, waypoint])
  }

  function displayWaypointCreation() {

    if(planFinalize) {
      return false
    }
    return(
      <>
        <WaypointAdd toggleAddWaypointMenu={toggleAddWaypointMenu} toggle={displayMenu} finalize={setPlanFinalize}/>
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

  }, [])

  return (
    <div className="App">
      {planInput === false ? <DepartureArrivalInput addDepartureArrivalCodes={addDepartureArrivalCodes}/> : <RouteHeader departure={departure} arrival={arrival}/>}
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
