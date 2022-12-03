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
  setCharName,
  urlParam,
  setUrlParam,
  setNameParam,
  nameParam,
  statusParam,
  setStatusParam,
  pageParam,
  setPageParam,
  initialUrl,
  setInitialUrl,
}) {



  useEffect(() => {
    console.log('statusHandler')

    const statusHandler = () => {
      if (statusValidate === 0 || statusValidate === "0") {
        setStatusParam('&&status=dead')
        console.log('should be 0', statusValidate)
      } else if (statusValidate === 1 || statusValidate === "1") {
        setStatusParam('&&status=')
        console.log('should be 1', statusValidate)

      } else if (statusValidate === 2 || statusValidate === "2") {
        setStatusParam('&&status=alive')
        console.log('should be 2', statusValidate)

      } else {console.error('undefined status')}
    };
    statusHandler();
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

  const handleNameSearch = (e) => {
    e.preventDefault();
    setNameParam(`&&name=${charName}`)
  };

  useEffect(() => {
    console.log('urlHandler')
    const urlHandler = () => {
      setUrlParam( `${initialUrl}${pageParam}${statusParam}${nameParam}`)
    }
    urlHandler();
  },[pageParam, statusParam, nameParam])

  useEffect(() => {
    console.log('masterHandler')
    const masterCaller = () => {
      axios
        .get(urlParam)
        .then((res) => {
          console.log('MASTER CALLED API')
          setCard(res.data.results);
          setTotalPages(res.data.info.pages);
        })
        .catch((err) => {console.log(err)})
    }
    masterCaller();
  },[urlParam])






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
