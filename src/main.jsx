import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import EventTrackerHOC from './components/Eventtrack/hoc'; // Import the HOC
import ReactGA from 'react-ga';

import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
 <EventTrackerHOC>

<App/>



</EventTrackerHOC>
</Router>
)
