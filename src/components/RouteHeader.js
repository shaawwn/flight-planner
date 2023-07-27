import {useState, useEffect} from 'react';

function RouteHeader({departure, arrival, depRunway, arrRunway}) {


    return(
        <div className="header">
            <h1>{departure} -{'>'} {arrival}</h1>
            <h2>{depRunway} -{'>'} {arrRunway}</h2>
        </div>
    )
}

export default RouteHeader