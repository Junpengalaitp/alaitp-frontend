import React from 'react'
import { Pagination } from 'react-bootstrap'

export const JobPagination = ({ currentPage, jobsPerPage, totalJobs, paginate, paginationShow }) => {
  let pagination = null
  let ellipsis = null

  if (paginationShow) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
      pageNumbers.push(i)
    }
    if (pageNumbers.length > 5) {
      ellipsis = <Pagination.Ellipsis />
    }
    pagination = (
      <Pagination>
        <Pagination.First onClick={() => paginate(1, null)}/>
        <Pagination.Prev onClick={() => paginate(null, -1)}/>
        {ellipsis}
        {pageNumbers.map((number) => (
            <Pagination.Item active={currentPage === number} key={number} onClick={() => paginate(number, null)}>
              {number}
            </Pagination.Item>
        ))}
        {ellipsis}
        <Pagination.Next onClick={() => paginate(null, 1)}/>
        <Pagination.Last onClick={() => paginate(Math.ceil(totalJobs / jobsPerPage), null)}/>
      </Pagination>)
  }
  return pagination
}
