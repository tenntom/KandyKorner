import React from "react"
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./KandyKorner.css"

const Opening = () => (
    <header className="mainPageHeader">
        <h2>Kandy Korner</h2>
        <small>Sweet Treats for Sweet People</small>
        <address>
            <div>Visit Us Today!</div>
            <div>500 Candyland Parkway</div>
        </address>
    </header>
)

export const KandyKorner = () => (
    <>
        <Opening />
        <ApplicationViews />

        {/* <Route
        render={() => {
            if (localStorage.getItem("kandy_customer")) {
                return (
                    <>
                    <Navbar />
                    <ApplicationViews />
                    </>
                );
            } else {
                return <Redirect to="./login" />
            }
        }
        }
        />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route> */}

    </>
)
