import React, {useEffect, useState} from 'react';
import axios from 'axios';
import VegetableCard from './VegetableCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import VegetableDrawer from './VegetableDrawer'
import './Vegetables.scss';




export default function Vegetables() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const[veg, setVeg] = useState([]);
   
<<<<<<< HEAD
=======
  const useStyles = makeStyles({

    row: {
     display: "flex",
     justifyContent:'space-evenly',
     marginLeft: '500px',
     margin: 100,
    },

 
  
  });

  const classes = useStyles();
>>>>>>> 118cdc0fd8a1052361ca27c2385cb7abf6e23fe8
  useEffect(() => {
    getAllVeg();
  }, []);

  const renderVegetableCard = (veg) =>{
    const data = veg.map(element => {
      return (
<<<<<<< HEAD
=======
        <Grid item md={3}>
>>>>>>> 118cdc0fd8a1052361ca27c2385cb7abf6e23fe8
        <VegetableCard
         {...element}
        onClick ={handleDrawerOpen} />
      )
    }) 
    return data
  }

  // const renderVegetableDrawer = (veg) =>{
  //   const data = veg.map(element => {
  //     return (
  //       <VegetableDrawer
  //       {...element}/>
        
  //     )
  //   })
  // }

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
<<<<<<< HEAD
    <div className="box"> 
      {/* <Grid 
        // direction="row"
        // justify="center"
        container spacing={10}
      > */}
        {renderVegetableCard(veg)}
      {/* </Grid>  */}
=======
    <div> 
    <Grid 
    container spacing={3}>{renderVegetableCard(veg)}
    </Grid> 
>>>>>>> 118cdc0fd8a1052361ca27c2385cb7abf6e23fe8

      <VegetableDrawer 
      open = {open}
      handleDrawerOpen = {handleDrawerOpen}
      handleDrawerClose = {handleDrawerClose}
      />
    </div>
    
  )
};