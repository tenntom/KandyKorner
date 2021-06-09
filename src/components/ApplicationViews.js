


export const ApplicationViews = () => {
    return (
        <>
        <LocationProvider>
            <Route exact path="/locations">
                <LocationList />
            </Route>
        </LocationProvider>
        {/* <ProductProvider>
            <Route exact path="/products"></Route>
        </ProductProvider> */}
        </>
    )
}

