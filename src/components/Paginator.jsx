import ReactPaginate from 'react-paginate';
function Paginator({currentPage, setCurrentPage}) {
    return (
        <ReactPaginate
            className="paginator"
            breakLabel="..."
            nextLabel=""
            onPageChange={e => setCurrentPage(e.selected +1 )}
            pageRangeDisplayed={8}
            pageCount={2}
            previousLabel=""
            renderOnZeroPageCount={null}
        />
    )
}

export default Paginator;