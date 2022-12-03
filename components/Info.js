import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';



export default function Info({card, totalPages, setCard}) {

  return (
    <>
      <div className="card-layout">
        {card && card.map((element, key) => {
          return (
            <div key={key} className="card-layout__item">
              <img className="char-img" src={`${element.image}`} />
              <div className="char-info">
                <section className="char-name-status">
                  {element.name} <span> {element.status}</span>{" "}
                  <span> {element.location.name}</span>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
