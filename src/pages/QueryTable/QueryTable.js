import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "./QueryTable.css";

const QueryTable = () => {
  const [rowData, setRowData] = useState([]);

  const columnDefs = [
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
      headerName: "Material Series",
      field: "material_series",
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
    },
    {
      headerName: "Shipping Address",
      field: "shipping_address",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
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
    },
    {
      headerName: "Pin Code",
      field: "delivery_pin",
      sortable: true,
      filter: true,
      floatingFilter: true,
      filterParams: {
        debounceMs: 0,
        buttons: ["reset"],
      },
    },
  ];

  useEffect(() => {
    axios
      // .get("http://localhost:5000/api/ack-data")
      .get("https://giant-cyan-camel.cyclic.app/api/ack-data")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection={rowSelectionType}
          onSelectionChanged={onSelectionChanged}
          onGridReady={onGridReady}
          // onGridReady
        />
      </div>
    </div>
  );
};

export default QueryTable;
