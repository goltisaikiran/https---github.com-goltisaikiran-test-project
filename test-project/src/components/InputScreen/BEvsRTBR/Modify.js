import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
function Modify() {
  let params = useParams();
  const [data,setData]=useState({
    // vertical:"",
    //   code:"",
    //   BE:"",
    //   BETBU:"",
    //   change:"",
    //   confirmed:"",
    //   HP:"",
    //   confHP:"",
    //   LP:"",
    //   risk:"",
    //   rag:"",
    //   rar:"",
    //   rtin:"",
    //   rtout:"",
    //   julRTBR:"",
    //   augRTBR:"",
    //   sepRTBR:"",
    //   Q2RTBR:"",
    //   RTBR_BE:"",
    //   RTBR_HPBE:"",
    //   remarks:""
  });
  useEffect(()=>{
   axios.get("http://localhost:4000/data/"+params.id)
   .then(r=>{
    setData(r.data)
   })
   .catch(e=>{
    console.log(e.data)
   })
  },[])

  

   const submit=(event)=>{
   
    axios.put("http://localhost:4000/data/"+params.id ,data)
    .then(r=>{
      alert("Updated")
      console.log(r.data)
    })
    .catch(e=>{
      console.log(e.data)
    })
   }
  return (
    <div >
    <form className="form"  onSubmit={submit}>
        
        Vertical:<br/><input type="text" placeholder={data.vertical} className="form-control" 
          onChange={(e)=>setData({...data,vertical:e.target.value})}/><br/>
          Master Customer Code:<br/><input type="text" placeholder={data.code} className="form-control" 
          onChange={(e)=>setData({...data,code:e.target.value})}/><br/>
          BE On Portal:<br/><input type="number" placeholder={data.BE} className="form-control"
          onChange={(e)=>setData({...data,BE:e.target.value})}/><br/>
          BE TBU:<br/><input type="number" placeholder={data.BETBU} className="form-control"
          onChange={(e)=>setData({...data,BETBU:e.target.value})}/><br/>
          Change:<br/><input type="number" placeholder={data.change} className="form-control" 
           onChange={(e)=>setData({...data,change:e.target.value})}/><br/>
          Confirmed:<br/><input type="number" placeholder={data.confirmed} className="form-control" 
           onChange={(e)=>setData({...data,confirmed:e.target.value})}/><br/>
          HP:<br/><input type="number" placeholder={data.HP} className="form-control"
          onChange={(e)=>setData({...data,HP:e.target.value})}/><br/>
          Conf+HP:<br/><input type="number" placeholder={data.confHP} className="form-control"
          onChange={(e)=>setData({...data,confHP:e.target.value})}/><br/>
          LP:<br/><input type="number" placeholder={data.LP} className="form-control"
          onChange={(e)=>setData({...data,LP:e.target.value})}/><br/>
          At Risk:<br/><input type="number" placeholder={data.risk} className="form-control"
           onChange={(e)=>setData({...data,risk:e.target.value})}/><br/>
          RAG:<br/><input type="number" placeholder={data.rag} className="form-control"
          onChange={(e)=>setData({...data,rag:e.target.value})}/><br/>
          RAR:<br/><input type="number" placeholder={data.rar} className="form-control" 
          onChange={(e)=>setData({...data,rar:e.target.value})}/><br/>
          RT In:<br/><input type="number" placeholder={data.rtin} className="form-control"
         onChange={(e)=>setData({...data,rtin:e.target.value})}/><br/>
          RT Out:<br/><input type="number" placeholder={data.rtout} className="form-control"
         onChange={(e)=>setData({...data,rtout:e.target.value})}/><br/>
         Quarter:<select value={data.Q} className="form-control" onChange={(e)=>setData({...data,Q:e.target.value})}>
  <option>Q1</option>
  <option>Q2</option>
  <option>Q3</option>
  <option>Q4</option>
</select><br/>
{data.Q==="Q4"?"JanRTBR":data.Q==="Q1"?"AprRTBR":data.Q==="Q2"?"JulRTBR":"OctRTBR"}:<br/><input type="number" placeholder={data.julRTBR} className="form-control"
         onChange={(e)=>setData({...data,julRTBR:e.target.value})}/><br/>
          {data.Q==="Q4"?"FebRTBR":data.Q==="Q1"?"MayRTBR":data.Q==="Q2"?"AugRTBR":"NovRTBR"}:<br/><input type="number" placeholder={data.augRTBR} className="form-control"
         onChange={(e)=>setData({...data,augRTBR:e.target.value})}/><br/>
         {data.Q==="Q4"?"MarRTBR":data.Q==="Q1"?"JunRTBR":data.Q==="Q2"?"SepRTBR":"DecRTBR"}:<br/><input type="number" placeholder={data.sepRTBR} className="form-control"
         onChange={(e)=>setData({...data,sepRTBR:e.target.value})}/><br/>
         {/* Q2 RTBR:<br/><input type="number" placeholder={data.Q2RTBR} className="form-control"
         onChange={(e)=>setData({...data,Q2RTBR:e.target.value})}/><br/>
          RTBR-BE:<br/><input type="number" placeholder={data.RTBR_BE} className="form-control"
         onChange={(e)=>setData({...data,RTBR_BE:e.target.value})}/><br/>
         RTBR High probability BE:<br/><input type="number" placeholder={data.RTBR_HPBE} className="form-control"
         onChange={(e)=>setData({...data,RTBR_HPBE:e.target.value})}/><br/> */}
         Remarks:<br/><input type="textbox" placeholder={data.remarks} className="form-control"
         onChange={(e)=>setData({...data,remarks:e.target.value})}/><br/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Modify