import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./QueryTable.css";
import Loader from "../../loader/Loader";

// const localurl = "http://localhost:5000/api/ack-data";

const QueryTable = () => {
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columnDefs = [
    {
      headerName: "S.No",
      field: "serial_no",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      sort: "desc",
      width: 85,
    },
    {
      headerName: "Timestamp",
      field: "timestamp",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 165,
    },
    {
      headerName: "RFQ Number",
      field: "rfq_no",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 300,
    },
    {
      headerName: "Start Date",
      field: "rfq_start_date",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 100,
    },
    {
      headerName: "End Date",
      field: "rfq_end_date",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 100,
    },
    {
      headerName: "Buyer",
      field: "buyer",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 150,
    },
    {
      headerName: "Buyer Number",
      field: "buyer_no",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 120,
    },
    {
      headerName: "Scope",
      field: "scope",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
    },

    {
      headerName: "Material Line Items",
      field: "material_line_items",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 80,
    },
    {
      headerName: "Bid Type",
      field: "bid_type",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 100,
    },
    {
      headerName: "User Name",
      field: "usr_name",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
      width: 100,
    },
  ];

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
          columnDefs={columnDefs}
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
