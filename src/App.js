import { useState, useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { API_URL } from "./constants";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const dataExists = data.length > 0;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      {dataExists ? (
        <>
          <Table data={data} pageNo={pageNo} />
          <Pagination data={data} pageNo={pageNo} setPageNo={setPageNo} />
        </>
      ) : (
        <h1>Data not found!</h1>
      )}
    </div>
  );
}
