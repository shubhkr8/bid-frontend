import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./QueryTable.css";

const QueryTable = () => {
  const [rowData, setRowData] = useState([]);

  const columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Age", field: "age", sortable: true, filter: true },
    { headerName: "Country", field: "country", sortable: true, filter: true },
  ];

  useEffect(() => {
    // Fetch data from the Node.js server
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

export default QueryTable;
