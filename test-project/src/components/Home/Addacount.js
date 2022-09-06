import React from 'react'
import {useState} from 'react'
import axios from 'axios';

function Addacount() {

    const [data,setData]=useState({
      vertical:"",
        code:"",
        BE:"",
        BETBU:"",
        change:"",
        confirmed:"",
        HP:"",
        confHP:"",
        LP:"",
        risk:"",
        rag:"",
        rar:"",
        rtin:"",
        rtout:"",
        Q:"",
        r:{apr:"0",
        may:"0",
        jun:"0",
        jul:"0",
        aug:"0",
        sep:"0",
        oct:"0",
        nov:"0",
        dec:"0",
        jan:"0",
        feb:"0",
        mar:"0"},
        julRTBR:"",
        augRTBR:"",
        sepRTBR:"",
       
        remarks:""
    });
       const submit=(event)=>{
        axios.post("http://localhost:4000/data/" ,data)
        .then(r=>{
          alert("Added  ")
          console.log(r.data)
        })
        .catch(e=>{
          console.log(e.data)
        })
  
       }

  return (
    <div >
    <form className="form"  onSubmit={submit}>
        
      Vertical:<br/>
      <input type="text" placeholder='Vertical'  value={data.vertical} className="form-control" 
      onChange={(e)=>setData({...data,vertical:e.target.value})}/><br/>
      Master Customer Code:<br/><input type="text" placeholder='code'  value={data.code} className="form-control" 
      onChange={(e)=>setData({...data,code:e.target.value})}/><br/>
      BE On Portal:<br/><input type="number" placeholder="BE On portal" value={data.BE} className="form-control"
      onChange={(e)=>setData({...data,BE:e.target.value})}/><br/>
      BE TBU:<br/><input type="number" placeholder="BE TBU" value={data.BETBU} className="form-control"
      onChange={(e)=>setData({...data,BETBU:e.target.value})}/><br/>
      Change:<br/><input type="number" placeholder='Change' value={data.change} className="form-control" 
       onChange={(e)=>setData({...data,change:e.target.value})}/><br/>
      Confirmed:<br/><input type="number" placeholder='confirmed' value={data.confirmed} className="form-control" 
       onChange={(e)=>setData({...data,confirmed:e.target.value})}/><br/>
      HP:<br/><input type="number" placeholder='HP' value={data.HP} className="form-control"
      onChange={(e)=>setData({...data,HP:e.target.value})}/><br/>
      Conf+HP:<br/><input type="number" placeholder='conf+HP' value={data.confHP} className="form-control"
      onChange={(e)=>setData({...data,confHP:e.target.value})}/><br/>
      LP:<br/><input type="number" placeholder='LP' value={data.LP} className="form-control"
      onChange={(e)=>setData({...data,LP:e.target.value})}/><br/>
      At Risk:<br/><input type="number" placeholder='At risk' value={data.risk} className="form-control"
       onChange={(e)=>setData({...data,risk:e.target.value})}/><br/>
      RAG:<br/><input type="number" placeholder='RAG' value={data.rag} className="form-control"
      onChange={(e)=>setData({...data,rag:e.target.value})}/><br/>
      RAR:<br/><input type="number" placeholder="RAR" value={data.rar} className="form-control" 
      onChange={(e)=>setData({...data,rar:e.target.value})}/><br/>
      RT In:<br/><input type="number" placeholder="RT In" value={data.rtin} className="form-control"
     onChange={(e)=>setData({...data,rtin:e.target.value})}/><br/>
      RT Out:<br/><input type="number" placeholder="RT Out" value={data.rtout} className="form-control"
     onChange={(e)=>setData({...data,rtout:e.target.value})}/><br/>
     Quarter:<select value={data.Q} className="form-control" onChange={(e)=>setData({...data,Q:e.target.value})}>
  <option>Q1</option>
  <option>Q2</option>
  <option>Q3</option>
  <option>Q4</option>
</select><br/>
{data.Q==="Q4"?"JanRTBR":data.Q==="Q1"?"AprRTBR":data.Q==="Q2"?"JulRTBR":"OctRTBR"}:<br/><input type="number" 
     placeholder={data.Q==="Q4"?"JanRTBR":data.Q==="Q1"?"AprRTBR":data.Q==="Q2"?"JulRTBR":"OctRTBR"}
      value={data.julRTBR} className="form-control"
     onChange={(e)=>setData({...data,julRTBR:e.target.value})}/><br/>
     {data.Q==="Q4"?"FebRTBR":data.Q==="Q1"?"MayRTBR":data.Q==="Q2"?"AugRTBR":"NovRTBR"}:
     <br/><input type="number" placeholder={data.Q==="Q4"?"FebRTBR":data.Q==="Q1"?"MayRTBR":data.Q==="Q2"?"AugRTBR":"NovRTBR"}
      value={data.augRTBR} className="form-control"
     onChange={(e)=>setData({...data,augRTBR:e.target.value})}/><br/>
     {data.Q==="Q4"?"MarRTBR":data.Q==="Q1"?"JunRTBR":data.Q==="Q2"?"SepRTBR":"DecRTBR"}:
     <br/><input type="number" placeholder={data.Q==="Q4"?"MarRTBR":data.Q==="Q1"?"JunRTBR":data.Q==="Q2"?"SepRTBR":"DecRTBR"}
      value={data.sepRTBR} className="form-control"
     onChange={(e)=>setData({...data,sepRTBR:e.target.value})}/><br/>
     {/* Q2 RTBR:<br/><input type="number" placeholder="Q2 RTBR" value={data.Q2RTBR} className="form-control"
     onChange={(e)=>setData({...data,Q2RTBR:e.target.value})}/><br/>
      RTBR-BE:<br/><input type="number" placeholder="RTBR-BE" value={data.RTBR_BE} className="form-control"
     onChange={(e)=>setData({...data,RTBR_BE:e.target.value})}/><br/>
     RTBR High probability BE:<br/><input type="number" placeholder="RTBR_HP BE" value={data.RTBR_HPBE} className="form-control"
     onChange={(e)=>setData({...data,RTBR_HPBE:e.target.value})}/><br/> */}
     Remarks:<br/><input type="textbox" placeholder="Remarks" value={data.remarks} className="form-control"
     onChange={(e)=>setData({...data,remarks:e.target.value})}/><br/>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Addacount