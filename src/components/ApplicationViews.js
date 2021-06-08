


export const ApplicationViews = () => {
    return (
        <>
        <LocationProvider>
            <Route exact path="/locations">
                <LocationList />
            </Route>
        </LocationProvider>
        </>
    )
}

