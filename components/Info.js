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
              <div key={key} className="card-layout__item">
                <img className="char-img" src={`${element.image}`} />
                <div className="char-info">
                  <div className="char-name">
                      Name: {element.name}
                  </div>
                  <div className="char-status">
                      Status: {element.status}
                  </div>
                  <div className="char-gender">
                      gender: {element.gender}
                  </div>
                  <div className="char-species">
                      Species: {element.species}
                  </div>
                  <div className="char-location">
                      Location: {element.location.name}
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