import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { FaEye } from "react-icons/fa";
import { MdOutlineTune } from "react-icons/md";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function actionCellRenderer(params) {
  return (
    <button
      class="action-button update flex justify-center w-full items-center h-full "
      data-action="update"
    >
      <FaEye />
    </button>
  );
}

const GridExample = () => {
  const gridRef = useRef();

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(
    () => ({ height: "500px", width: "100%", minWidth: "300px" }),
    []
  );
  const [rowData, setRowData] = useState([]);
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);
  const [columnDefs, setColumnDefs] = useState([
    // {
    //   field: "rideId",
    //   minWidth: 170,

    //   // onCellClicked: (e) => console.log("hello", e.data),
    //   // checkboxSelection: checkboxSelection,
    //   // headerCheckboxSelection: headerCheckboxSelection,
    // },
    { field: "firstName" },
    {
      field: "lastName",
    },
    { field: "membershipCategory", headerName: "Membership Category" },
    // { field: "date", filter: "agDateColumnFilter" },
    // {
    //   field: "views",
    //   // onCellClicked:(e)=>console.log("hello",e.data),
    //   cellRendererParams: {
    //     clicked: function (field) {
    //       alert(`${field} was clicked`);
    //     },
    //   },
    // },
  ]);
  const nextpage = (e) => {
    const field = e;
    // const colIndex = e.columnApi
    //   .getAllColumns()
    //   ?.findIndex((col) => col.getColDef().field === field);
    const data = e.data;
    console.log(field, data);
  };
  const onBtnExport = useCallback(() => {
    console.log("d");
    gridRef.current.api.exportDataAsCsv();
  }, []);

  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Group",
      minWidth: 170,
      field: "athlete",
      valueGetter: (params) => {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      // headerCheckboxSelection: true,
      // cellRenderer: "agGroupCellRenderer",
      // cellRendererParams: {
      //   checkbox: true,
      // },
    };
  }, []);
  
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch(`https://api.jollystarssc.com/api/member/getAllmembers`)
      .then((fetchResponse) => {
        if (fetchResponse.ok) {
          return fetchResponse.json();
        } else {
          throw new Error("Fetch request failed");
        }
      })
      .then((userDataFromFetch) => {
        console.log(userDataFromFetch.result, "==========");
        let sample = [];
        sample = userDataFromFetch.result;
        console.log(sample, "sampleeee");
        const flatData = sample.map((row) => ({
          ...row,
        }));
        setRowData(flatData);
      });
  }, []);

  return (
    <div>
      <div style={containerStyle}>
        <div
          class="flex items-center justify-between  "
          style={{ color: "black", fontSize: "14px" }}
        >
          <buton
            variant="outlined"
            startIcon={<MdOutlineTune />}
            style={{ color: "black", borderColor: "black" }}
          >
            Filter
          </buton>
          <div className="flex-1 p-5">
            <input
              type="text"
              placeholder="Search with Name"
              class="filter-input w-full"
              onInput={onFilterTextBoxChanged}
              id="filter-text-box"
            />
          </div>
        </div>
        <br />
        <h2 className="text-[#828282] font-bold">
          {rowData && rowData.length} Result Found
        </h2>
        <br />
        
        <div style={gridStyle} className={"ag-theme-quartz"}>
          <AgGridReact
            suppressExcelExport={true}
            rowData={rowData}
            ref={gridRef}
            columnDefs={columnDefs}
            // autoGroupColumnDef={autoGroupColumnDef}
            defaultColDef={defaultColDef}
            // suppressRowClickSelection={true}
            // groupSelectsChildren={true}
            // rowSelection={"multiple"}
            // rowGroupPanelShow={"always"}
            // pivotPanelShow={"always"}
            pagination={true}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
};

export default GridExample;
