import React, { useState, useEffect } from 'react';
import useAppData from "../hooks/useAppData";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CheckIcon from '@material-ui/icons/Check';
import './Maintenance.scss';
import Notifications from './Notifications';
import Alert from '@material-ui/lab/Alert';

import 'moment';
const moment = require('moment');
const axios = require('axios');


export default function Maintenance() {
  const [tasks, setTasks] = useState([]);
  const { state, markComplete } = useAppData();
  const { id } = useParams();

  useEffect(() => {
    buildTasks(state.maintenance)
  }, [state])


  // const task_date = function (day) {
  //   const harvest_date = moment().add(day, 'days')
  //   const counter = moment(harvest_date).fromNow();
  //   return counter;
  //   }

  // builds the tasks for the plots. Used in Maintenance.jsx
  const buildTasks = function (tasks) {
    const waterdays = []
    const myTasks = tasks.filter(plant => plant.plot_id === parseInt(id) && plant.planted_date !== null);
    let t = 1
    if (myTasks.length > 0) {
      myTasks.map(x => {
        let name = x.name
        let time = x.water_time
        let i = 1
        while (i < 10) {
          let waterObj = { name: `Water ${name}`, time: time * i }
          let fertilize = { name: 'Fertilize Garden', time: 10 * i / 2 }
          let weed = { name: "Weed Garden", time: 7 * i }
          if (i % 2 == 0) {
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
    <main className="chore-card">
      {/* <Notifications tasks={tasksToNotify}
        /> */}
      <div className="chore-container">
        <div className="chore-hdr">Garden Chores</div>
        <table className="chore-instructions">
          <thead >
            <tr >
              <th>TASK</th>
              <th>DATE</th>
              <th>DONE</th>
            </tr>
          </thead>
          <tbody >
            {tasks.map((x, i) =>
              <tr >
                <td>
                  <strong>{x.name}</strong>
                </td>
                <td>
                  in {x.time} days
                </td>
                <td>
                    <CheckCircleRoundedIcon className="done" onClick={() => removeTask(x.name, x.time)} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}