import React from 'react';
import './HomeNav.css';


function Art() {
  return (
    <div className="Art">
      <div className="ArtText">I DO SOME ART :)<br/><br/> COMING SOON...</div>
      <div className="ArtImage"><img src={process.env.PUBLIC_URL + "/" + "images/painting.jpg"}></img></div>
       

    </div>
  );
}

export default Art;
