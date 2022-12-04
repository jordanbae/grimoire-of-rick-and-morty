import ReactPaginate from "react-paginate";
import axios from "axios";

export default function Paginate({
  totalPages,
  setCard,
  setTotalPages,
  nameParam,
  statusParam,
  pageParam,
  setPageParam,
  initialUrl,
}) {
  const handlePageClick = (page) => {
    let currentPage = page.selected + 1;
    setPageParam(`?page=${currentPage}`)
    let url = `${initialUrl}${pageParam}${nameParam}${statusParam}`;

    axios
      .get(url)
      .then((res) => {
        setCard(res.data.results);
        setTotalPages(res.data.info.pages);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <>
      <div className="paginate-container">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          
        />
        
      </div>
    </>
  );
}
