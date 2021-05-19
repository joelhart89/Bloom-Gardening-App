import React, {useEffect, useState} from 'react';
import axios from 'axios';
import VegetableCard from './VegetableCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
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
    },
  },
  test: {
      marginTop: '300px',
  },
}));




export default function Vegetables() {
  const [open, setOpen] = React.useState(true);
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
    

    <div className="info">
       <div className={classes.alert}>
      <Collapse in={open}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </div>
    
    <div className="box"> 
      {/* <Grid 
        // direction="row"
        // justify="center"
        container spacing={10}
      > */}
        {renderVegetableCard(veg)}
      {/* </Grid>  */}

      {/* <VegetableDrawer 
      open = {open}
      handleDrawerOpen = {handleDrawerOpen}
      handleDrawerClose = {handleDrawerClose}
      /> */}
    </div>
    </div>
    
  )
};