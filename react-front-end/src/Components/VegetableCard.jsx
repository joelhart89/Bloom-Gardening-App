import React from 'react';
import Button from '@material-ui/core/Button';
import useAppData from "../hooks/useAppData";
import './VegetableCard.scss';

export default function VegetableCard(props) {
  const { state, addVegToCart } = useAppData();

  const onClick = function () {
    addVegToCart(props).then(() => {
      props.onClick();
    })
  }

  const level = function (difficulty) {
    let easy = <img className="peppers" src={'../images/avatars/med-pepper.png'} alt={''} />;
    let medium = <img className="peppers" src={'../images/avatars/easy-pepper.png'} alt={''} />;
    let hard = <img className="peppers" src={'../images/avatars/hard-pepper.png'} alt={''} />;

    if (difficulty === 1) {
      return (<div className="row">{easy}</div>);
    } else if (difficulty === 2) {
      return (<div className="row">{medium}{medium}</div>);
    } else if (difficulty === 3) {
      return (<div className="row">{hard}{hard}{hard}</div>);
    }
  }

  return (
    <div className="veg-card">
      <img
        className="media"
        src={props.image_url}
        alt="img"
      />
      <div className="veg-container">
        <div className="row">
          <h2><b>{props.name}</b></h2>
          <div className="diff"></div>
          {level(props.difficulty)}
        </div>
        <p>
          <ul className="body">
            <li>Grows well in {props.climate}&deg;C</li>
            <li>Needs {props.sun_required} hours of sunlight per day</li>
            <li>Needs to be spaced apart {props.space} centimeters</li>
            <li>Will be ready for harvest {(props.harvest_date) / 7} weeks after planting</li>
          </ul>
        </p>
        <Button size="small" color="primary" onClick={onClick}>
          Add to Basket
        </Button>
      </div >
    </div>
  );
}