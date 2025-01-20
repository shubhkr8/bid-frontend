import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import Loader from '../../loader/Loader';
import { SUPPLIER_COLUMNDEFS } from '../../utils/Constant';
import { renderApiSupplierData } from '../../utils/apiEndPoints';

const SupplierTable = () => {
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchDataFromApi(renderApiSupplierData);
        setRowData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const rowSelectionType = 'multiple';
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
      console.error('Grid API is not initialized.');
    }
  };

  return (
    <div>
      <div className='table__top'>
        <button className='export-button' onClick={() => onExportClick()}>
          Export
        </button>
      </div>
      {isLoading && <Loader />}
      <div
        className='ag-theme-alpine'
        style={{ width: '100%', height: '86vh' }}
      >
        <AgGridReact
          columnDefs={SUPPLIER_COLUMNDEFS}
          rowData={rowData}
          rowSelection={rowSelectionType}
          onSelectionChanged={onSelectionChanged}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default SupplierTable;

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
