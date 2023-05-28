import React from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react'
import axios from "axios";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import ChartSDK from "./chart";


const Dashboard = () => {

  return <div className="App">
    <h1 className="title">Dashboard Charts</h1>
    <div class="block">
        <Link to="/dashboard-new" className="button is-primary mt-2">Add New</Link>
    </div>
    <div className="box">
      <ChartSDK height={'450px'} width={'600px'} chartId={'63ed03ae-7c5a-4243-8257-d92a3e540cd8'}/>
      <ChartSDK height={'450px'} width={'600px'} chartId={'63ed2786-6d09-4096-8002-dfc90c6df359'}/>

    </div>
  </div>


}
export default Dashboard
