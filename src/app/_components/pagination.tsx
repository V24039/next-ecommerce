import React from "react";

interface IPaginationProps {
  totalElements: number;
  elementsPerPage: number;
}

const Pagination = ({ totalElements, elementsPerPage }: IPaginationProps) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div>
      {paginationNumbers.map((pageNumber) => (
        <button key={pageNumber}>{pageNumber}</button>
      ))}
    </div>
  );
};

export default Pagination;
