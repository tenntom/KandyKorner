import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { KandyKorner } from "./components/KandyKorner"

ReactDOM.render (
    <React.StrictMode>
        <Router>
            <KandyKorner />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);