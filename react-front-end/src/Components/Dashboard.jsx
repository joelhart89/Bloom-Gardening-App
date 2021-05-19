import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Planting from "./Planting";
import Maintenance from "./Maintenance";
import Harvest from "./Harvest";
import Weather from "./Weather/Weather";

const useStyles = makeStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <main className={classes.column}>
      <section>
        <Weather />
      </section>
      <section className={classes.row}>
        <section className={classes.column}>
          <Planting />
          <Harvest />
        </section>
        <Maintenance />
      </section>
    </main>
  )
}