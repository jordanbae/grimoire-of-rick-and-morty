import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";

export default function Filter({
  card,
  setCard,
  totalPages,
  setTotalPages,
  setCharDead,
  charDead,
  charStatus,
  setCharStatus,
}) {
  const [statusValidate, setStatusValidate] = useState(1)
  const deceasedHandle = (e) => {
    console.log("check if radio has value", e.target.value);
    console.log("deceased");
    // (charAlive ? charAlive = false : charAlive = true) ?
    // console.log('isAlive?', charAlive)
    let urlNormal = `https://rickandmortyapi.com/api/character/`;
    let urlAlive = `https://rickandmortyapi.com/api/character/?status=alive`;
    let urlDead = `https://rickandmortyapi.com/api/character/?status=dead`;

    if (!charDead) {
      axios
        .get(urlAlive)
        .then((res) => {
          setCard(res.data.results);
          setTotalPages(res.data.info.pages);
          setCharDead(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (charDead) {
      axios
        .get(urlDead)
        .then((res) => {
          setCard(res.data.results);
          setTotalPages(res.data.info.pages);
          setCharDead(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  useEffect(() => {
      console.log(statusValidate);
      let urlNormal = `https://rickandmortyapi.com/api/character/`;
      let urlAlive = `https://rickandmortyapi.com/api/character/?status=alive`;
      let urlDead = `https://rickandmortyapi.com/api/character/?status=dead`;
  
  
  
      const callingApiFromStatus = () => {
        console.log('in function caaling api')
        if (statusValidate === 1 || statusValidate === '1') {
          axios
            .get(urlNormal)
            .then((res) => {
              console.log('Status validate value should be 1', statusValidate)

              console.log('res norma', res)
            })
            .catch((err) => {
              console.log(err);
            })
        } else if (statusValidate === 0 || statusValidate === '0') {
          axios
            .get(urlDead)
            .then((res) => {
              console.log('Status validate value should be 0', statusValidate)

              console.log('res dead', res)
            })
            .catch((err) => {
              console.log(err);
            })
        } else if (statusValidate === 2 || statusValidate === '2'){
          axios
            .get(urlAlive)
            .then((res) => {
              console.log('Status validate value should be 2', statusValidate)
              console.log('res alive', res)
            })
            .catch((err) => {
              console.log(err);
            })
        }
      };
      callingApiFromStatus();
  }, [statusValidate])


  const handleChange = (e) => {
    e.preventDefault()

    setStatusValidate(e.target.value);

  }

  return (
    <>
      <div className="browse-filter">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            autoComplete="off"
            onClick={deceasedHandle}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Deceased
          </label>
        </div>

        <div className="status-range-cont">
          <label htmlFor="customRange3" className="form-label">
            Status
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="2"
            step="1"
            id="customRange3"
            autoComplete="off"
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </>
  );
}
