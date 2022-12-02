import React from 'react';
import ReactPaginate from 'react-paginate'



export default function Info({card, totalPages}) {
  console.log('totalpages in info', totalPages);

  const handlePageClick = (page) => {
    console.log(page.selected);
  }
  return (
    <>
      <div className="card-layout">
        {card.map((element, key) => {
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

      <ReactPaginate 
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={totalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
      />

    </>
  );
}
