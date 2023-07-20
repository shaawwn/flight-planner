import {useState, useEffect} from 'react';

function RouteHeader({departure, arrival}) {


    return(
        <div className="header">
            <h1>{departure} -{'>'} {arrival}</h1>
        </div>
    )
}

export default RouteHeader