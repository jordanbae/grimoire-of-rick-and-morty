import ReactPaginate from 'react-paginate'
import axios from 'axios';


export default function Paginate({card, totalPages, setCard, charDead, setCharDead, setTotalPages}) {
    const handlePageClick =  (page) => {
        let currentPage= page.selected+1;
        //pass the death or alive to here. (i may have to move paginate to inside filter and when i change the status i will change the url with condition)
        let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        
        // if(charDead === true) {
        //   axios.get(url + `&&status=Alive`)
        //   .then((res) => {
        //     setCard(res.data.results);
        //     console.log('char is alive in paginate', res.data.results)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
        // } else if (charDead === false) {
        //   axios.get(url + `&&status=Dead`)
        //   .then((res) => {
        //     setCard(res.data.results);
        //     console.log('char is dead in paginate', res.data.results)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })   
        // }
      }

    return (
        <>
                <ReactPaginate 
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
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
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}

      />
        </>
    )
}