import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import WeatherItem from './WeatherItem';
import { useState, useEffect } from "react";

const lat = 49.2497;
const lon = -123.1193;
// const cityId = 6173331;
const apiKey = 'f2970ccf10fb5df7afd096a5f96ab733';
// const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`;
const weatherUrlCF = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly}&appid=${apiKey}`


const useStyles = makeStyles({
  root: {
    width: '1000px',
    height: '300px',
    marginLeft: '100px',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
  },
  heads: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centerCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  // weather: {
  //   margin: '100px',
  // }
});

export default function Weather() {
  const classes = useStyles();
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      await axios.get(weatherUrlCF)
        .then((response) => {
          console.log(response);
          setWeatherData(response.data.daily);
        });
    }
    fetchWeather();
  }, [])

  return (
    <Card className={classes.root}>
      <section className={classes.weather}>
        <h2>Vancouver, CA</h2>
        <div className={classes.row}>
            {weatherData.map(w => (
              <WeatherItem classname={classes.centerCard}
                key={w.weather[0].id}
                description={w.weather[0].description}
                icon={w.weather[0].icon}
                tempMin={w.temp.min}
                tempMax={w.temp.max}
                dte={w.dt}
              />
            ))}
        </div>
      </section>
    </Card>
  )
}