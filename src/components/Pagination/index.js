import React from "react";
import { PAGE_SIZE } from "/src/constants";

function Pagination({ pageNo, data, setPageNo }) {
  const lastPageNum =
    parseInt(data.length / PAGE_SIZE) + (data.length % PAGE_SIZE ? 1 : 0);

  function handleClick(action) {
    return function () {
      switch (action) {
        case "prev":
          if (pageNo > 1) setPageNo(pageNo - 1);
          break;
        case "next":
          if (data.length > pageNo * PAGE_SIZE) setPageNo(pageNo + 1);
          break;
        case "first":
          setPageNo(1);
          break;
        case "last": {
          setPageNo(lastPageNum);
          break;
        }
      }
    };
  }

  return (
    <div className="pagination">
      <button
        onClick={handleClick("first")}
        className={pageNo == 1 ? "disabled" : ""}
      >
        First
      </button>

      {pageNo != 1 && (
        <button
          onClick={handleClick("prev")}
          className={pageNo == 1 ? "disabled" : ""}
        >
          {pageNo - 1}
        </button>
      )}

      <button className="active">{pageNo}</button>

      {pageNo != lastPageNum && (
        <button
          onClick={handleClick("next")}
          className={data.length < pageNo * PAGE_SIZE ? "disabled" : ""}
        >
          {pageNo + 1}
        </button>
      )}

      <button
        onClick={handleClick("last")}
        className={pageNo == lastPageNum ? "disabled" : ""}
      >
        Last
      </button>
    </div>
  );
}

export default Pagination;
