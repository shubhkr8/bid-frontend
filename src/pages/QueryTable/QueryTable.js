import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./QueryTable.css";
import Loader from "../../loader/Loader";
import { COLUMNDEFS } from "../../utils/Constant";

// const localurl = "http://localhost:5000/api/ack-data";

const QueryTable = () => {
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchDataFromApi(
          "https://giant-cyan-camel.cyclic.app/api/ack-data"
        );
        setRowData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const rowSelectionType = "multiple";
  const onSelectionChanged = (event) => {
    console.log(event);
  };

  const gridApiRef = useRef(null);

  const onGridReady = (params) => {
    gridApiRef.current = params.api;
  };

  const onExportClick = () => {
    if (gridApiRef.current) {
      gridApiRef.current.exportDataAsCsv();
    } else {
      console.error("Grid API is not initialized.");
    }
  };

  return (
    <div>
      <button className="button-29" onClick={() => onExportClick()}>
        Export
      </button>
      {isLoading && <Loader />}
      <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
        <AgGridReact
          columnDefs={COLUMNDEFS}
          rowData={rowData}
          rowSelection={rowSelectionType}
          onSelectionChanged={onSelectionChanged}
          onGridReady={onGridReady}
          // frameworkComponents={{ valueCellRenderer }}
          // onGridReady
        />
      </div>
    </div>
  );
};

export default QueryTable;

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
