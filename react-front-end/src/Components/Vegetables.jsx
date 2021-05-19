import React, {useEffect, useState} from 'react';
import axios from 'axios';
import VegetableCard from './VegetableCard';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from "@material-ui/core/Grid";
import VegetableDrawer from './VegetableDrawer'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import './Vegetables.scss';


const useStyles = makeStyles((theme) => ({
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      fontSize: "20px",
    },
  },
}));


export default function Vegetables() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = React.useState(true);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const[veg, setVeg] = useState([]);
   
  useEffect(() => {
    getAllVeg();
  }, []);

  const renderVegetableCard = (veg) =>{
    const data = veg.map(element => {
      return (
        <VegetableCard
         {...element}
        onClick ={handleDrawerOpen} />
      )
    }) 
    return data
  }

  const getAllVeg = () => {
    axios.get ('/api/vegetables')
    .then ((res) =>{
      const allVeg = res.data;
      //add data to state
      setVeg(allVeg)
    })
    .catch(error => console.error(`Error: ${error}`))
  }

  return (
    <div className="box"> 
    <div className={classes.alert}>
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
            Read through the vegetables and add them you your cart.
            When you're ready, click buildmygarden to get a personlized gardening plan.
            <br/>
            Peppers indicate the growing difficulty
          </div>
        </Alert>
      </Collapse>
    </div>
        {renderVegetableCard(veg)}
      <VegetableDrawer 
      open = {open}
      handleDrawerOpen = {handleDrawerOpen}
      handleDrawerClose = {handleDrawerClose}
      />
    </div>
  )
};