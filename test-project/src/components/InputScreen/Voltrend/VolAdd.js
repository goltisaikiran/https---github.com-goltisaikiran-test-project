import React from 'react'
import {useState} from 'react'

function VolAdd(params) {
const [data1 ,setData1]=useState(params.data)
  return (
    <>
          {params.flag?"":
                  <tr>
                  <td><input type='text' value={data1.vertical} onChange={(e)=>setData1({...data1,vertical:e.target.value})}/></td>
                 <td><input type='text' value={data1.code} onChange={(e)=>setData1({...data1,code:e.target.value})}/></td>
                 <td><input type='number' value={data1.apr} onChange={(e)=>setData1({...data1,apr:e.target.value})}/></td>
                 <td><input type='number' value={data1.may} onChange={(e)=>setData1({...data1,may:e.target.value})}/></td>
                 <td><input type='number' value={data1.jun} onChange={(e)=>setData1({...data1,jun:e.target.value})}/></td>
                 <td></td>
                 <td><input type='number' value={data1.jul} onChange={(e)=>setData1({...data1,jul:e.target.value})}/></td>
                 <td><input type='number' value={data1.aug} onChange={(e)=>setData1({...data1,aug:e.target.value})}/></td>
                 <td><input type='number'value={data1.sep} onChange={(e)=>setData1({...data1,sep:e.target.value})} /></td>
                 <td></td>
                 <td><input type='number'value={data1.oct} onChange={(e)=>setData1({...data1,oct:e.target.value})} /></td>
                 <td><input type='number' value={data1.nov} onChange={(e)=>setData1({...data1,nov:e.target.value})}/></td>
                 <td><input type='number' value={data1.dec} onChange={(e)=>setData1({...data1,dec:e.target.value})}/></td>
                 <td></td>
                 <td><input type='number' value={data1.jan} onChange={(e)=>setData1({...data1,jan:e.target.value})}/></td>
                 <td><input type='number' value={data1.feb} onChange={(e)=>setData1({...data1,feb:e.target.value})}/></td>
                 <td><input type='number' value={data1.mar} onChange={(e)=>setData1({...data1,mar:e.target.value})}/></td>
                 <td></td>
                 <td colSpan="2"><button  className="btn btn-outline-success" onClick={(e)=>{params.fun(e,data1.id,data1)}}>Save</button></td>
                 </tr>
       }
    </>
  )
}

export default VolAdd