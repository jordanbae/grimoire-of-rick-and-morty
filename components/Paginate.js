import ReactPaginate from "react-paginate";
import axios from "axios";

export default function Paginate({
  card,
  totalPages,
  setCard,
  setTotalPages,
  statusValidate,
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
  const handlePageClick = (page) => {
    let currentPage = page.selected + 1;
    setPageParam(`?page=${currentPage}`)
    let url = `${initialUrl}${pageParam}${nameParam}${statusParam}`;
    console.log('This is total page, should not be number', totalPages, 'type', typeof totalPages)

    axios
      .get(url)
      .then((res) => {
        console.log('PAGINATE CALLED API');
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
