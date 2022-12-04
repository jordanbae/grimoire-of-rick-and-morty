import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Info({ card, totalPages, setCard }) {
  return (
    <>
      <div className="card-layout">
        {card &&
          card.map((element, key) => {
            return (
              <div key={key} className="card-layout__item shadow">
                <img className="char-img" src={`${element.image}`} />

                <div className="status-img-cont">
                <div className="char-status-cont">
                  <div className="char-status">
                    <div
                      className="dot-status"
                      style={{
                        backgroundColor:
                          element.status === "Dead" ? "#ff3838" : "#26d77f",
                      }}
                    ></div>
                    {element.status.toUpperCase()}
                  </div>
                </div>
                <div className="char-info">
                  <div className="char-name">{element.name}</div>
                  <div className="char-gender"><span className="char-label">Gender:</span> {element.gender}</div>
                  <div className="char-species"><span className="char-label">Species:</span> {element.species}</div>
                  <div className="char-location">
                  <span className="char-label">Location:</span> {element.location.name}
                  </div>
                </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

// {card &&
//   card.map((element, key) => {
//     return (
//       <div key={key} className="card-layout__item">
//         <img className="char-img" src={`${element.image}`} />
//         <div className="char-info">
//           <section className="char-name-status">
//             {element.name} <span> {element.status}</span>{" "}
//             <span> {element.location.name}</span>{" "}
//             <span>{element.gender}</span> <span>{element.species}</span>
//           </section>
//         </div>
//       </div>
//     );
//   })}
