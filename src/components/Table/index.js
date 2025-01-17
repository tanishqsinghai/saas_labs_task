import React from "react";
import { COLUMN_DETAILS } from "./constants";
import { PAGE_SIZE } from "/src/constants";

function Table({ data, pageNo }) {
  const COLUMN_HEADERS = Object.keys(COLUMN_DETAILS);
  const KEYS_TO_SHOW = Object.values(COLUMN_DETAILS);

  const lastPageNum =
    parseInt(data.length / PAGE_SIZE) + (data.length % PAGE_SIZE ? 1 : 0);

  const startIdx = (pageNo - 1) * PAGE_SIZE;
  const endIdx = pageNo == lastPageNum ? data.length : pageNo * PAGE_SIZE;

  return (
    <table>
      <thead>
        <tr>
          {COLUMN_HEADERS.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(startIdx, endIdx).map((entry) => {
          return (
            <tr key={entry["s.no"]}>
              {KEYS_TO_SHOW.map((key) => (
                <td key={key}>{entry[key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
