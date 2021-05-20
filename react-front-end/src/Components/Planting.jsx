import React, { useState, useEffect } from 'react';
import useAppData from "../hooks/useAppData";
import { useParams } from "react-router-dom";
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import 'font-awesome/css/font-awesome.min.css';
import './Planting.scss';

const axios = require('axios');

export default function Planting() {
  const [plants, setPlants] = useState([]);
  const [info, setInfo] = React.useState(true);
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


  return (
    <main className="plant-card">
      <div className="plant-container">
        <div className="plant-hdr">Planting Instructions</div>
        <Collapse in={info}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setInfo(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <div className="fontSize">
              Once you've planted your vegetables, check them off below!
          </div>
          </Alert>
        </Collapse>
        <table className="plant-instructions">
          <thead >
            <tr >
              <th></th>
              <th>VEGETABLE</th>
              <th>SUNLIGHT</th>
              <th>SPACING</th>
              <th>DEPTH</th>
              <th>PLANTED</th>
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
                  <CheckCircleRoundedIcon className="plant-done" onClick={() => {
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