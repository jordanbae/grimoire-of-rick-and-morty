import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";

export default function Filter({
  card,
  setCard,
  setTotalPages,
  statusValidate,
  setStatusValidate,
  charName,
  setCharName
}) {
  // update when status changed
  useEffect(() => {
    let urlNormal = `https://rickandmortyapi.com/api/character/`;
    let urlAlive = `https://rickandmortyapi.com/api/character/?status=alive`;
    let urlDead = `https://rickandmortyapi.com/api/character/?status=dead`;
    const callingApiFromStatus = () => {
      if (statusValidate === 1 || statusValidate === "1") {
        axios
          .get(urlNormal)
          .then((res) => {
            setCard(res.data.results);
            setTotalPages(res.data.info.pages);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (statusValidate === 0 || statusValidate === "0") {
        axios
          .get(urlDead)
          .then((res) => {
            setCard(res.data.results);
            setTotalPages(res.data.info.pages);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (statusValidate === 2 || statusValidate === "2") {
        axios
          .get(urlAlive)
          .then((res) => {
            setCard(res.data.results);
            setTotalPages(res.data.info.pages);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    callingApiFromStatus();
  }, [statusValidate]);

  // set status validate
  const handleStatusChange = (e) => {
    e.preventDefault();
    setStatusValidate(e.target.value);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value)
    let name = e.target.value;
    console.log(name)
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    setCharName(capitalizedName)
  }


  //set page and url that contains specific name.
  const handleNameSearch = (e) => {
    e.preventDefault();
    const charNameUrl = `https://rickandmortyapi.com/api/character/?name=${charName}`

    axios
      .get(charNameUrl)
      .then((res) => {
        setCard(res.data.results)
        setTotalPages(res.data.info.pages)
      })
      .catch((err) => {console.log(err)})
  };

  return (
    <div className="filter-container">

      <div className="filter-search-form">
        <form className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInputValue"
            placeholder="name@example.com"
            onChange={handleNameChange}
          />
          <label htmlFor="floatingInputValue">Search by character</label>
        </form>
        <button type="button" className="btn btn-primary" onClick={handleNameSearch}>
          Primary
        </button>
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
          onChange={handleStatusChange}
        ></input>
      </div>
    </div>
  );
}
