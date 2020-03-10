import React from 'react'
import { Pagination } from 'react-bootstrap'

export const JobPagination = ({ jobsPerPage, totalJobs, paginate, paginationShow }) => {
  let pagination = null;

  if (paginationShow) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
      pageNumbers.push(i)
    }
    pagination = (
      <Pagination>
        <Pagination.First onClick={() => paginate(1, null)}/>
        <Pagination.Prev onClick={() => paginate(null, -1)}/>
          {pageNumbers.map((number) => (
            <Pagination.Item key={number} onClick={() => paginate(number, null)}>
              {number}
            </Pagination.Item>
          ))}
        <Pagination.Next onClick={() => paginate(null, 1)}/>
        <Pagination.Last onClick={() => paginate(Math.ceil(totalJobs / jobsPerPage), null)}/>
      </Pagination>)
  }
  
  return pagination
}
