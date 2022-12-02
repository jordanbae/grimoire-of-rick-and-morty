import axios from "axios";
import { useState } from "react";

export default function Filter({ card, setCard }) {
  // let charAlive = true;

  // const deceasedHandle = () => {
  //   console.log('deceased')
  //   charAlive ? charAlive = false : charAlive = true;
  //   console.log('isAlive?', charAlive)
    
  //   // let urlAlive = `https://rickandmortyapi.com/api/character/?status=alive`
  //   // let urlDead = `https://rickandmortyapi.com/api/character/?status=dead`


  //   // if(charAlive){
  //   //   axios.get(urlAlive)
  //   //   .then((res) => {
  //   //     setCard(res.data.results);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err)
  //   //   })
  //   // } else {
  //   //   axios.get(urlDead)
  //   //   .then((res) => {
  //   //     setCard(res.data.results);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err)
  //   //   })   
  //   // }

  // }

  return (
    <>
      <div className="browse-filter">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            // onClick={deceasedHandle}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Deceased
          </label>
        </div>
      </div>
    </>
  );
}
