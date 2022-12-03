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
  setStatusParam
}) {
  const handlePageClick = (page) => {
    let currentPage = page.selected + 1;
    //pass the death or alive to here. (i may have to move paginate to inside filter and when i change the status i will change the url with condition)
    let url = `${urlParam}${currentPage}${nameParam}${statusParam}`;

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
    </>
  );
}
