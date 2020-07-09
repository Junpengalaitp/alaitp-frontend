import React from 'react'
import { Pagination } from 'react-bootstrap'

/**
 * handling job list pagination
 */
export const JobPagination = ({ currentPage, jobsPerPage, totalJobs, paginate, paginationShow }) => {
  let pagination = null;
  const pageAmountAtOnce = 5;
  if (paginationShow) {
    const pageNumbers = [];
    let paginationHead;
    let showingPageNumbers;
    let paginationTail;
    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
      pageNumbers.push(i)
    }
    const lastPage = pageNumbers.length;

    // do not paginate for only one page
    if (lastPage <= 1) {
      return pagination
    }

    // no fancy buttons if total page is less than pageAmountAtOnce
    if (pageNumbers.length <= pageAmountAtOnce) {
      showingPageNumbers = pageNumbers.map((number) => (
        <Pagination.Item active={currentPage === number} key={number} onClick={() => paginate(number, null)}>
          {number}
        </Pagination.Item>
      ))
    } else { // add fancy buttons
      // show ellipsis after first page
      paginationHead = currentPage === 1 ? null : (
        <React.Fragment>
            <Pagination.Item active={currentPage === 1} key={1} onClick={() => paginate(1, null)}>{1}</Pagination.Item>
            <Pagination.Ellipsis />
          </React.Fragment>
        );
      // show ellipsis before lastPage - pageAmountAtOnce
      paginationTail = currentPage > lastPage - pageAmountAtOnce ? null : (
        <React.Fragment>
          <Pagination.Ellipsis />
          <Pagination.Item active={currentPage === lastPage} key={lastPage} onClick={() => paginate(lastPage, null)}>{lastPage}</Pagination.Item>
        </React.Fragment>
        );

      const startIdx = Math.min(currentPage - 1, lastPage - pageAmountAtOnce);
      const endIdx = Math.min(currentPage + pageAmountAtOnce - 1, lastPage);
      showingPageNumbers = (
        <React.Fragment>
          {paginationHead}
          {pageNumbers.slice(startIdx, endIdx).map((number) => (
            <Pagination.Item active={currentPage === number} key={number} onClick={() => paginate(number, null)}>{number}</Pagination.Item>
          ))}
          {paginationTail}
        </React.Fragment>
        )
    }
    
    pagination = (
      <Pagination>
        <Pagination.Prev disabled={currentPage === 1} onClick={() => paginate(null, -1)}/>
          {showingPageNumbers}
        <Pagination.Next disabled={currentPage === lastPage} onClick={() => paginate(null, 1)}/>
      </Pagination>
    )
  }
  return pagination
};
