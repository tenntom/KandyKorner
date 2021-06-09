import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { Link, useHistory } from "react-router-dom"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <h2>Locations</h2>
            <div className="locations">
                {
                    locations.map(location => {
                        return (
                            <div className="location" key={location.id}>
                                <h3>{location.name}</h3>
                                <p>Total Area: {location.area} SF
                                Handicapped Accessible: {location.accessible}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

