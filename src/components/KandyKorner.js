import React from "react"
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./KandyKorner.css"

const Opening = () => (
    <header className="mainPageHeader">
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
    </header>
)

export const KandyKorner = () => (
    <>
        <Opening />

        <Route
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
        </Route>

    </>
)
