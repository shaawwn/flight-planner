import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faCaretDown} from '@fortawesome/free-solid-svg-icons'

function DepartureArrivalInput({addDepartureArrivalCodes}) {

    function handleClick() {

        let departure = document.getElementsByName('departure')[0]
        let arrival = document.getElementsByName('arrival')[0]

        if(!departure.value || !arrival.value) {
            alert("You must enter values for both fields")
            return false
        }

        addDepartureArrivalCodes(departure.value.toUpperCase(), arrival.value.toUpperCase())     
    }
    return(
        <div className="header airport-add">
            <div className="airport-add-input-containr">
                <input name="departure" maxLength="4" type="text" placeholder="Enter Departure" className="airport-add-input"></input>
                <input name="arrival" maxLength="4" type="text" placeholder="Enter Arrival" className="airport-add-input"></input>
            </div>
            <FontAwesomeIcon icon={faPlus} className="btn" onClick={handleClick}/>
        </div>
    )
}

export default DepartureArrivalInput