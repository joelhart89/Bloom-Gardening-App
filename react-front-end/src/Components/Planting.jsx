import React, { useState, useEffect } from 'react';
import useAppData from "../hooks/useAppData";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './Planting.scss';

const axios = require('axios');

export default function Planting() {
  const [plants, setPlants] = useState([]);
  let { id } = useParams();
  const { state, markComplete, plant } = useAppData();


  useEffect(() => {
    getPlotVeg(id)
  }, [state]);

  // get tasks per plots_vegs.
  const getPlotVeg = function (plotID) {
    return axios.get(`/api/plots/${plotID}`)
      .then(res => {
        const notPlanted = res.data.filter(plant => plant.plot_id === parseInt(id));
        setPlants(notPlanted)
      })
      .catch(err => console.log(err));
  }

  const isPlanted = function (plant) {
    return (plant ? true : false)
  }

  // const removePlanting = function (name) {
  //   const found = plants.find(task => task.name === name );
  //   const newPlants = plants.filter(task => task !== found);
  //   setPlants(newPlants);
  // }

  return (
    <main className="plant-card">
      <div className="plant-container">
        <h2 className="plant-hdr">Planting Instructions</h2>
        <table className="plant-instructions">
          <thead >
            <tr >
              <th></th>
              <th>Vegetable</th>
              <th>Sunlight</th>
              <th>Spacing</th>
              <th>Depth</th>
              <th>Completed</th>
            </tr>
          </thead>

          <tbody className="plant-body">
            {plants.map((x, i) =>
              <tr className={isPlanted(x.planted_date) ? "strike" : ""}>
                <td >
                  <img
                    className="avatar"
                    src={x.avatar_url}
                    alt="img"
                  />
                </td>
                <td>
                  <strong>{x.name}</strong>
                </td>
                <td>
                  {x.sun_required} hours per day
                </td>
                <td>
                  {x.space} inches
                </td>
                <td>
                  {x.depth}cm
                </td>
                <td>
                  <input
                    type="checkbox"
                    {...isPlanted(x.planted_date) ? "checked" : "unchecked"}
                    onClick={() => {
                      markComplete(plants[i]);
                      plant(x.id);
                    }}
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