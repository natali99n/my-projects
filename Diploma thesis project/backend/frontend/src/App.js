import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ElevationList from "./components/elevation_chart/elevationsList";
import EditElevation from "./components/elevation_chart/editElevation";
import AddElevation from "./components/elevation_chart/addElevation";

import PressureList from "./components/pressure_relief/pressureReliefList";
import EditPressure from "./components/pressure_relief/editPressureRelief";
import AddPressure from "./components/pressure_relief/addPressureRelief";

import ChildCareList from "./components/child_care/childCareList";
import EditChildCare from "./components/child_care/editChildCare";
import AddChildCare from "./components/child_care/addChildCare";
import OneCare from "./components/child_care/childCareOne";

import PaediatricChecklist from "./components/paediatric_checklist/paediatricChecklist";
import AddPaediatricChecklist from "./components/paediatric_checklist/addChecklist";

import AddBodyMap from "./components/human_body/humanBody";
import BodyMapList from "./components/human_body/humanBodyList";
import OneBodyMap from "./components/human_body/bodyMapOne";

import Dashboard from "./components/dashboard/dashboard";
import AddDashboard from "./components/dashboard/addData";

import IndexPage from "./indexPage";

import Dashboardlogin from "./components/login/dashboard";
import Login from "./components/login/Login";
import Navbar from "./components/login/navbar";
import Register from "./components/login/Registration";


function App() {

  return (

    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path="/" element={<IndexPage />} />
            <Route exact path="/elevation-chart" element={<ElevationList />} />
            <Route path="/elevation-chart-new" element={<AddElevation />} />
            <Route path="/elevation-chart/edit/:id" element={<EditElevation />} />

            <Route exact path="/pressure-relief" element={<PressureList />} />
            <Route path="/pressure-relief-new" element={<AddPressure />} />
            <Route path="/pressure-relief/edit/:id" element={<EditPressure />} />

            <Route exact path="/child-care" element={<ChildCareList />} />
            <Route path="/child-care-new" element={<AddChildCare />} />
            <Route path="/child-care/edit/:id" element={<EditChildCare />} />
            <Route path="/child-care/:id" element={<OneCare />} />

            <Route path="/paediatric-checklist" element={<PaediatricChecklist />} />
            <Route path="/paediatric-checklist-new" element={<AddPaediatricChecklist />} />

            <Route path="/body-map" element={<BodyMapList />} />
            <Route path="/body-map-new" element={<AddBodyMap />} />
            <Route path="/body-map/:id" element={<OneBodyMap />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-new" element={<AddDashboard />} />


            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboardlogin" element={<Navbar/>, <Dashboardlogin/>} />

          </Routes>
        </div>
      </div>
    </div>
    </Router>

  );
}

 export default App;
