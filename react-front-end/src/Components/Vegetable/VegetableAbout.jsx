import React, { useEffect } from "react";
import "./VegetableAbout.scss";
import useAppData from "../../hooks/useAppData";
import { Link } from "react-router-dom";

export default function VegetableAbout() {
  const { state } = useAppData();

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <main>
      <div className="content">
        <ScrollToTopOnMount />
        {state.vegetables.map((veg) => (
          <div className="mainCard">
            <div className="flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <img src={veg.image_url} alt={"image"}></img>
                </div>
                <div className="flipCardBack">
                  <h1>{veg.name}</h1>
                  <p>{veg.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <br />
        <Link to="/vegetables" className="animated-word">
          <div className="container">
            <p>GET STARTED</p>
          </div>
        </Link>
      </div>
     
    </main>

  );
}
