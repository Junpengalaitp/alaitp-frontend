import React from 'react'
import { Pagination } from 'react-bootstrap'

export const JobPagination = ({ currentPage, jobsPerPage, totalJobs, paginate, paginationShow }) => {
  let pagination = null

  if (paginationShow) {
    const pageNumbers = []
    let paginationHead
    let showingPageNumbers
    let paginationTail
    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
      pageNumbers.push(i)
    }
    const lastPage = pageNumbers.length

    if (lastPage <= 1) {
      return pagination
    }

    if (pageNumbers.length > 5) {
      paginationHead = currentPage === 1 ? null : (
        <React.Fragment>
            <Pagination.Item active={currentPage === 1} key={1} onClick={() => paginate(1, null)}>
                  {1}
            </Pagination.Item>
            <Pagination.Ellipsis />
          </React.Fragment>
        )

      paginationTail = currentPage > lastPage - 5 ? null : (
        <React.Fragment>
          <Pagination.Ellipsis />
          <Pagination.Item active={currentPage === lastPage} key={lastPage} onClick={() => paginate(lastPage, null)}>
                {lastPage}
          </Pagination.Item>
        </React.Fragment>
        )

      const startIdx = Math.min(currentPage - 1, lastPage - 5)
      const endIdx = Math.min(currentPage + 4, lastPage)
      showingPageNumbers = (
        <React.Fragment>
          {paginationHead}
          {pageNumbers.slice(startIdx, endIdx).map((number) => (
            <Pagination.Item active={currentPage === number} key={number} onClick={() => paginate(number, null)}>
              {number}
            </Pagination.Item>
          ))}
          {paginationTail}
        </React.Fragment>
        )
    } else {
      showingPageNumbers = pageNumbers.map((number) => (
        <Pagination.Item active={currentPage === number} key={number} onClick={() => paginate(number, null)}>
          {number}
        </Pagination.Item>
      ))
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
}
