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
        <Pagination.First />
        <Pagination.Prev />
          {pageNumbers.map((number) => (
            <Pagination.Item key={number} onClick={() => paginate(number)}>
              {number}
            </Pagination.Item>
          ))}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>)
  }
  
  return pagination
}
