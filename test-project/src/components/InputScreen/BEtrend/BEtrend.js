import * as React from 'react';
import Box from '@mui/material/Box';
import axios  from 'axios';
import {useState, useEffect} from 'react'
// import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from 'react-data-table-component'


// import MaterialTable from 'material-table'


function BEtrend() {
  const [data,setData]=useState([]);
  const columns =[
    // {headerName:"id",field:"id"},
    {name:"vertical",
  selector:row=>row.vertical},
    {name:"apr",selector:row=>row.apr},
    {name:"may",selector:row=>row.may},
    {name:"jun",selector:row=>row.jun},
    // {headerName:"Q1Sum",valueGetter: getQ1Sum,field:"Q1sum"},
    // {headerName:"jul",field:"jul",editable:"true"},
    // {headerName:"aug",field:"aug",editable:"true"},
    // {headerName:"sep",field:"sep",editable:"true"},
    // {headerName:"Q2Sum",valueGetter: getQ2Sum,field:"Q2sum"},
    // {headerName:"oct",field:"oct",editable:"true"},
    // {headerName:"nov",field:"nov",editable:"true"},
    // {headerName:"dec",field:"dec",editable:"true"},
    // {headerName:"Q3Sum",valueGetter: getQ3Sum,field:"Q3sum"},
    // {headerName:"Jan",field:"jan",editable:"true"},
    // {headerName:"Feb",field:"feb",editable:"true"},
    // {headerName:"Mar",field:"mar",editable:"true"},
    // {headerName:"Q4Sum",valueGetter: getQ4Sum,field:"Q4sum"},
  
  ];
  const fetch=()=>{
    axios
      .get("http://localhost:4000/data")
      .then((r) => {
        setData(r.data);
      
      })
      .catch((e) => {
        console.log(e.data);
      });
  }
  
   useEffect(()=>{
  fetch();
  },[])
  // function getQ1Sum(params) {
  //   return Number(params.row.apr)+Number(params.row.may)+Number(params.row.jun) ;
  // }
  // function getQ2Sum(params) {
  //   return Number(params.row.jul)+Number(params.row.aug)+Number(params.row.sep) ;
  // } 
  //  function getQ3Sum(params) {
  //   return Number(params.row.oct)+Number(params.row.nov)+Number(params.row.dec) ;
  // }  
  // function getQ4Sum(params) {
  //   return Number(params.row.jan)+Number(params.row.feb)+Number(params.row.mar) ;
  // }

const rows =data.map((row)=>({
  id:row.id,
  vertical:row.vertical,
  apr:row.apr,
  may:row.may,
}));

  return (
    <div>
       <Box sx={{ height: 500, width: '100%' }}>
<DataTable columns={columns} data={data}
      //     components={{Toolbar:GridToolbar}}
      //     onCellEditCommit={(params)=>console.log(data)}
      //     autoHeight
      //     pageSize={10}    
      //     rowsPerPageOptions={[10]}
      //     checkboxSelection
      // disableSelectionOnClick
      // experimentalFeatures={{ newEditingApi: true }}
  />
</Box>

    </div>
  )
}

export default BEtrend