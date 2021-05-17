import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Notifications from './Notifications';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useAppData from "../hooks/useAppData";
import notify from "../Components/Notifications"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { now } from 'moment';

const moment = require('moment');
const axios = require('axios');

const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: '10%',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: '300px',
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
    width: '100%',
    justifyContent: 'center'
  }
});

export default function Maintenance() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const { state, markComplete } = useAppData();
  const { id } = useParams();

  
  useEffect(() => {
    buildTasks(state.maintenance)
  }, [state])


  const task_date = function (day) {
    const harvest_date = moment().add(day, 'days')
    const counter = moment(harvest_date).fromNow();
    return counter;
    }

  // builds the tasks for the plots. Used in Maintenance.jsx
  const buildTasks = function(tasks) {
    const waterdays = []
    const myTasks = tasks.filter(plant => plant.plot_id === parseInt(id) && plant.planted_date !== null);
    let t = 1
    if (myTasks.length > 0) {
      myTasks.map(x => {
        let name = x.name
        let time = x.water_time
        let i = 1
        while (i < 10) {
          let waterObj = {name: `Water ${name}`, time: time*i}
          let fertilize = {name: 'Fertilize Garden', time: 10*i/2}
          let weed = {name: "Weed Garden", time: 7*i}
          if (i % 2 == 0 ) {
            waterdays.push(fertilize)
          }
          waterdays.push(waterObj)
          waterdays.push(weed)
          i++;
        }
      })
      const sorted = waterdays.sort((a, b) => (a.time > b.time) ? 1 : -1);
      setTasks(sorted)
    }
  }
  
  const removeTask = function (name, time) {
    const found = tasks.find(task => task.name === name && task.time === time);
    const newTasks = tasks.filter(task => task !== found);
    setTasks(newTasks);
  }
 
   
  const tasksToNotify = tasks.filter(task => task.time <= 3)
  return (
    
    <Card className={classes.root}>
        <Notifications tasks={tasksToNotify}
        />
      <CardContent className={classes.twidth}>
        <h2>Garden Chores</h2>
        <table className={classes.twidth}>
          <thead >
            <tr >
              <th>Task</th>
              <th>Date</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map(x => 
          <tr>
            <td>
              {x.name}
            </td>
            <td>
              {task_date(x.time)}
            </td>
            <td>
            <CardActions>
              <Button size="small" 
              onClick={() => removeTask(x.name, x.time)} 
              variant="contained" color="primary">Complete</Button>
            </CardActions>
            </td>
          </tr>
            )}
          </tbody>
          
        </table>
      </CardContent>
    </Card>
  
  );
}