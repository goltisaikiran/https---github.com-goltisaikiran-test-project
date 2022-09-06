import React from 'react'
import {useState} from 'react'

function Add(params) {
const [data ,setData]=useState(params.data)
  return (
    <>
          {params.flag?"":
        <tr>
        
        <td><input type='text' value={data.vertical} onChange={(e)=>setData({...data,vertical:e.target.value})}/></td>
        <td><input type='text' value={data.code} onChange={(e)=>setData({...data,code:e.target.value})}/></td>
        <td><input type='number' value={data.BE} onChange={(e)=>setData({...data,BE:e.target.value})}/></td>
        <td><input type='number' value={data.BETBU} onChange={(e)=>setData({...data,BETBU:e.target.value})}/></td>
        <td><input type='number' value={data.change} onChange={(e)=>setData({...data,change:e.target.value})}/></td>
        <td><input type='number'value={data.confirmed} onChange={(e)=>setData({...data,confirmed:e.target.value})} /></td>
        <td><input type='number'value={data.HP} onChange={(e)=>setData({...data,HP:e.target.value})} /></td>
        <td><input type='number' value={data.confHP} onChange={(e)=>setData({...data,confHP:e.target.value})}/></td>
        <td><input type='number' value={data.LP} onChange={(e)=>setData({...data,LP:e.target.value})}/></td>
        <td><input type='number' value={data.risk} onChange={(e)=>setData({...data,risk:e.target.value})}/></td>
        <td><input type='number' value={data.rag} onChange={(e)=>setData({...data,rag:e.target.value})}/></td>
        <td><input type='number' value={data.rar} onChange={(e)=>setData({...data,rar:e.target.value})}/></td>
        <td><input type='number' value={data.rtin} onChange={(e)=>setData({...data,rtin:e.target.value})}/></td>
        <td><input type='number' value={data.rtout} onChange={(e)=>setData({...data,rtout:e.target.value})}/></td>
        <td><input type='number' value={data.julRTBR} onChange={(e)=>setData({...data,julRTBR:e.target.value})}/></td>
        <td><input type='number' value={data.augRTBR} onChange={(e)=>setData({...data,augRTBR:e.target.value})}/></td>
        <td><input type='number' value={data.sepRTBR} onChange={(e)=>setData({...data,sepRTBR:e.target.value})}/></td>
        <td colSpan="3"></td>
        <td><input type='text' value={data.remarks} onChange={(e)=>setData({...data,remarks:e.target.value})}/></td>
        <td colSpan="2"><button  className="btn btn-outline-success" onClick={(e)=>{params.fun(e,data.id,data)}}>Save</button></td>
        </tr>}
    </>
  )
}

export default Add