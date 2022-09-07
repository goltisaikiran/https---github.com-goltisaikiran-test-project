import React from 'react'
import axios  from 'axios';
import {useState, useEffect} from 'react'
import MaterialTable from 'material-table'

function BEtrend() {
  const [tableData,setTableData]=useState([]);
  const fetch=()=>{
    axios
      .get("http://localhost:4000/data")
      .then((r) => {
        setTableData(r.data);
      })
      .catch((e) => {
        console.log(e.data);
      });
  }
  
   useEffect(()=>{
  fetch();
  },[])
const columns=[
  {title:"vertical",field:"vertical"}
]
  return (
    <div>
<MaterialTable columns={columns} data={tableData}/>


    </div>
  )
}

export default BEtrend