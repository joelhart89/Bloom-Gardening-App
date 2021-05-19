import React, {useEffect, useState} from 'react';
import axios from 'axios';
import VegetableCard from './VegetableCard';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from "@material-ui/core/Grid";
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
      {/* <Grid 
        // direction="row"
        // justify="center"
        container spacing={10}
      > */}
        {renderVegetableCard(veg)}
      {/* </Grid>  */}

      <VegetableDrawer 
      open = {open}
      handleDrawerOpen = {handleDrawerOpen}
      handleDrawerClose = {handleDrawerClose}
      />
    </div>
    
  )
};