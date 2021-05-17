import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from '@material-ui/core/Button';
import useAppData from "../hooks/useAppData";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const moment = require('moment');
const axios = require('axios');

const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: '7%',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',

    // justifyContent: 'space-between'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  heads: {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-around',
  },
  twidth: {
    flex: 1,
    width: '100%'
  },
  progress: {
    height: '20px',
    width: "100%",
    backgroundColor: 'lightGrey',
  },
  progressBar: {
    height: '20px',
    width: '40%',
    backgroundColor: 'green',
  }
});

// test to map over all planted veg and calculate harvest dates

const getProgress = function (dtePlanted, daysToHarvest) {
  let planted = moment(dtePlanted);
  let currentDay = moment();
  let days = planted.diff(currentDay, "days") * 100 / daysToHarvest;
  console.log("planted", planted);
  console.log("current", currentDay);
  console.log("harvest", daysToHarvest);
  console.log("days:", days);
  if (days < 0) {
    return "100%";
  } else {
    return Math.round(days) + "%";
  }
}

export default function Harvest() {
  const classes = useStyles();
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
    <Card className={classes.root}>
      <CardContent className={classes.twidth}>
        <h2>Harvesting Schedule</h2>

        <table className={classes.twidth}>
          <thead >
            <tr >
              <th></th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody >
            {state.harvest.map(x =>
              <tr>
                <td >
                  <img
                    className="avatar"
                    src={x.avatar_url}
                    alt="img"
                  />
                </td>
                <td>
                  <div className={classes.progress} >
                    <div className={classes.progressBar} style={{ width: getProgress(x.planted_date, x.harvest_date) }}></div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </CardContent>
    </Card>
  );
}