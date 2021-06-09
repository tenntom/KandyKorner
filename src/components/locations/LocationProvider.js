import React, {useState, createContext} from "react"

export const LocationContext = createContext()
//This saves the variables and functions and makes them available for other modules.

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])
    //setting our state variable for locations

    const getLocations = () => {
        return fetch("http://localhost:7077/locations")
        .then(res=> res.json)
        .then(setLocations)
    }

    return (
        <LocationContext.Provider value = {{
            locations, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}