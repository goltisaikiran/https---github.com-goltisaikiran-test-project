import  React from 'react';
import Box from '@mui/material/Box';
import axios  from 'axios';
import {useState, useEffect} from 'react'
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Modify from '../BEvsRTBR/Modify'
import { useNavigate } from 'react-router-dom';


function BEtrend() {
  const navigate=useNavigate()
  const button={
    marginLeft: "2%",
    color: "white",
    backgroundColor: "rgba(132, 38, 191,1)",
  }
  const [pageSize, setPageSize] = useState(5);
 
  const [data,setData]=useState([]);
  const columns =[
    {headerName:"id",field:"id"},
    {headerName:"vertical",field:"vertical"},
    {headerName:"apr",field:"apr",editable:"true",type:'number'},
    {headerName:"may",field:"may",editable:"true",type:'number'},
    {headerName:"jun",field:"jun",editable:"true",type:'number'},
    {headerName:"Q1Sum",valueGetter: getQ1Sum,field:"Q1sum",type:'number'},
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



  return (
    <div>
      <form  className='quater'>
    Financial Year:<select value={data.Q} onChange={(e)=>setData({...data,Q:e.target.value})}>
      <option>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
    </select>
    <button style={button}
            className="btn " onClick={(e)=>{}}>Add</button>
    </form>
       <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid  
        columns={columns} 
        rows={data} 
        // editMode="row"
          components={{Toolbar:GridToolbar}}
          onCellEditCommit={(params) => console.log(params)}
        
          autoHeight
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          checkboxSelection
      // disableSelectionOnClick
      
      // experimentalFeatures={{ newEditingApi: true }}
  />
</Box>

    </div>
  )
}

export default BEtrend