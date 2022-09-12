import * as React from 'react';
import Box from '@mui/material/Box';
import axios  from 'axios';
import {useState, useEffect} from 'react'
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams,GridRowModes,GridActionsCellItem,} from '@mui/x-data-grid';
// import DataTable from 'react-data-table-component'
// import MaterialTable from 'material-table'


function BEtrend() {
  const [data,setData]=useState([]);
  const columns =[
    {headerName:"id",field:"id"},
    {headerName:"vertical",field:"vertical"},
    {headerName:"apr",field:"apr",editable:"true"},
    {headerName:"may",field:"may",editable:"true"},
    {headerName:"jun",field:"jun",editable:"true"},
    //  {name:"Q1Sum",selector:row=>getQ1Sum},
    // {name:"jul",selector:row=>row.jul},
    // {name:"aug",selector:row=>row.aug},
    // {name:"sep",selector:row=>row.sep},
    // {name:"Q2Sum",valueGetter: getQ2Sum,field:"Q2sum"},
    // {name:"oct",selector:row=>row.oct},
    // {name:"nov",selector:row=>row.nov},
    // {name:"dec",selector:row=>row.dec},
    // {name:"Q3Sum",valueGetter: getQ3Sum,field:"Q3sum"},
    // {name:"Jan",selector:row=>row.jan},
    // {name:"Feb",selector:row=>row.feb},
    // {name:"Mar",selector:row=>row.mar},
    // {name:"Q4Sum",valueGetter: getQ4Sum,field:"Q4sum"},
    // {name:"Action",cell:(row)=><button className="btn btn-primary" onClick={()=>alert(row.id)}>Delete</button>},
    {headerName:"Q1Sum",valueGetter: getQ1Sum,field:"Q1sum"},
    {headerName:"jul",field:"jul",editable:"true"},
    {headerName:"aug",field:"aug",editable:"true"},
    {headerName:"sep",field:"sep",editable:"true"},
    {headerName:"Q2Sum",valueGetter: getQ2Sum,field:"Q2sum"},
    {headerName:"oct",field:"oct",editable:"true"},
    {headerName:"nov",field:"nov",editable:"true"},
    {headerName:"dec",field:"dec",editable:"true"},
    {headerName:"Q3Sum",valueGetter: getQ3Sum,field:"Q3sum"},
    {headerName:"Jan",field:"jan",editable:"true"},
    {headerName:"Feb",field:"feb",editable:"true"},
    {headerName:"Mar",field:"mar",editable:"true"},
    {headerName:"Q4Sum",valueGetter: getQ4Sum,field:"Q4sum"},
    {headerName:"Action",field:"action"},
    
    
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

  function getQ1Sum(params) {
    return Number(params.row.apr)+Number(params.row.may)+Number(params.row.jun) ;
  }
  function getQ2Sum(params) {
    return Number(params.row.jul)+Number(params.row.aug)+Number(params.row.sep) ;
  } 
   function getQ3Sum(params) {
    return Number(params.row.oct)+Number(params.row.nov)+Number(params.row.dec) ;
  }  
  function getQ4Sum(params) {
    return Number(params.row.jan)+Number(params.row.feb)+Number(params.row.mar) ;
  }

// const rows =data.map((row)=>({
//   id:row.id,
//   vertical:row.vertical,
//   apr:row.apr,
//   may:row.may,
// }));

  return (
    <div>
      <form  className='quater'>
    Financial Year:<select value={data.Q} onChange={(e)=>setData({...data,Q:e.target.value})}>
      <option>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
    </select>
    <button style={{
              marginLeft: "2%",
              color: "white",
              backgroundColor: "rgba(132, 38, 191,1)",
            }}
            className="btn " onClick={(e)=>{}}>Add</button>
    </form>
       <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid  
        columns={columns} 
        rows={data} 
        editMode="row"
          components={{Toolbar:GridToolbar}}
          onCellEditCommit={(params)=>console.log(data)}
          autoHeight
          pageSize={10}    
          rowsPerPageOptions={[10]}
          // checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
  />
  {/* <DataTable  columns={columns} rows={data} 
           fixedHeader fixedHeaderScrollHeight="600px"
              selectableRows
             selectableRowsHighlight
             highlightOnHover
              actions={
               <button className="btn btn-info">Export</button>
              }
            /> */}

</Box>

    </div>
  )
}

export default BEtrend