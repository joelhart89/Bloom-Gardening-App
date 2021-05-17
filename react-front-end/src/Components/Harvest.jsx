import React, { useState, useEffect } from 'react';
import useAppData from "../hooks/useAppData";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import './Harvest.scss';
const moment = require('moment');
const axios = require('axios');

// test to map over all planted veg and calculate harvest dates

const getProgress = function (dtePlanted, daysToHarvest) {
  let planted = moment(dtePlanted);
  let currentDay = moment();
  let days = currentDay.diff(planted, "days") * 100 / daysToHarvest;
  if (days < 0) {
    return "100%";
  } else {
    return Math.round(days) + "%";
  }
}

export default function Harvest() {
  // const classes = useStyles();
  let { id } = useParams();
  const { state, setState, markComplete } = useAppData();
  console.log(state.harvest);


  useEffect(() => {
  }, [state])

  const removeHarvest = function (name) {
    const found = state.harvest.find(harvest => harvest.name === name);
    const newHarvest = state.harvest.filter(harvest => harvest !== found);
    setState({ ...state, harvest: newHarvest })
  }

  // getHarvestDate()

  const harvestDate = function (planted, harvest) {
    const harvest_date = moment(planted).add(harvest, 'days')
    const counter = moment(harvest_date).fromNow();
    console.log(harvest);
    return counter;
  }

  return (
    <main className="harvest-card">
      <div className="harvest-container">
        <h2>Harvesting Schedule</h2>
        <table className="harvest-schedule">
          <thead >
            <tr >
              <th></th>
              <th>Progress</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="body">
            {state.harvest.map(x =>
              <tr>
                <td >
                  <img
                    className="sprout"
                    src={"../images/avatars/sprout.png"}
                    alt="sprout"
                  />
                </td>
                <td>
                  <div className="progress" >
                    <div className="progress-bar" style={{ width:getProgress(x.planted_date, x.harvest_date), backgroundColor:(x.colour) }}></div>
                  </div>
                </td>
                <td >
                  <img
                    className="avatar"
                    src={x.avatar_url}
                    alt="img"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}